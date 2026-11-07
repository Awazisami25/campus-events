// =========================
// MOBILE MENU
// =========================

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const campusFormalitise =
    document.querySelector(".campus_formalitise");


mobileMenuButton.addEventListener("click", function () {

    campusFormalitise.classList.toggle("active");

});


// =========================
// CLOSE MOBILE MENU
// WHEN LINK IS CLICKED
// =========================

const navigationLinks =
    document.querySelectorAll(".campus_formalitise a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        campusFormalitise.classList.remove("active");

    });

});


// =========================
// RATING SYSTEM
// =========================

const ratingButtons =
    document.querySelectorAll(".rating_button");

const ratingText =
    document.getElementById("ratingText");

let selectedRating = 0;


ratingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedRating =
            Number(button.dataset.rating);


        ratingButtons.forEach(function (item) {

            item.classList.remove("active");

        });


        button.classList.add("active");


        if (selectedRating === 1) {

            ratingText.textContent =
                "Very poor experience";

        } else if (selectedRating === 2) {

            ratingText.textContent =
                "Poor experience";

        } else if (selectedRating === 3) {

            ratingText.textContent =
                "Average experience";

        } else if (selectedRating === 4) {

            ratingText.textContent =
                "Good experience";

        } else if (selectedRating === 5) {

            ratingText.textContent =
                "Excellent experience";

        }

    });

});


// =========================
// CHARACTER COUNTER
// =========================

const feedbackMessage =
    document.getElementById("feedbackMessage");

const characterCount =
    document.getElementById("characterCount");


feedbackMessage.addEventListener("input", function () {

    characterCount.textContent =
        feedbackMessage.value.length;

});


// =========================
// FORM SUBMISSION
// =========================

const feedbackForm =
    document.getElementById("feedbackForm");

const feedbackMessageDisplay =
    document.getElementById("feedbackMessageDisplay");


feedbackForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("feedbackName").value.trim();

    const email =
        document.getElementById("feedbackEmail").value.trim();

    const category =
        document.getElementById("feedbackCategory").value;

    const message =
        feedbackMessage.value.trim();


    // =========================
    // VALIDATION
    // =========================

    if (name === "") {

        feedbackMessageDisplay.textContent =
            "Please enter your name.";

        return;

    }


    if (email === "") {

        feedbackMessageDisplay.textContent =
            "Please enter your email address.";

        return;

    }


    if (selectedRating === 0) {

        feedbackMessageDisplay.textContent =
            "Please select a rating.";

        return;

    }


    if (category === "") {

        feedbackMessageDisplay.textContent =
            "Please select a feedback type.";

        return;

    }


    if (message === "") {

        feedbackMessageDisplay.textContent =
            "Please write your feedback.";

        return;

    }


    // =========================
    // SUCCESS MESSAGE
    // =========================

    feedbackMessageDisplay.textContent =
        "Thank you, " +
        name +
        "! Your feedback has been submitted successfully.";


    // =========================
    // CLEAR FORM
    // =========================

    feedbackForm.reset();

    selectedRating = 0;


    ratingButtons.forEach(function (button) {

        button.classList.remove("active");

    });


    ratingText.textContent =
        "Select a rating";


    characterCount.textContent =
        "0";

});
