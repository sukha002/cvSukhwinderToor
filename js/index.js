document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    // Make sure both elements exist
    if (!menuToggle || !mainNav) {
        console.error("Mobile navigation elements not found.");
        return;
    }


    // =========================================
    // OPEN / CLOSE MOBILE MENU
    // =========================================

    menuToggle.addEventListener("click", function () {

        const menuIsOpen =
            mainNav.classList.contains("active");

        if (menuIsOpen) {

            mainNav.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        } else {

            mainNav.classList.add("active");
            menuToggle.classList.add("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );
        }

    });


    // =========================================
    // CLOSE MENU AFTER CLICKING A LINK
    // =========================================

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // =========================================
    // CLOSE MENU WHEN SCREEN BECOMES DESKTOP
    // =========================================

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            mainNav.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});x