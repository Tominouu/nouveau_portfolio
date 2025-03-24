// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation du curseur personnalisé avec traînée
const cursor = document.querySelector('.cursor');
const cursorTrail = Array.from({length: 5}, () => cursor.cloneNode(true));
cursorTrail.forEach((trail, i) => {
    trail.style.opacity = (1 - i * 0.2);
    trail.classList.add('cursor-trail');
    document.body.appendChild(trail);
});

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
    
    cursorTrail.forEach((trail, i) => {
        gsap.to(trail, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3 + (i * 0.08)
        });
    });
});

// Animation du chargement spectaculaire
const loadingAnimation = () => {
    const tl = gsap.timeline();
    
    tl.to('.loader-text', {
        textContent: "100%",
        duration: 2,
        snap: { textContent: 1 },
        stagger: 0.25
    })
    .to('.loader-text', {
        scale: 2,
        rotation: 720,
        opacity: 0,
        duration: 0.8,
        ease: "power4.inOut"
    })
    .to('.loader', {
        clipPath: "circle(0% at 50% 50%)",
        duration: 1.5,
        ease: "power4.inOut"
    })
    .from('.hero-title', {
        duration: 1.5,
        rotationX: -90,
        transformOrigin: "50% 50% -100",
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)"
    }, "-=0.5")
    .from('.hero-subtitle', {
        duration: 1,
        scale: 0,
        rotation: -180,
        opacity: 0,
        ease: "elastic.out(1, 0.3)"
    }, "-=1");
    
    return tl;
};

// Animation du texte défilant avec effet 3D
const marqueeAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.marquee',
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.set('.marquee-text', { rotationY: -45 });
    
    tl.to('.marquee', {
        opacity: 1,
        duration: 0.3 // Réduit de 1 à 0.3
    })
    .to('.marquee-text', {
        rotationY: 45,
        duration: 2,
        stagger: 0.1,
        ease: "none",
        repeat: -1,
        yoyo: true
    });
    
    return tl;
};

// Animation des projets avec effets avancés
const projectsAnimation = () => {
    gsap.set('.project-item', { 
        opacity: 0,
        scale: 0.8,
        transformOrigin: "center center"
    });
    
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item, index) => {
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
            scale: 1,
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 2,
            ease: "power3.out"
        })
        .fromTo(projectImage, 
            { 
                scale: 1.5,
                opacity: 0,
                filter: "blur(20px)"
            },
            { 
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 2,
                ease: "expo.out"
            },
            "-=1.5"
        )
        .fromTo(projectContent,
            { 
                x: item.classList.contains('even') ? -100 : 100,
                opacity: 0,
                rotationY: 90
            },
            { 
                x: 0,
                opacity: 1,
                rotationY: 0,
                duration: 1.5,
                ease: "back.out(1.7)"
            },
            "-=2"
        );
    });
};

// Animation de la section À propos avec split text
const aboutAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Réinitialisation des états initiaux
    gsap.set('.about-text', { opacity: 0, y: 50 });
    gsap.set('.skills', { opacity: 0 });
    
    tl.from('.about-title', {
        duration: 1.2,
        y: 100,
        rotationX: -45,
        opacity: 0,
        ease: "back.out(1.7)"
    })
    .to('.about-text', {
        duration: 1.2,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power4.out"
    })
    .to('.skills', {
        duration: 0.8,
        opacity: 1,
        ease: "power2.out"
    })
    .from('.skills .skill', {
        duration: 1,
        scale: 0,
        rotation: -180,
        opacity: 0,
        stagger: 0.1,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "center center"
    });
    
    // Animation au survol des skills
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    return tl;
};

// Animation de la section Contact avec morphing
const contactAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Réinitialisation des états initiaux
    gsap.set('.contact-text', { opacity: 0, y: 30 });
    gsap.set('.contact-form', { opacity: 0 });
    gsap.set('.form-group', { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" });
    
    tl.from('.contact-title', {
        duration: 1.2,
        y: 50,
        rotationY: 90,
        opacity: 0,
        ease: "power4.out"
    })
    .to('.contact-text', {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out"
    })
    .to('.contact-form', {
        duration: 0.8,
        opacity: 1,
        ease: "power2.out"
    })
    .to('.form-group', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.inOut"
    })
    .from('.form-group input, .form-group textarea', {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.4")
    .from('button[type="submit"]', {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    });
    
    // Animation des champs de formulaire au focus
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                borderColor: "white",
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                borderColor: "rgba(255, 255, 255, 0.3)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
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
    
    tl.from('.footer', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
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
        scale: 1,
        rotation: 720,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
    });
    
    document.querySelector('.back-to-top').addEventListener('click', () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: 0,
            ease: "power4.inOut"
        });
    });
    
    return tl;
};

// Animation de parallaxe 3D pour les images
const parallaxAnimation = () => {
    const images = document.querySelectorAll('.project-image');
    
    images.forEach((image) => {
        gsap.to(image, {
            y: 100,
            rotationY: 15,
            rotationX: 15,
            scale: 1.1,
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

// Animation du titre principal avec distorsion
const heroTitleAnimation = () => {
    gsap.to('.hero-title', {
        y: -150,
        scale: 0.8,
        opacity: 0.2,
        skewX: 15,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
};

// Animation du titre des projets avec morphing
const projectsTitleAnimation = () => {
    gsap.from('.projects-title', {
        duration: 1.5,
        scale: 2,
        rotation: 360,
        opacity: 0,
        clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
        scrollTrigger: {
            trigger: '.projects-title',
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: 1
        }
    });
};

// Effet de zoom avancé sur les images des projets
const projectImageHoverEffect = () => {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach((img) => {
        gsap.set(img, { scale: 1 });
        
        img.addEventListener('mouseenter', () => {
            gsap.to(img, {
                scale: 1.2,
                filter: "brightness(1.2) contrast(1.1)",
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.to(cursor, {
                scale: 3,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderRadius: "5px",
                duration: 0.3
            });
        });
        
        img.addEventListener('mouseleave', () => {
            gsap.to(img, {
                scale: 1,
                filter: "brightness(1) contrast(1)",
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
};

// Effet de distorsion magnétique
const hoverDistortionEffect = () => {
    const items = document.querySelectorAll('.project-item, .skill, button');
    
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 2,
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                rotation: 45,
                duration: 0.3
            });
            
            gsap.to(item, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                rotation: 0,
                duration: 0.3
            });
            
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
};

// Initialisation des animations
window.addEventListener('DOMContentLoaded', () => {
    // Créer une master timeline
    const masterTimeline = gsap.timeline();
    
    // Ajouter les animations à la master timeline avec des transitions fluides
    masterTimeline
        .add(loadingAnimation())
        .add(marqueeAnimation(), "+=0.2")
        .add(projectsAnimation(), "-=0.3")
        .add(aboutAnimation(), "-=0.4")
        .add(contactAnimation(), "-=0.3")
        .add(footerAnimation(), "-=0.2")
        .add(backToTopAnimation(), "-=0.3");
    
    // Animations indépendantes
    parallaxAnimation();
    heroTitleAnimation();
    projectsTitleAnimation();
    projectImageHoverEffect();
    hoverDistortionEffect();
});