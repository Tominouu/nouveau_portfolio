// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation du curseur personnalisé avec traînée améliorée
const cursor = document.querySelector('.cursor');
const cursorTrail = Array.from({length: 8}, () => cursor.cloneNode(true)); // Plus de traînées
cursorTrail.forEach((trail, i) => {
    trail.style.opacity = (1 - i * 0.15);
    trail.classList.add('cursor-trail');
    document.body.appendChild(trail);
});

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05 // Plus rapide
    });
    
    cursorTrail.forEach((trail, i) => {
        gsap.to(trail, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2 + (i * 0.05) // Plus fluide
        });
    });
});

// Animation du chargement spectaculaire améliorée
const loadingAnimation = () => {
    const tl = gsap.timeline();
    
    tl.to('.loader-text', {
        textContent: "100%",
        duration: 1.5, // Plus rapide
        snap: { textContent: 1 },
        stagger: 0.15
    })
    .to('.loader-text', {
        scale: 3,
        rotation: 1080, // Plus de rotation
        opacity: 0,
        duration: 0.6,
        ease: "power4.inOut"
    })
    .to('.loader', {
        clipPath: "circle(0% at 50% 50%)",
        duration: 1,
        ease: "power4.inOut"
    })
    .from('.hero-title', {
        duration: 1,
        rotationX: -180, // Plus de rotation
        transformOrigin: "50% 50% -150",
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(2)" // Plus dynamique
    }, "-=0.5")
    .from('.hero-subtitle', {
        duration: 0.8,
        scale: 0,
        rotation: -360, // Plus de rotation
        opacity: 0,
        ease: "elastic.out(1.2, 0.4)" // Plus rebondissant
    }, "-=0.8");
    
    return tl;
};

// Animation du texte défilant avec effet 3D optimisé
const marqueeAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.marquee',
            start: "top bottom", 
            end: "bottom top",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.set('.marquee-text', { 
        rotationY: -30, // Réduit de -60 à -30
        transformPerspective: 800 // Réduit de 1000 à 800
    });
    
    tl.to('.marquee', {
        opacity: 1,
        duration: 0.05
    })
    .to('.marquee-text', {
        rotationY: 30, // Réduit de 60 à 30
        duration: 1.5,
        stagger: 0.05,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });
    
    // Ajout d'un effet de flottement plus subtil
    gsap.to('.marquee-inner', {
        y: "+=10", // Réduit de 20 à 10
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    return tl;
};

// Animation des projets avec effets avancés améliorés
const projectsAnimation = () => {
    gsap.set('.project-item', { 
        opacity: 0,
        scale: 0.7,
        transformPerspective: 1000
    });
    
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=150",
                end: "bottom center",
                toggleActions: "play none none reverse",
                scrub: 0.5 // Plus réactif
            }
        });
        
        const projectImage = item.querySelector('.project-image');
        const projectContent = item.querySelector('.project-content');
        
        tl.to(item, {
            opacity: 1,
            scale: 1,
            rotation: index % 2 === 0 ? 720 : -720, // Plus de rotation
            duration: 1.5,
            ease: "power4.out"
        })
        .fromTo(projectImage, 
            { 
                scale: 1.8,
                opacity: 0,
                filter: "blur(30px)" // Plus de flou
            },
            { 
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.5,
                ease: "expo.out"
            },
            "-=1.2"
        )
        .fromTo(projectContent,
            { 
                x: item.classList.contains('even') ? -200 : 200, // Plus de mouvement
                opacity: 0,
                rotationY: 180 // Plus de rotation
            },
            { 
                x: 0,
                opacity: 1,
                rotationY: 0,
                duration: 1.2,
                ease: "back.out(2)"
            },
            "-=1.5"
        );
    });
};

// Animation de la section À propos avec split text améliorée
const aboutAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.set('.about-text', { opacity: 0, y: 100 });
    gsap.set('.skills', { opacity: 0 });
    
    tl.from('.about-title', {
        duration: 1,
        y: 150,
        rotationX: -90,
        opacity: 0,
        ease: "back.out(2)"
    })
    .to('.about-text', {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power4.out"
    })
    .to('.skills', {
        duration: 0.6,
        opacity: 1,
        ease: "power2.out"
    })
    .from('.skills .skill', {
        duration: 0.8,
        scale: 0,
        rotation: -360,
        opacity: 0,
        stagger: 0.08,
        ease: "elastic.out(1.2, 0.4)",
        transformOrigin: "center center"
    });
    
    // Animation au survol des skills améliorée
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                scale: 1.2,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "none",
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
    
    return tl;
};

