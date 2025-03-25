$(document).ready(function () {
    // Initialize Materialize components
    $('.modal').modal();
    $('.materialboxed').materialbox();

    // Click Me Button Alert and open the modal
    $('#clickMeButton').click(function() {
        alert("Thanks for clicking me.");
        var modal = M.Modal.getInstance($('#modal1'));
        modal.open();
    });

    // Card List
    const cardList = [
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
        }
    ];

    // Function to display more information when a card is clicked
    const displayCardInfo = (card) => {
        alert(`Information about ${card.title}: ${card.description}`);
    };

    // Function to add cards dynamically
    const addCards = (items) => {
        $('#card-section').empty(); // Clear existing cards
        items.forEach(item => {
            let itemToAppend = `
                <div class="col s4 center-align">
                    <div class="card medium" id="${item.title}"> <!-- Added ID for each card -->
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
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>
                </div>`;
            $("#card-section").append(itemToAppend);

            // Add click event listener for each card
            $(`#${item.title}`).click(() => {
                displayCardInfo(item); // Call the function to show info
            });
        });
    };

    // Add cards to the page
    addCards(cardList);

    // Form submission event
    $('#formSubmit').click(function () {
        let formData = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };
        console.log("Form Data Submitted: ", formData);
    });
});
