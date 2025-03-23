// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation du curseur personnalisé
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Animation du chargement
const loadingAnimation = () => {
    const tl = gsap.timeline();
    
    tl.to('.loader-text', {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 1
    })
    .to('.loader', {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut"
    })
    .from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=0.5")
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.5");
    
    return tl;
};

// Animation du texte défilant
const marqueeAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.marquee',
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reverse"
        }
    });
    
    tl.to('.marquee', {
        opacity: 1,
        duration: 1
    });
    
    return tl;
};

// Animation des projets
const projectsAnimation = () => {
    gsap.set('.project-item', { opacity: 0, y: 100 });
    
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=100",
                end: "bottom center",
                toggleActions: "play none none reverse",
                scrub: 1
            }
        });
        
        const projectImage = item.querySelector('.project-image');
        const projectContent = item.querySelector('.project-content');
        
        tl.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out"
        })
        .fromTo(projectImage, 
            { scale: 1.2, opacity: 0.5 },
            { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
            "-=1.5"
        )
        .fromTo(projectContent,
            { x: item.classList.contains('even') ? -50 : 50, opacity: 0.5 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
            "-=2"
        );
    });
};

// Animation de la section À propos
const aboutAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
        }
    });
    
    tl.from('.about-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .to('.about-text', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    }, "-=0.5")
    .to('.skills', {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5");
    
    return tl;
};

// Animation de la section Contact
const contactAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
        }
    });
    
    tl.from('.contact-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .to('.contact-text', {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .to('.contact-form', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5");
    
    return tl;
};
const footerAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: "top bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
        }
    });
    
    tl.to('.footer', {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });
    
    return tl;
};

const backToTopAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'body',
            start: "top -=100",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
        }
    });
    
    tl.to('.back-to-top', {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5,
        ease: "power3.out"
    });
    
    document.querySelector('.back-to-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    return tl;
};

// Animation de parallaxe pour les images
const parallaxAnimation = () => {
    const images = document.querySelectorAll('.project-image');
    
    images.forEach((image) => {
        gsap.to(image, {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
};

// Animation du titre principal lors du défilement
const heroTitleAnimation = () => {
    gsap.to('.hero-title', {
        y: -100,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
};

// Animation du titre des projets lors du défilement
const projectsTitleAnimation = () => {
    gsap.from('.projects-title', {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: '.projects-title',
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: 1
        }
    });
};

// Effet de zoom sur les images des projets
const projectImageHoverEffect = () => {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach((img) => {
        gsap.set(img, { scale: 1, transition: '0.5s ease' });
        
        img.addEventListener('mouseenter', () => {
            gsap.to(img, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.to(cursor, {
                scale: 2,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                duration: 0.3
            });
        });
        
        img.addEventListener('mouseleave', () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                duration: 0.3
            });
        });
    });
};

// Effet de distorsion lors du survol (simulation)
const hoverDistortionEffect = () => {
    const items = document.querySelectorAll('.project-item, .skill, button');
    
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                duration: 0.3
            });
        });
    });
};

// Initialisation des animations
window.addEventListener('DOMContentLoaded', () => {
    // Créer une master timeline
    const masterTimeline = gsap.timeline();
    
    // Ajouter les animations à la master timeline
    masterTimeline
        .add(loadingAnimation())
        .add(marqueeAnimation(), "+=0.5")
        .add(projectsAnimation(), "-=0.5")
        .add(aboutAnimation(), "-=0.5")
        .add(contactAnimation(), "-=0.5")
        .add(footerAnimation(), "-=0.5")
        .add(backToTopAnimation(), "-=0.5");
    
    // Animations indépendantes
    parallaxAnimation();
    heroTitleAnimation();
    projectsTitleAnimation();
    projectImageHoverEffect();
    hoverDistortionEffect();
});