// Animation de la section Contact avec morphing amélioré
const contactAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.set('.contact-text', { opacity: 0, y: 50 });
    gsap.set('.contact-form', { opacity: 0 });
    gsap.set('.form-group', { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" });
    
    tl.from('.contact-title', {
        duration: 1,
        y: 80,
        rotationY: 180,
        opacity: 0,
        ease: "power4.out"
    })
    .to('.contact-text', {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power3.out"
    })
    .to('.contact-form', {
        duration: 0.6,
        opacity: 1,
        ease: "power2.out"
    })
    .to('.form-group', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.6,
        stagger: 0.15,
        ease: "power4.inOut"
    })
    .from('.form-group input, .form-group textarea', {
        x: -80,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
    }, "-=0.3")
    .from('button[type="submit"]', {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)"
    });
    
    // Animation des champs de formulaire au focus améliorée
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.03,
                borderColor: "white",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "none",
                duration: 0.2,
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
        duration: 1.2,
        y: 150,
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
        rotation: 1080, // Plus de rotation
        duration: 0.6,
        ease: "elastic.out(1.2, 0.4)"
    });
    
    document.querySelector('.back-to-top').addEventListener('click', () => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: 0,
            ease: "power4.inOut"
        });
    });
    
    return tl;
};

// Animation de parallaxe 3D pour les images améliorée
const parallaxAnimation = () => {
    const images = document.querySelectorAll('.project-image');
    
    images.forEach((image) => {
        gsap.to(image, {
            y: 150, // Plus de mouvement
            rotationY: 25, // Plus de rotation
            rotationX: 25,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5 // Plus fluide
            }
        });
    });
};

// Animation du titre principal avec distorsion améliorée
const heroTitleAnimation = () => {
    gsap.fromTo('.hero-title', 
        {
            y: 0,
            scale: 1,
            opacity: 1,
            skewX: 0
        },
        {
            y: -200, // Plus de mouvement
            scale: 0.7, 
            opacity: 0.15,
            skewX: 25, // Plus de distorsion
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                start: "top top", 
                end: "bottom top",
                scrub: 0.5
            }
        }
    );
};

// Animation du titre des projets avec morphing amélioré
const projectsTitleAnimation = () => {
    gsap.from('.projects-title', {
        duration: 1.2,
        scale: 2.5, // Plus grand
        rotation: 720, // Plus de rotation
        opacity: 0,
        clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
        scrollTrigger: {
            trigger: '.projects-title',
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: 0.5
        }
    });
};

// Effet de zoom avancé sur les images des projets amélioré
const projectImageHoverEffect = () => {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach((img) => {
        gsap.set(img, { scale: 1 });
        
        img.addEventListener('mouseenter', () => {
            gsap.to(img, {
                scale: 1.3, // Plus de zoom
                filter: "brightness(1.3) contrast(1.2) saturate(1.2)", // Plus d'effets
                duration: 0.4,
                ease: "power2.out"
            });
            
            gsap.to(cursor, {
                scale: 4, // Plus grand
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "8px",
                duration: 0.2
            });
        });
        
        img.addEventListener('mouseleave', () => {
            gsap.to(img, {
                scale: 1,
                filter: "brightness(1) contrast(1) saturate(1)",
                duration: 0.4,
                ease: "power2.out"
            });
            
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                duration: 0.2
            });
        });
    });
};

// Effet de distorsion magnétique amélioré
const hoverDistortionEffect = () => {
    const items = document.querySelectorAll('.project-item, .skill, button');
    
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 2.5, // Plus grand
                borderRadius: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                rotation: 90, // Plus de rotation
                duration: 0.2
            });
            
            gsap.to(item, {
                scale: 1.08, // Plus de zoom
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                rotation: 0,
                duration: 0.2
            });
            
            gsap.to(item, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
};

// Initialisation des animations
window.addEventListener('DOMContentLoaded', () => {
    // Créer une master timeline
    const masterTimeline = gsap.timeline();
    
    // Ajouter les animations à la master timeline avec des transitions plus fluides
    masterTimeline
        .add(loadingAnimation())
        .add(marqueeAnimation(), "+=0.1")
        .add(projectsAnimation(), "-=0.4")
        .add(aboutAnimation(), "-=0.5")
        .add(contactAnimation(), "-=0.4")
        .add(footerAnimation(), "-=0.3")
        .add(backToTopAnimation(), "-=0.4");
    
    // Animations indépendantes
    parallaxAnimation();
    heroTitleAnimation();
    projectsTitleAnimation();
    projectImageHoverEffect();
    hoverDistortionEffect();
});