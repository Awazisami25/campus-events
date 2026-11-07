/* =========================================
   EVENT SEARCH & FILTER
========================================= */

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const departmentFilter =
    document.getElementById("departmentFilter");

const searchButton =
    document.getElementById("searchButton");

const eventCards =
    document.querySelectorAll(".event-card");

const noResults =
    document.getElementById("noResults");


function filterEvents() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedCategory =
        categoryFilter.value;


    const selectedDepartment =
        departmentFilter.value;


    let visibleEvents = 0;


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

            visibleEvents++;

        } else {

            card.classList.add("hidden");

        }

    });


    if (visibleEvents === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}


searchButton.addEventListener(
    "click",
    filterEvents
);


searchInput.addEventListener(
    "input",
    filterEvents
);


categoryFilter.addEventListener(
    "change",
    filterEvents
);


departmentFilter.addEventListener(
    "change",
    filterEvents
);



/* =========================================
   MOBILE MENU
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const mobileMenuButton =
            document.getElementById(
                "mobileMenuButton"
            );


        const mobileMenu =
            document.querySelector(
                ".campus_formalitise"
            );


        if (
            mobileMenuButton &&
            mobileMenu
        ) {

            mobileMenuButton.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.toggle(
                        "active"
                    );


                    if (
                        mobileMenu.classList.contains(
                            "active"
                        )
                    ) {
                        mobileMenuButton.textContent =
                            "✕";

                    } else {
                        mobileMenuButton.textContent =
                            "☰";

                    }
                }
            );

        }
    }
);