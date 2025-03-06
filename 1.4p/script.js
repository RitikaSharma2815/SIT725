function changeText() {
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
    var colorsArray = ["red", "blue", "green", "purple", "orange"];

    var number = getRandomNumberBetween(0, textsArray.length - 1);
    var colorNumber = getRandomNumberBetween(0, colorsArray.length - 1);

    console.log("Index: ", number);

    var heading = document.getElementById("heading");

    // Fade out effect
    heading.style.opacity = 0;

    setTimeout(() => {
        heading.innerHTML = textsArray[number];
        heading.style.color = colorsArray[colorNumber]; // Change text color
        heading.style.opacity = 1; // Fade in effect
    }, 300);
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
