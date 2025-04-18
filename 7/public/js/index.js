$(document).ready(function () {
    // Initialize Materialize components
    $('.modal').modal();
    $('.materialboxed').materialbox();

    // Click Me Button Alert and open modal
    $('#clickMeButton').click(function () {
        alert("Thanks for clicking me.");
        var modal = M.Modal.getInstance($('#modal1'));
        modal.open();
    });

    // Function to add cards dynamically
    const addCards = (items) => {
        $('#card-section').empty(); 
        items.forEach(item => {
            let itemToAppend = `
                <div class="col s4 center-align">
                    <div class="card medium"> 
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${item.image}" alt="${item.title}">
                        </div>

                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">${item.title}
                                <i class="material-icons right">more_vert</i>
                            </span>

                            <p><a href="#">${item.link}</a></p>
                        </div>
                        
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">${item.title}
                                <i class="material-icons right">close</i>
                            </span>

                            <p class="card-text" style="color: black;">${item.description}</p>
                        </div>
                    </div>
                </div>`;
            $("#card-section").append(itemToAppend);
        });
    };

    // Fetch projects from the server
    const fetchProjects = () => {
        $.get("/api/projects", function (response) {
            if (response.statusCode === 200) {
                addCards(response.data);
            } else {
                console.log("Error fetching data");
            }
        });
    };

    fetchProjects(); // Load projects on page load

    // Form submission event
    $('#userForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.post("/api/users", formData, function (response) {
            if (response.statusCode === 200) {
                alert("User data saved successfully!");
                $('#userForm')[0].reset(); // Clear form after submission
            } else {
                alert("Error saving data");
            }
        });
    });

    // Connect to the server socket
const socket = io();

// Listen to 'number' event
socket.on('number', (msg) => {
  console.log('Random number:', msg);
  document.getElementById('number').innerText = msg;
 });
});
