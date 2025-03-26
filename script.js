document.addEventListener("DOMContentLoaded", () => {
    // Language translations
    const translations = {
        en: {
            "title": "Junior Software Developer | Designer | Creative Thinker",
            "about-me": "About Me",
            "about-me-text": "A passionate individual with a love for coding, design, and problem-solving. Looking to create impactful digital experiences.",
            "skills": "Skills",
            "html-css": "HTML & CSS",
            "javascript": "JavaScript",
            "responsive-design": "Responsive Design",
            "problem-solving": "Problem Solving",
            "contact": "Contact",
            "contact-me": "Contact Me",
            "linkedin": "LinkedIn",
            "form-title": "Send me a message",
            "form-submit": "Send",
            "form-close": "Close",
            "experience": "Experience",
            "job1-position": "Junior Developer",
            "job1-company": "Instituto de la Vivienda de la Ciudad",
            "job1-date": "June 2023 - Present",
            "job1-desc1": "Supported a credit administration MSSQL System and automated routine tasks using Python.",
            "job1-desc2": "Collaborated with a team to deliver projects on time.",
            "job2-position": "Developer Intern",
            "job2-company": "EXO SA",
            "job2-date": "May 2022 - August 2022",
            "job2-desc1": "Internship provided via school assignment. Development department.",
            "job2-desc2": "Created an API for data normalisation and visualization using FastAPI and ClickHouse.",
            "job3-position": "Data Science Intern",
            "job3-company": "Siemens Energy",
            "job3-date": "April 2025 - Present",
            "job3-desc1": "Part of the Dual System proposed by AHK.",
            "job3-desc2": "Data Analytics, KPI, objective setting and other tasks.",
            "education": "Education",
            "edu1-degree": "Computer Technician",
            "edu1-institution": "Escuela Técnica Número 1 'Ingeniero Otto Krause'",
            "edu1-date": "Graduated: December 2022",
            "edu2-degree": "Bachelor's Degree in Computer Science",
            "edu2-institution": "Universidad de Buenos Aires",
            "edu2-date": "In progress",
            "edu3-degree": "Superior Data Science Technician",
            "edu3-institution": "AHK Deutsch-Argentinische Industrie und Handleskammer",
            "edu3-date": "Graduating: December 2027",
            "footer": "© 2025 Martin Ezequiel Diaz Villarrubia. All rights reserved."
        },
        es: {
            "title": "Desarrollador de Software Junior | Diseñador | Pensador Creativo",
            "about-me": "Sobre Mí",
            "about-me-text": "Un individuo apasionado con amor por la programación, el diseño y la resolución de problemas. Busco crear experiencias digitales impactantes.",
            "skills": "Habilidades",
            "html-css": "HTML y CSS",
            "javascript": "JavaScript",
            "responsive-design": "Diseño Responsivo",
            "problem-solving": "Resolución de Problemas",
            "contact": "Contacto",
            "contact-me": "Contáctame",
            "linkedin": "LinkedIn",
            "form-title": "Envíame un mensaje",
            "form-submit": "Enviar",
            "form-close": "Cerrar",
            "experience": "Experiencia",
            "job1-position": "Desarrollador Junior",
            "job1-company": "Instituto de la Vivienda de la Ciudad",
            "job1-date": "Junio 2023 - Presente",
            "job1-desc1": "Apoyé un sistema de administración de créditos MSSQL y automatizé tareas rutinarias usando Python.",
            "job1-desc2": "Colaboré con un equipo para entregar proyectos a tiempo.",
            "job2-position": "Pasante Desarrollador",
            "job2-company": "EXO SA",
            "job2-date": "Mayo 2022 - Agosto 2022",
            "job2-desc1": "Pasantía proporcionada por asignación escolar. Departamento de desarrollo.",
            "job2-desc2": "Creé una API para normalización y visualización de datos usando FastAPI y ClickHouse.",
            "job3-position": "Pasante en Ciencia de Datos",
            "job3-company": "Siemens Energy",
            "job3-date": "Abril 2025 - Presente",
            "job3-desc1": "Parte del Sistema Dual propuesto por AHK.",
            "job3-desc2": "Análisis de datos, KPI, establecimiento de objetivos y otras tareas.",
            "education": "Educación",
            "edu1-degree": "Técnico en Computación",
            "edu1-institution": "Escuela Técnica Número 1 'Ingeniero Otto Krause'",
            "edu1-date": "Graduado: Diciembre 2022",
            "edu2-degree": "Licenciatura en Ciencias de la Computación",
            "edu2-institution": "Universidad de Buenos Aires",
            "edu2-date": "En curso",
            "edu3-degree": "Técnico Superior en Ciencia de Datos",
            "edu3-institution": "AHK Deutsch-Argentinische Industrie und Handleskammer",
            "edu3-date": "Graduación: Diciembre 2027",
            "footer": "© 2025 Martin Ezequiel Diaz Villarrubia. Todos los derechos reservados."
        }
    };

    // Function to update text based on language
    function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.getAttribute("data-lang");
            if (key === "name") return; // Skip name
            if (key === "linkedin") {
                element.innerHTML = `<a href="https://linkedin.com/in/martin-ezequiel-diaz-villarrubia-b1a79a256/" target="_blank">${translations[lang][key]}</a>`;
            } else {
                element.innerHTML = translations[lang][key]; // Preserve HTML like <em>
            }
        });

        document.documentElement.lang = lang;
        document.getElementById("lang-select").value = lang;
    }

    // Animate progress bars
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Scroll animations
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));

    // Collapsible sections
    const collapsibleTitles = document.querySelectorAll(".collapsible-title");
    collapsibleTitles.forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            if (content) {
                content.classList.toggle("active");
            }
        });
    });

    // Language switcher
    const langSelect = document.getElementById("lang-select");
    langSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        updateLanguage(lang);
        localStorage.setItem("preferredLang", lang);
    });

    // Contact form popup
    const contactBtn = document.getElementById("contact-btn");
    const formPopup = document.getElementById("contact-form-popup");
    const closeFormBtn = document.getElementById("close-form-btn");

    contactBtn.addEventListener("click", () => {
        formPopup.classList.add("active");
    });

    closeFormBtn.addEventListener("click", () => {
        formPopup.classList.remove("active");
    });

    // Close popup when clicking outside the form
    formPopup.addEventListener("click", (e) => {
        if (e.target === formPopup) {
            formPopup.classList.remove("active");
        }
    });

    // Set initial language to Spanish
    const savedLang = localStorage.getItem("preferredLang") || "es";
    updateLanguage(savedLang);
});