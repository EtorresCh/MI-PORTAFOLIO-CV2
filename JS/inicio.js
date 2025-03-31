
// Desplega el nav
document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  });

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

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) { 
        
    } else {
        // En móviles, muestra los elementos sin animación
        document.querySelectorAll('.navbar, .card, .barra1, .barra2, .adaptable1, .adaptable2, .adaptable3, .caja-formulario, .img-sobre, .info-sobre')
            .forEach(el => {
                el.style.transform = "none";
                el.style.visibility = "visible";
            });
    }
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
            case "rgb(99, 6, 6)": 
                logo.src = "imagenes/logoparafondonegro-removebg-preview.png";
                break;
            case "rgb(16, 228, 217)": 
                logo.src = "imagenes/log2-removebg-preview.png";
                break;
            case "rgb(7, 75, 7)": 
                logo.src = "imagenes/log4-removebg-preview.png";
                break;
            case "rgb(255, 60, 0)": 
                logo.src = "imagenes/logo3-removebg-preview.png";
                break;
            default:
                logo.src = "imagenes/logoparafondonegro-removebg-preview.png"; // Logo por defecto
        }
    }
    // cambia el color del boton de regreso al menu
    let backToTopBtn = document.querySelector("#backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.style.backgroundColor = color;
    }

   // Cambia el color de la barra de desplazamiento (scrollbar)
    let styleTag = document.getElementById("dynamic-scrollbar-style");
    
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-scrollbar-style";
        document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
        ::-webkit-scrollbar-thumb {
            background-color: ${color} !important;
            border-radius: 15px;
        }
    `;
    // cambia color de btn -contacto
    let button2 = document.querySelector(".button2");
    if (button2) {
        button2.style.backgroundColor = color;
    }
    // cambia el hover de los navlink
    let navStyleTag = document.getElementById("dynamic-navlink-style");
    if (!navStyleTag) {
        navStyleTag = document.createElement("style");
        navStyleTag.id = "dynamic-navlink-style";
        document.head.appendChild(navStyleTag);
    }
    navStyleTag.innerHTML = `
        .navbar-custom .nav-link:hover {
            color: ${color} !important;
        }
        .nav-item a.btn.btn-outline-light:hover {
            background-color: transparent;
            color: ${color} !important;
            border-color: ${color} !important;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
    `;
    // cambia el color de  la cajas de iconos de slider
    document.querySelectorAll(".caja-icon").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.boxShadow = `0px 0px 15px 5px ${color}`; // Cambia el box-shadow
            icon.style.transform = "scale(1.3)"; // Aumenta el tamaño
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.boxShadow = ""; // Restaura el box-shadow
            icon.style.transform = ""; // Restaura el tamaño original
        });
    });

    document.querySelectorAll(".caja-icon2").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.boxShadow = `0px 0px 15px 5px ${color}`; 
            icon.style.transform = "scale(1.3)"; 
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.boxShadow = ""; 
            icon.style.transform = ""; 
        });
    });
}

