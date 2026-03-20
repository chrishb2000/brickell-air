/**
 * Brickell Air Duct Cleaning - Main JavaScript
 * Designed by Christian Herencia
 */

// ========================================
// Translations
// ========================================
const translations = {
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        hero_title_1: "Professional Air Duct Cleaning in Miami",
        hero_subtitle_1: "Breathe cleaner air with our expert services",
        hero_title_2: "24/7 Available Service",
        hero_subtitle_2: "Always ready to serve you",
        hero_title_3: "Certified Professionals",
        hero_subtitle_3: "Trusted by hundreds of satisfied customers",
        video_title: "Experience the Difference",
        video_subtitle: "Watch how we transform your air quality",
        our_services: "Our Services",
        service_1_title: "Air Duct Cleaning",
        service_1_desc: "Complete cleaning of your air duct system to remove dust, debris, and contaminants.",
        service_2_title: "Dryer Vent Cleaning",
        service_2_desc: "Prevent fire hazards and improve dryer efficiency with our vent cleaning service.",
        service_3_title: "AC Coils Cleaning",
        service_3_desc: "Improve your AC efficiency and air quality with professional coil cleaning.",
        service_4_title: "Commercial Services",
        service_4_desc: "Comprehensive HVAC cleaning solutions for businesses and commercial properties.",
        learn_more: "Learn More",
        testimonials_title: "What Our Customers Say",
        cta_title: "Ready to Breathe Cleaner Air?",
        cta_subtitle: "Contact us today for a free consultation",
        footer_contact: "Contact Information",
        footer_services: "Services",
        footer_legal: "Legal",
        privacy_policy: "Privacy Policy",
        cookies_policy: "Cookies Policy",
        terms_conditions: "Terms & Conditions",
        designed_by: "Designed by",
        about_title: "About Brickell Air Duct Cleaning",
        about_subtitle: "Your trusted partner for clean air in Miami",
        about_story_title: "Our Story",
        about_story_text: "Brickell Air Duct Cleaning has been serving the Miami, Florida area with professional air duct cleaning services. We are committed to providing top-quality service to our customers, ensuring that their indoor air quality is improved and their HVAC systems run efficiently.",
        about_story_text2: "Our team of certified technicians uses state-of-the-art equipment to thoroughly clean your air ducts, dryer vents, and AC coils. We take pride in our work and stand behind our reputation for excellence.",
        why_choose_us: "Why Choose Us?",
        feature_1: "✓ 24/7 Available Service",
        feature_2: "✓ Certified and Experienced Technicians",
        feature_3: "✓ State-of-the-Art Equipment",
        feature_4: "✓ Competitive Pricing",
        feature_5: "✓ 100% Satisfaction Guarantee",
        feature_6: "✓ Serving Miami and Surrounding Areas",
        stat_clients: "Happy Clients",
        stat_availability: "Availability",
        stat_satisfaction: "Satisfaction",
        stat_experience: "Years Experience",
        our_team: "Our Professional Team",
        team_description: "Certified experts dedicated to improving your air quality",
        team_role_1: "Certified Technicians",
        team_desc_1: "Our technicians are fully certified and trained in the latest air duct cleaning techniques.",
        team_role_2: "Customer Service",
        team_desc_2: "Our support team is available 24/7 to answer your questions and schedule appointments.",
        team_role_3: "HVAC Specialists",
        team_desc_3: "Expert specialists in HVAC systems ensuring optimal performance and air quality.",
        services_title: "Our Services",
        services_subtitle: "Comprehensive air duct cleaning solutions for your home or business",
        service_1_detail: "Our comprehensive air duct cleaning service removes dust, debris, mold, and other contaminants from your HVAC system. Using state-of-the-art equipment, we thoroughly clean all components of your ductwork, including supply and return ducts, registers, grilles, diffusers, heat exchangers, cooling coils, and fan motors.",
        service_2_detail: "Clogged dryer vents are a serious fire hazard and can significantly reduce your dryer's efficiency. Our professional dryer vent cleaning service removes lint buildup and blockages, ensuring proper airflow and reducing the risk of fire. We clean vents of all lengths and configurations.",
        service_3_detail: "Dirty AC coils can significantly reduce your air conditioner's efficiency and cooling capacity. Our professional coil cleaning service removes dirt, grime, and buildup from both evaporator and condenser coils, restoring optimal performance and energy efficiency to your cooling system.",
        service_4_detail: "We provide comprehensive commercial air duct cleaning services for businesses, office buildings, retail stores, restaurants, and industrial facilities. Our commercial services are designed to minimize disruption to your operations while ensuring a healthy environment for employees and customers.",
        benefit_1: "✓ Improved indoor air quality",
        benefit_2: "✓ Reduced allergens and pollutants",
        benefit_3: "✓ Enhanced HVAC efficiency",
        benefit_4: "✓ Lower energy bills",
        benefit_5: "✓ Extended HVAC system life",
        benefit_6: "✓ Reduced fire hazard risk",
        benefit_7: "✓ Faster drying times",
        benefit_8: "✓ Lower energy consumption",
        benefit_9: "✓ Extended dryer lifespan",
        benefit_10: "✓ Improved safety",
        benefit_11: "✓ Improved cooling performance",
        benefit_12: "✓ Better energy efficiency",
        benefit_13: "✓ Reduced breakdowns",
        benefit_14: "✓ Cleaner indoor air",
        benefit_15: "✓ Lower repair costs",
        benefit_16: "✓ Flexible scheduling",
        benefit_17: "✓ Minimal business disruption",
        benefit_18: "✓ Healthier work environment",
        benefit_19: "✓ Compliance with regulations",
        benefit_20: "✓ Customized solutions",
        our_process: "Our Cleaning Process",
        step_1_title: "Inspection",
        step_1_desc: "We thoroughly inspect your duct system to assess the level of contamination.",
        step_2_title: "Preparation",
        step_2_desc: "We protect your property and set up our specialized cleaning equipment.",
        step_3_title: "Cleaning",
        step_3_desc: "Using powerful vacuums and brushes, we remove all contaminants from your ducts.",
        step_4_title: "Sanitization",
        step_4_desc: "We apply EPA-approved sanitizers to eliminate bacteria and mold.",
        step_5_title: "Final Check",
        step_5_desc: "We perform a final inspection to ensure complete satisfaction.",
        portfolio_title: "Our Portfolio",
        portfolio_subtitle: "See the results of our professional air duct cleaning work",
        filter_all: "All",
        filter_residential: "Residential",
        filter_commercial: "Commercial",
        filter_before_after: "Before & After",
        project_1_title: "Residential Duct Cleaning",
        project_1_desc: "Complete duct system cleaning",
        project_2_title: "Office Building HVAC",
        project_2_desc: "Commercial HVAC cleaning",
        project_3_title: "Dryer Vent Cleaning",
        project_3_desc: "Lint removal and cleaning",
        project_4_title: "AC Coils Deep Clean",
        project_4_desc: "Evaporator and condenser cleaning",
        project_5_title: "Restaurant Ventilation",
        project_5_desc: "Kitchen exhaust system cleaning",
        project_6_title: "Before & After Comparison",
        project_6_desc: "See the dramatic difference",
        view_project: "View Project",
        contact_title: "Contact Us",
        contact_subtitle: "Get in touch with our air duct cleaning experts",
        contact_info_title: "Contact Information",
        contact_info_text: "We're available 24/7 to answer your questions and schedule your air duct cleaning service.",
        address: "Address",
        phone: "Phone",
        hours: "Hours",
        hours_value: "Open 24 hours",
        whatsapp: "WhatsApp",
        service_areas: "Service Areas",
        service_areas_text: "We proudly serve Miami and surrounding areas"
    },
    es: {
        home: "Inicio",
        about: "Nosotros",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
        hero_title_1: "Limpieza Profesional de Conductos en Miami",
        hero_subtitle_1: "Respire aire más limpio con nuestros servicios expertos",
        hero_title_2: "Servicio Disponible 24/7",
        hero_subtitle_2: "Siempre listos para servirle",
        hero_title_3: "Profesionales Certificados",
        hero_subtitle_3: "Confiable por cientos de clientes satisfechos",
        video_title: "Experimente la Diferencia",
        video_subtitle: "Mire cómo transformamos su calidad de aire",
        our_services: "Nuestros Servicios",
        service_1_title: "Limpieza de Conductos de Aire",
        service_1_desc: "Limpieza completa de su sistema de conductos para eliminar polvo, escombros y contaminantes.",
        service_2_title: "Limpieza de Ductos de Secadora",
        service_2_desc: "Prevenga riesgos de incendio y mejore la eficiencia de su secadora con nuestro servicio.",
        service_3_title: "Limpieza de Bobinas de AC",
        service_3_desc: "Mejore la eficiencia de su AC y la calidad del aire con limpieza profesional de bobinas.",
        service_4_title: "Servicios Comerciales",
        service_4_desc: "Soluciones integrales de limpieza de HVAC para negocios y propiedades comerciales.",
        learn_more: "Más Información",
        testimonials_title: "Lo Que Dicen Nuestros Clientes",
        cta_title: "¿Listo para Respirar Aire Más Limpio?",
        cta_subtitle: "Contáctenos hoy para una consulta gratuita",
        footer_contact: "Información de Contacto",
        footer_services: "Servicios",
        footer_legal: "Legal",
        privacy_policy: "Política de Privacidad",
        cookies_policy: "Política de Cookies",
        terms_conditions: "Términos y Condiciones",
        designed_by: "Diseñado por",
        about_title: "Sobre Brickell Air Duct Cleaning",
        about_subtitle: "Su socio de confianza para aire limpio en Miami",
        about_story_title: "Nuestra Historia",
        about_story_text: "Brickell Air Duct Cleaning ha estado sirviendo al área de Miami, Florida con servicios profesionales de limpieza de conductos de aire. Estamos comprometidos a proporcionar servicio de la más alta calidad a nuestros clientes, asegurando que su calidad de aire interior mejore y sus sistemas HVAC funcionen eficientemente.",
        about_story_text2: "Nuestro equipo de técnicos certificados utiliza equipos de última generación para limpiar a fondo sus conductos de aire, ductos de secadora y bobinas de AC. Nos enorgullece nuestro trabajo y respaldamos nuestra reputación de excelencia.",
        why_choose_us: "¿Por Qué Elegirnos?",
        feature_1: "✓ Servicio Disponible 24/7",
        feature_2: "✓ Técnicos Certificados y Experimentados",
        feature_3: "✓ Equipos de Última Generación",
        feature_4: "✓ Precios Competitivos",
        feature_5: "✓ 100% Garantía de Satisfacción",
        feature_6: "✓ Sirviendo Miami y Áreas Circundantes",
        stat_clients: "Clientes Felices",
        stat_availability: "Disponibilidad",
        stat_satisfaction: "Satisfacción",
        stat_experience: "Años de Experiencia",
        our_team: "Nuestro Equipo Profesional",
        team_description: "Expertos certificados dedicados a mejorar su calidad de aire",
        team_role_1: "Técnicos Certificados",
        team_desc_1: "Nuestros técnicos están completamente certificados y entrenados en las últimas técnicas de limpieza de conductos.",
        team_role_2: "Servicio al Cliente",
        team_desc_2: "Nuestro equipo de soporte está disponible 24/7 para responder sus preguntas y programar citas.",
        team_role_3: "Especialistas HVAC",
        team_desc_3: "Especialistas expertos en sistemas HVAC asegurando rendimiento óptimo y calidad de aire.",
        services_title: "Nuestros Servicios",
        services_subtitle: "Soluciones integrales de limpieza de conductos para su hogar o negocio",
        service_1_detail: "Nuestro servicio integral de limpieza de conductos elimina polvo, escombros, moho y otros contaminantes de su sistema HVAC. Usando equipos de última generación, limpiamos a fondo todos los componentes de su ductwork, incluyendo conductos de suministro y retorno, registros, rejillas, difusores, intercambiadores de calor, bobinas de enfriamiento y motores de ventilador.",
        service_2_detail: "Los ductos de secadora obstruidos son un grave riesgo de incendio y pueden reducir significativamente la eficiencia de su secadora. Nuestro servicio profesional de limpieza elimina la acumulación de pelusa y obstrucciones, asegurando el flujo de aire adecuado y reduciendo el riesgo de incendio. Limpiamos ductos de todas las longitudes y configuraciones.",
        service_3_detail: "Las bobinas de AC sucias pueden reducir significativamente la eficiencia de su aire acondicionado y la capacidad de enfriamiento. Nuestro servicio profesional de limpieza elimina suciedad, grasa y acumulación de las bobinas del evaporador y condensador, restaurando el rendimiento óptimo y la eficiencia energética de su sistema de enfriamiento.",
        service_4_detail: "Proporcionamos servicios integrales de limpieza de conductos de aire comerciales para negocios, edificios de oficinas, tiendas, restaurantes e instalaciones industriales. Nuestros servicios comerciales están diseñados para minimizar la interrupción de sus operaciones mientras aseguramos un ambiente saludable para empleados y clientes.",
        benefit_1: "✓ Mejora de la calidad del aire interior",
        benefit_2: "✓ Reducción de alérgenos y contaminantes",
        benefit_3: "✓ Mayor eficiencia del HVAC",
        benefit_4: "✓ Menores facturas de energía",
        benefit_5: "✓ Vida útil extendida del sistema HVAC",
        benefit_6: "✓ Menor riesgo de incendio",
        benefit_7: "✓ Tiempos de secado más rápidos",
        benefit_8: "✓ Menor consumo de energía",
        benefit_9: "✓ Vida útil extendida de la secadora",
        benefit_10: "✓ Mayor seguridad",
        benefit_11: "✓ Mejor rendimiento de enfriamiento",
        benefit_12: "✓ Mayor eficiencia energética",
        benefit_13: "✓ Menos averías",
        benefit_14: "✓ Aire interior más limpio",
        benefit_15: "✓ Menores costos de reparación",
        benefit_16: "✓ Programación flexible",
        benefit_17: "✓ Mínima interrupción del negocio",
        benefit_18: "✓ Ambiente de trabajo más saludable",
        benefit_19: "✓ Cumplimiento de regulaciones",
        benefit_20: "✓ Soluciones personalizadas",
        our_process: "Nuestro Proceso de Limpieza",
        step_1_title: "Inspección",
        step_1_desc: "Inspeccionamos a fondo su sistema de ductos para evaluar el nivel de contaminación.",
        step_2_title: "Preparación",
        step_2_desc: "Protegemos su propiedad y configuramos nuestro equipo de limpieza especializado.",
        step_3_title: "Limpieza",
        step_3_desc: "Usando aspiradoras y cepillos potentes, eliminamos todos los contaminantes de sus ductos.",
        step_4_title: "Santización",
        step_4_desc: "Aplicamos sanitizantes aprobados por la EPA para eliminar bacterias y moho.",
        step_5_title: "Verificación Final",
        step_5_desc: "Realizamos una inspección final para asegurar completa satisfacción.",
        portfolio_title: "Nuestro Portafolio",
        portfolio_subtitle: "Vea los resultados de nuestro trabajo profesional de limpieza de conductos",
        filter_all: "Todos",
        filter_residential: "Residencial",
        filter_commercial: "Comercial",
        filter_before_after: "Antes y Después",
        project_1_title: "Limpieza de Conductos Residencial",
        project_1_desc: "Limpieza completa del sistema de ductos",
        project_2_title: "HVAC de Edificio de Oficinas",
        project_2_desc: "Limpieza comercial de HVAC",
        project_3_title: "Limpieza de Ducto de Secadora",
        project_3_desc: "Eliminación de pelusa y limpieza",
        project_4_title: "Limpieza Profunda de Bobinas AC",
        project_4_desc: "Limpieza de evaporador y condensador",
        project_5_title: "Ventilación de Restaurante",
        project_5_desc: "Limpieza de sistema de escape de cocina",
        project_6_title: "Comparación Antes y Después",
        project_6_desc: "Vea la diferencia dramática",
        view_project: "Ver Proyecto",
        contact_title: "Contáctenos",
        contact_subtitle: "Póngase en contacto con nuestros expertos en limpieza de conductos",
        contact_info_title: "Información de Contacto",
        contact_info_text: "Estamos disponibles 24/7 para responder sus preguntas y programar su servicio de limpieza de conductos.",
        address: "Dirección",
        phone: "Teléfono",
        hours: "Horario",
        hours_value: "Abierto 24 horas",
        whatsapp: "WhatsApp",
        service_areas: "Áreas de Servicio",
        service_areas_text: "Servimos con orgullo a Miami y áreas circundantes"
    }
};

