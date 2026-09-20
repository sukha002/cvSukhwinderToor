document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            menuToggle.classList.toggle("active");

            mainNav.classList.toggle("active");

            const isOpen =
                menuToggle.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after selecting a page */

        const navLinks =
            mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuToggle.classList.remove("active");

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       MOVING TIMELINE MARKER
    ===================================================== */

    const marker =
        document.querySelector(".timeline-marker");

    const timeline =
        document.querySelector(".timeline");

    if (!marker || !timeline) {
        return;
    }


    const items =
        Array.from(
            timeline.querySelectorAll(".timeline-item")
        );


    if (!items.length) {
        return;
    }


    /* =====================================================
       FIND THE TIMELINE ITEM CLOSEST TO SCREEN CENTER
    ===================================================== */

    function moveMarker() {

        const screenCenter =
            window.innerHeight / 2;


        let closestItem = null;

        let closestDistance = Infinity;


        items.forEach(function (item) {

            const rect =
                item.getBoundingClientRect();


            const itemCenter =
                rect.top + (rect.height / 2);


            const distance =
                Math.abs(
                    itemCenter - screenCenter
                );


            if (distance < closestDistance) {

                closestDistance = distance;

                closestItem = item;

            }

        });


        if (!closestItem) {
            return;
        }


        /* =================================================
           CALCULATE MARKER POSITION
        ================================================= */

        const timelineRect =
            timeline.getBoundingClientRect();

        const itemRect =
            closestItem.getBoundingClientRect();


        const itemCenter =
            itemRect.top +
            (itemRect.height / 2);


        let markerTop =
            itemCenter -
            timelineRect.top -
            (marker.offsetHeight / 2);


        /* Keep marker inside timeline */

        const minimumTop = 0;

        const maximumTop =
            timeline.offsetHeight -
            marker.offsetHeight;


        markerTop =
            Math.max(
                minimumTop,
                Math.min(
                    markerTop,
                    maximumTop
                )
            );


        marker.style.top =
            markerTop + "px";


        /* =================================================
           ACTIVE CARD
        ================================================= */

        items.forEach(function (item) {

            item.classList.remove("active");

        });


        closestItem.classList.add("active");

    }


    /* =====================================================
       INITIAL POSITION
    ===================================================== */

    moveMarker();


    /* =====================================================
       SCROLL
    ===================================================== */

    window.addEventListener(
        "scroll",
        moveMarker,
        {
            passive: true
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        moveMarker
    );


    /* =====================================================
       HANDLE MOBILE MENU RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 900 &&
                mainNav &&
                menuToggle
            ) {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});