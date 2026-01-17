
    // --- ANIMATION TYPEWRITER ---
    const textToType = "Future Ingénieure en Génie Informatique.";
    const typeContainer = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typeContainer.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
             // Optionnel: Faire clignoter le curseur à la fin
            // setTimeout(() => typeContainer.innerHTML += '|', 500);
            // setTimeout(() => typeContainer.innerHTML = typeContainer.innerHTML.slice(0, -1), 1000);
        }
    }
    // Délai pour que le document soit prêt et que la section Hero soit visible
    window.addEventListener('load', () => {
        // Observer la section 'about' pour lancer le typewriter quand elle est visible
        const heroSection = document.getElementById('about');
        const heroObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(heroSection); // Arrêter d'observer après le déclenchement
                }
            });
        }, { threshold: 0.5 }); // Déclenchement quand 50% de la section hero est visible
        heroObserver.observe(heroSection);
    });

    // --- ANIMATION SCROLL (FADE IN) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-scroll').forEach(section => {
        observer.observe(section);
    });

    // --- ACTIVE LINK ON SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.sidebar ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) { // Seuil ajusté pour l'activation
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // --- MOBILE MENU ---
    function toggleMenu() {
        document.getElementById('sidebar').classList.toggle('open');
    }

    // Close menu when clicking a link on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('open');
        });
    });
