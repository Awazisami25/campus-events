/* =========================================
   GALLERY FILTER
========================================= */

const galleryFilters =
    document.querySelectorAll(".gallery_filter");

const galleryItems =
    document.querySelectorAll(".gallery_item");


galleryFilters.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedFilter =
            button.dataset.filter;


        /* Remove active from all buttons */

        galleryFilters.forEach(function(item) {

            item.classList.remove("active");

        });


        /* Add active to clicked button */

        button.classList.add("active");


        /* Filter images */

        galleryItems.forEach(function(item) {

            const category =
                item.dataset.category;


            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});



/* =========================================
   IMAGE VIEWER
========================================= */

const imageViewer =
    document.getElementById("imageViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closeViewer =
    document.getElementById("closeViewer");

const previousImage =
    document.getElementById("previousImage");

const nextImage =
    document.getElementById("nextImage");

const viewButtons =
    document.querySelectorAll(".view_image");


let currentImage = 0;


/* Get all gallery images */

const images = Array.from(
    document.querySelectorAll(".gallery_item img")
);



/* Open image */

viewButtons.forEach(function(button, index) {

    button.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            currentImage = index;

            showImage();

        }
    );

});



/* Show selected image */

function showImage() {

    viewerImage.src =
        images[currentImage].src;

    viewerImage.alt =
        images[currentImage].alt;

    imageViewer.classList.add("active");

}



/* Close viewer */

closeViewer.addEventListener(
    "click",
    function() {

        imageViewer.classList.remove("active");

    }
);



/* Previous */

previousImage.addEventListener(
    "click",
    function() {

        currentImage--;

        if (currentImage < 0) {

            currentImage =
                images.length - 1;

        }

        showImage();

    }
);



/* Next */

nextImage.addEventListener(
    "click",
    function() {

        currentImage++;

        if (
            currentImage >=
            images.length
        ) {

            currentImage = 0;

        }

        showImage();

    }
);



/* Close by clicking background */

imageViewer.addEventListener(
    "click",
    function(event) {

        if (
            event.target === imageViewer
        ) {

            imageViewer.classList.remove(
                "active"
            );

        }

    }
);



/* Keyboard controls */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            !imageViewer.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            imageViewer.classList.remove(
                "active"
            );

        }


        if (event.key === "ArrowLeft") {

            previousImage.click();

        }


        if (event.key === "ArrowRight") {

            nextImage.click();

        }

    }
);



/* =========================================
   MOBILE MENU
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

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
                function() {

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