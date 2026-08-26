document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL SUAVE
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbar =
                document.querySelector(".navbar");

            const offset =
                navbar
                    ? navbar.offsetHeight + 12
                    : 12;

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                offset;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       FAQ
    ====================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {

        question.addEventListener("click", () => {

            const currentItem =
                question.closest(".faq-item");

            const isOpen =
                currentItem.classList.contains("open");


            document.querySelectorAll(".faq-item.open")
                .forEach((item) => {

                    item.classList.remove("open");

                });


            if (!isOpen) {

                currentItem.classList.add("open");

            }

        });

    });


    /* =====================================================
       REVEAL
    ====================================================== */

    const elements =
        document.querySelectorAll(
            ".process-card, .responsibility-item, .faq-item, .intro-box"
        );

    elements.forEach((element) => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    obs.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.1
            }
        );


    elements.forEach((element) => {

        observer.observe(element);

    });


    /* =====================================================
       NAVBAR
    ====================================================== */

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.07)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();


    /* =====================================================
       BOTÕES
    ====================================================== */

    document.querySelectorAll(
        ".button, .nav-button"
    ).forEach((button) => {

        button.addEventListener(
            "mousedown",
            () => {

                button.style.transform =
                    "scale(.97)";

            }
        );


        button.addEventListener(
            "mouseup",
            () => {

                button.style.transform =
                    "";

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });

});