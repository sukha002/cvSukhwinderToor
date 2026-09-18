/* =====================================================
   PUBLICATIONS PAGE JAVASCRIPT
   Sukhwinder Singh
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("navigation");


    if (menuToggle && navigation) {


        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    navigation.classList.toggle("show");


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* Close menu when link is clicked */

        const navigationLinks =
            navigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove("show");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }



    /* =================================================
       CURRENT YEAR
    ================================================= */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    /* =================================================
       DOMAIN CARD REVEAL
    ================================================= */

    const cards =
        document.querySelectorAll(".domain-card");


    if ("IntersectionObserver" in window) {


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        cards.forEach(function (card) {

            observer.observe(card);

        });

    }



    /* =================================================
       ARTICLE REVEAL
    ================================================= */

    const articles =
        document.querySelectorAll(".article-card");


    if ("IntersectionObserver" in window) {


        const articleObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                articleObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        articles.forEach(function (article) {

            articleObserver.observe(article);

        });

    }

});