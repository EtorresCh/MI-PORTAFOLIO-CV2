
// Propósito: Código JavaScript para el boton 
document.addEventListener("DOMContentLoaded", function() {
    let mybutton = document.getElementById("backToTopBtn");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", function() {
        topFunction();
    });

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-custom");

    // Al cargar la página, la navbar es transparente
    navbar.classList.add("transparent");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            navbar.classList.remove("transparent"); // Se vuelve opaca
        } else {
            navbar.classList.add("transparent"); // Permanece transparente en la parte superior
        }
    });
});


//cambiar colores a texto
function cambiarEstilos(color) {
    // Cambia el color del texto
    let elementos = document.querySelectorAll(".texto-cambiable");
    elementos.forEach(el => el.style.color = color);

    // Cambia el color del borde
    let navbar = document.querySelector(".navbar-custom");
    if (navbar) {
        navbar.style.borderBottom = `0.2px solid ${color}`;
    }
    // cambiar el color del active
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link.active");
    navLinks.forEach(link => {
        link.style.removeProperty("color"); // Elimina cualquier color anterior
        link.style.color = color; // Aplica el nuevo color
    });
    //cambia el color del border del footer
    let footer = document.querySelector(".footer");
    if (footer) {
        footer.style.borderTop = `0.2px solid ${color}`;
    }
    let button=document.querySelector(".button_lg");
    if(button){
        button.style.backgroundColor =color;
    }
    let logo = document.getElementById("cambio-logo"); 
    if (logo) {
        switch (color) {
            case "rgb(99, 6, 6)": // Rojo
                logo.src = "imagenes/logoparafondonegro-removebg-preview.png";
                break;
            case "rgb(16, 228, 217)": // Azul
                logo.src = "imagenes/log2-removebg-preview.png";
                break;
            case "rgb(7, 75, 7)": // Verde
                logo.src = "imagenes/log4-removebg-preview.png";
                break;
            case "rgb(255, 60, 0)": // Naranja
                logo.src = "imagenes/logo3-removebg-preview.png";
                break;
            default:
                logo.src = "imagenes/logoparafondonegro-removebg-preview.png"; // Logo por defecto
        }
    }
}