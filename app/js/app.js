// ZIRA STORE - JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // Obtener la página actual
    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    // Seleccionar los enlaces del menú
    const navLinks = document.querySelectorAll("nav a");

    // Marcar la página actual
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

});
