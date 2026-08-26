document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURAÇÃO
    ====================================================== */

    const whatsappNumber = "SEUNUMERO";


    /* =====================================================
       LINKS DE WHATSAPP
       
       Caso você prefira trocar as mensagens futuramente,
       basta alterar este objeto.
    ====================================================== */

    const whatsappMessages = {

        pronto:
            "Olá NextWeb! Tenho interesse no site pronto a partir de R$ 500. Gostaria de saber mais sobre o que está incluído.",

        plano700:
            "Olá NextWeb! Tenho interesse no plano de Site Profissional a partir de R$ 700. Gostaria de saber mais sobre o plano.",

        plano1000:
            "Olá NextWeb! Tenho interesse no plano de Site Criado do Zero a partir de R$ 1.000. Gostaria de saber mais e entender como podemos começar.",

        plano1500:
            "Olá NextWeb! Tenho interesse no plano de Site Criado do Zero com Sistema de Contas a partir de R$ 1.500. Gostaria de saber mais sobre as funcionalidades.",

        ajuda:
            "Olá NextWeb! Preciso de ajuda para escolher o melhor plano para minha empresa.",

        geral:
            "Olá NextWeb! Quero começar um projeto de site. Gostaria de conversar sobre as opções disponíveis."

    };


    /* =====================================================
       GERA LINK DO WHATSAPP
    ====================================================== */

    function createWhatsAppLink(message) {

        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    }


    /* =====================================================
       CONFIGURA BOTÕES DE WHATSAPP
    ====================================================== */

    document.querySelectorAll(".whatsapp-button")
        .forEach((button) => {

            const type =
                button.dataset.whatsapp;

            if (!type) {
                return;
            }

            if (!whatsappMessages[type]) {
                return;
            }

            button.href =
                createWhatsAppLink(
                    whatsappMessages[type]
                );

        });


    /* =====================================================
       SCROLL SUAVE
    ====================================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const id =
                    link.getAttribute("href");

                if (!id || id === "#") {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const navbar =
                    document.querySelector(".navbar");

                const offset =
                    navbar
                        ? navbar.offsetHeight + 10
                        : 10;

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
       NAVBAR
    ====================================================== */

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) {
            return;
        }

        navbar.style.boxShadow =
            window.scrollY > 20
                ? "0 10px 30px rgba(0,0,0,.07)"
                : "none";

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       ANIMAÇÃO DOS CARDS
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".ready-card, .plan-card, .help-card"
        );


    revealElements.forEach((element) => {

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


    revealElements.forEach((element) => {

        observer.observe(element);

    });


    /* =====================================================
       EFEITO DE CLIQUE
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


        button.addEventListener(
            "touchend",
            () => {

                button.style.transform =
                    "";

            }
        );

    });

});