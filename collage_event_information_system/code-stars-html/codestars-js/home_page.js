/* =========================================
   MOBILE MENU
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.querySelector(".campus_formalitise");


    if (mobileMenuButton && mobileMenu) {

        mobileMenuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");


            if (mobileMenu.classList.contains("active")) {

                mobileMenuButton.textContent = "✕";

            } else {

                mobileMenuButton.textContent = "☰";

            }

        });

    }

});




/* =========================================
   EVENT SEARCH & FILTER
========================================= */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const departmentFilter = document.getElementById("departmentFilter");
const searchButton = document.getElementById("searchButton");

const eventCards = document.querySelectorAll(".event-card");


function filterEvents() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;

    const selectedDepartment =
        departmentFilter.value;


    eventCards.forEach(function(card) {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const description =
            card.querySelector(".event-description")
                .textContent
                .toLowerCase();

        const category =
            card.dataset.category;

        const department =
            card.dataset.department;


        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        const matchesDepartment =
            selectedDepartment === "all" ||
            department === selectedDepartment;


        if (
            matchesSearch &&
            matchesCategory &&
            matchesDepartment
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


/* Search button */

searchButton.addEventListener(
    "click",
    filterEvents
);


/* Search while typing */

searchInput.addEventListener(
    "input",
    filterEvents
);


/* Category filter */

categoryFilter.addEventListener(
    "change",
    filterEvents
);


/* Department filter */

departmentFilter.addEventListener(
    "change",
    filterEvents
);


/* =========================================
   EVENT CATEGORIES
========================================= */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const categoryName =
            card.querySelector("p")
                .textContent
                .toLowerCase();


        /*
            Match the category card
            to the select option.
        */

        if (categoryName === "academic") {

            categoryFilter.value = "academic";

        }

        else if (categoryName === "social") {

            categoryFilter.value = "social";

        }

        else if (categoryName === "sports") {

            categoryFilter.value = "sports";

        }

        else if (categoryName === "workshops") {

            categoryFilter.value = "workshops";

        }

        else if (categoryName === "competitions") {

            categoryFilter.value = "competitions";

        }

        else if (categoryName === "seminars") {

            categoryFilter.value = "seminars";

        }

        else if (categoryName === "other") {

            categoryFilter.value = "other";

        }


        /*
            Run the filtering after
            clicking the category.
        */

        filterEvents();

    });

});


/* =========================================
   DEPARTMENT LINKS
========================================= */

const departmentLinks =
    document.querySelectorAll(".department-list a");


departmentLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const department =
            link.textContent
                .replace("›", "")
                .trim()
                .toLowerCase();


        if (
            department.includes("computer")
        ) {

            departmentFilter.value = "computer";

        }

        else if (
            department.includes("business")
        ) {

            departmentFilter.value = "business";

        }

        else if (
            department.includes("engineering")
        ) {

            departmentFilter.value = "engineering";

        }

        else if (
            department.includes("arts")
        ) {

            departmentFilter.value = "arts";

        }

        else if (
            department.includes("science")
        ) {

            departmentFilter.value = "science";

        }


        filterEvents();

    });

});


/* =========================================
   PAST EVENTS GALLERY
========================================= */

const galleryImages =
    document.querySelectorAll(".gallery-image");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function(event) {

        event.preventDefault();

        const imageSource =
            image.querySelector("img").src;


        /*
            Open the selected image
            in a new browser tab.
        */

        window.open(
            imageSource,
            "_blank"
        );

    });

});




/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    if (name === "") {

        formMessage.textContent =
            "Please enter your name.";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";


    contactForm.reset();

});