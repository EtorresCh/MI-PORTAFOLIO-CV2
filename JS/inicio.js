
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



// Proposito: Código JavaScript para el desplazamiento de los  navegadores

    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });


        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    });


// Proposito: Código JavaScript para el cambio del navegador
    
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar-custom');
    const aboutSection = document.querySelector('#about');
    const navbarLogo = document.getElementById('navbar-logo');
    const logoWhite = 'imagenes/logoparafondonegro-removebg-preview.png';
    const logoTransparent = 'imagenes/logoparafondonegro-removebg-preview.png';

    if (!isMobile) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });

        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    function updateNavbar() {
        const aboutSectionRect = aboutSection.getBoundingClientRect();
        if (aboutSectionRect.top <= 0 && aboutSectionRect.bottom >= 0) {
            navbar.classList.add('transparent');
            navbarLogo.src = logoWhite;
        } else {
            navbar.classList.remove('transparent');
            navbarLogo.src = logoTransparent;
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Llama a la función al cargar la página
});