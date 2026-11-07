
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
// CLOSE MENU AFTER CLICK
// =========================

const navigationLinks =
    document.querySelectorAll(".campus_formalitise a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        campusFormalitise.classList.remove("active");

    });

});


// =========================
// CHARACTER COUNTER
// =========================

const contactMessage =
    document.getElementById("contactMessage");

const characterCount =
    document.getElementById("characterCount");


contactMessage.addEventListener("input", function () {

    characterCount.textContent =
        contactMessage.value.length;

});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const contactMessageDisplay =
    document.getElementById("contactMessageDisplay");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName")
        .value
        .trim();

    const email =
        document.getElementById("contactEmail")
        .value
        .trim();

    const subject =
        document.getElementById("contactSubject")
        .value
        .trim();

    const message =
        contactMessage.value
        .trim();


    // =========================
    // VALIDATION
    // =========================

    if (name === "") {

        contactMessageDisplay.textContent =
            "Please enter your name.";

        return;

    }


    if (email === "") {

        contactMessageDisplay.textContent =
            "Please enter your email address.";

        return;

    }


    if (subject === "") {

        contactMessageDisplay.textContent =
            "Please enter a subject.";

        return;

    }


    if (message === "") {

        contactMessageDisplay.textContent =
            "Please write your message.";

        return;

    }


    // =========================
    // SUCCESS
    // =========================

    contactMessageDisplay.textContent =
        "Thank you, " +
        name +
        "! Your message has been received.";


    // =========================
    // RESET FORM
    // =========================

    contactForm.reset();

    characterCount.textContent = "0";

});


// =========================
// FAQ
// =========================

const faqQuestions =
    document.querySelectorAll(".faq_question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem =
            question.parentElement;

        const answer =
            faqItem.querySelector(".faq_answer");


        faqItem.classList.toggle("active");


        if (faqItem.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});

