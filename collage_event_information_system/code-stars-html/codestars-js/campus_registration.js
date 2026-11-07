// =========================
// MOBILE MENU
// =========================

const registrationMenuButton =
    document.getElementById("registrationMenuButton");

const registrationLinks =
    document.querySelector(".registration_links");


registrationMenuButton.addEventListener("click", function () {

    registrationLinks.classList.toggle("active");

});


// =========================
// CLOSE MOBILE MENU
// =========================

const navigationLinks =
    document.querySelectorAll(".registration_links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        registrationLinks.classList.remove("active");

    });

});


// =========================
// CHARACTER COUNTER
// =========================

const registrationMessage =
    document.getElementById("registrationMessage");

const registrationCharacterCount =
    document.getElementById("registrationCharacterCount");


registrationMessage.addEventListener("input", function () {

    registrationCharacterCount.textContent =
        registrationMessage.value.length;

});


// =========================
// REGISTRATION FORM
// =========================

const registrationForm =
    document.getElementById("registrationForm");

const registrationMessageDisplay =
    document.getElementById("registrationMessageDisplay");


registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const firstName =
        document.getElementById("firstName")
        .value
        .trim();


    const lastName =
        document.getElementById("lastName")
        .value
        .trim();


    const email =
        document.getElementById("registrationEmail")
        .value
        .trim();


    const phone =
        document.getElementById("phoneNumber")
        .value
        .trim();


    const studentId =
        document.getElementById("studentId")
        .value
        .trim();


    const eventSelected =
        document.getElementById("eventSelect")
        .value;


    const department =
        document.getElementById("department")
        .value
        .trim();


    const agreement =
        document.getElementById("registrationAgreement")
        .checked;


    if (firstName === "") {

        registrationMessageDisplay.textContent =
            "Please enter your first name.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (lastName === "") {

        registrationMessageDisplay.textContent =
            "Please enter your last name.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (email === "") {

        registrationMessageDisplay.textContent =
            "Please enter your email address.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (phone === "") {

        registrationMessageDisplay.textContent =
            "Please enter your phone number.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (studentId === "") {

        registrationMessageDisplay.textContent =
            "Please enter your student ID.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (eventSelected === "") {

        registrationMessageDisplay.textContent =
            "Please select an event.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (department === "") {

        registrationMessageDisplay.textContent =
            "Please enter your department.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    if (!agreement) {

        registrationMessageDisplay.textContent =
            "Please confirm that your information is correct.";

        registrationMessageDisplay.style.color = "#c0392b";

        return;
    }


    registrationMessageDisplay.textContent =
        "Registration successful! Thank you, " +
        firstName +
        ".";

    registrationMessageDisplay.style.color = "#188038";


    registrationForm.reset();


    registrationCharacterCount.textContent = "0";

});