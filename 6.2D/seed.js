const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
  {
    title: "Poodle",
    image: "image/dogp2.jpeg",
    link: "Hi! I'm Poodle", 
    description: "HELLO!!"
},
{
    title: "Pug",
    image: "image/dog3.jpeg",
    link: "Hi! I'm Pug",
    description: "Hello! my name is pug!"
},
{
    title: "Golden Retriever",
    image: "image/dog.avif",
    link: "Hi! I'm Golden Retriever",
    description: "I'm a friendly Golden Retriever."
},
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));