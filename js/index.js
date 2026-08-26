document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL SUAVE DOS BOTÕES
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const id = link.getAttribute("href");

            if (!id || id === "#") {
                return;
            }

            const target = document.querySelector(id);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbar = document.querySelector(".navbar");

            const offset = navbar
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
       ANIMAÇÃO AO ENTRAR NA TELA
    ====================================================== */

    const revealElements = document.querySelectorAll(
        ".problem-card, .benefit, .step, .next-action, .final-cta"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                obs.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* =====================================================
       NAVBAR AO ROLAR
    ====================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.07)";

        } else {

            navbar.style.boxShadow = "none";

        }
    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       EFEITO DE CLIQUE DOS BOTÕES
    ====================================================== */

    document.querySelectorAll(
        ".button, .nav-button"
    ).forEach((button) => {

        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.97)";
        });

        button.addEventListener("mouseup", () => {
            button.style.transform = "";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

        button.addEventListener("touchend", () => {
            button.style.transform = "";
        });

    });


    /* =====================================================
       LINKS EXTERNOS / PÁGINAS
    ====================================================== */

    document.querySelectorAll("a[href]").forEach((link) => {

        link.addEventListener("click", () => {

            const destination = link.getAttribute("href");

            if (
                destination &&
                !destination.startsWith("#") &&
                !destination.startsWith("mailto:") &&
                !destination.startsWith("tel:")
            ) {

                document.body.classList.add("page-changing");

            }

        });

    });

});