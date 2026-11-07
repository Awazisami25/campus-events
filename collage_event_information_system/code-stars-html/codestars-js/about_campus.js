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


            if (
                mobileMenu.classList.contains("active")
            ) {

                mobileMenuButton.textContent = "✕";

            } else {

                mobileMenuButton.textContent = "☰";

            }

        });

    }

});