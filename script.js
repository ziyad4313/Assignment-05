
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update copyright year
    document.getElementById("year").textContent =
        new Date().getFullYear();


    // Close mobile navbar after clicking a link
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbar = document.getElementById("navbarNav");

            if (navbar.classList.contains("show")) {

                bootstrap.Collapse
                    .getOrCreateInstance(navbar)
                    .hide();

            }

        });

    });


    // Newsletter form
    const form = document.getElementById("subscribeForm");

    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        message.textContent =
            "Thank you for subscribing!";

        form.reset();

    });

});