// Current language
let currentLang = 'en';

// ========================================
// DOM Elements
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // Carousel
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselDots = document.getElementById('carousel-dots');
    
    // Scroll buttons
    const scrollTopBtn = document.getElementById('scroll-top');
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    // Language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Portfolio modal
    const portfolioModal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Current slide index
    let currentSlide = 0;
    let carouselInterval;
    let currentModalIndex = 0;
    let filteredItems = Array.from(portfolioItems);

    // ========================================
    // Navigation Functions
    // ========================================
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ========================================
    // Carousel Functions
    // ========================================
    
    function initCarousel() {
        if (carouselSlides.length === 0) return;
        
        // Create dots
        carouselSlides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            carouselDots.appendChild(dot);
        });
        
        // Start auto-play
        startCarousel();
    }
    
    function startCarousel() {
        carouselInterval = setInterval(() => {
            goToSlide((currentSlide + 1) % carouselSlides.length);
        }, 5000);
    }
    
    function stopCarousel() {
        clearInterval(carouselInterval);
    }
    
    function goToSlide(index) {
        carouselSlides[currentSlide].classList.remove('active');
        document.querySelectorAll('.carousel-dot')[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        carouselSlides[currentSlide].classList.add('active');
        document.querySelectorAll('.carousel-dot')[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide((currentSlide + 1) % carouselSlides.length);
    }
    
    function prevSlide() {
        goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
    }
    
    if (carouselPrev) carouselPrev.addEventListener('click', () => {
        prevSlide();
        stopCarousel();
        startCarousel();
    });
    
    if (carouselNext) carouselNext.addEventListener('click', () => {
        nextSlide();
        stopCarousel();
        startCarousel();
    });
    
    // Pause carousel on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
    }

    // ========================================
    // Scroll to Top
    // ========================================
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Language Switcher
    // ========================================
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.langCode;
            if (lang !== currentLang) {
                currentLang = lang;
                updateLanguage(lang);
                
                // Update active button
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Save preference
                localStorage.setItem('preferredLang', lang);
            }
        });
    });
    
    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.dataset.lang;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (savedLang === 'es') {
        currentLang = 'es';
        const esBtn = document.querySelector('[data-lang-code="es"]');
        if (esBtn) {
            esBtn.classList.add('active');
            const enBtn = document.querySelector('[data-lang-code="en"]');
            if (enBtn) enBtn.classList.remove('active');
            updateLanguage('es');
        }
    }

    // ========================================
    // Portfolio Modal
    // ========================================
    
    function openModal(index) {
        if (filteredItems.length === 0) return;
        
        currentModalIndex = index;
        const item = filteredItems[index];
        const img = item.querySelector('.portfolio-img');
        const caption = item.querySelector('.portfolio-overlay h3');
        
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.textContent = caption ? caption.textContent : '';
        
        portfolioModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevImage() {
        currentModalIndex = (currentModalIndex - 1 + filteredItems.length) % filteredItems.length;
        openModal(currentModalIndex);
    }
    
    function showNextImage() {
        currentModalIndex = (currentModalIndex + 1) % filteredItems.length;
        openModal(currentModalIndex);
    }
    
    portfolioItems.forEach((item, index) => {
        const viewBtn = item.querySelector('.view-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(index);
            });
        }
        
        item.addEventListener('click', () => {
            openModal(index);
        });
    });
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', showPrevImage);
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', showNextImage);
    }
    
    // Close modal on background click
    if (portfolioModal) {
        portfolioModal.addEventListener('click', (e) => {
            if (e.target === portfolioModal) {
                closeModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portfolioModal && portfolioModal.classList.contains('active')) {
            closeModal();
        }
        if (e.key === 'ArrowLeft' && portfolioModal && portfolioModal.classList.contains('active')) {
            showPrevImage();
        }
        if (e.key === 'ArrowRight' && portfolioModal && portfolioModal.classList.contains('active')) {
            showNextImage();
        }
    });

    // ========================================
    // Portfolio Filter
    // ========================================
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            portfolioItems.forEach(item => {
                const categories = item.dataset.category;
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Update filtered items array
            filteredItems = Array.from(portfolioItems).filter(item => item.style.display !== 'none');
            currentModalIndex = 0;
        });
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.service-card, .testimonial-card, .team-card, .process-step, .area-card').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // WhatsApp Message
    // ========================================
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            const message = encodeURIComponent('Hello, I would like to inquire about your air duct cleaning services.');
            whatsappBtn.href = `https://wa.me/17867080518?text=${message}`;
        });
    }

    // ========================================
    // Initialize
    // ========================================
    
    initCarousel();
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});

// ========================================
// Performance Optimization
// ========================================

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});
