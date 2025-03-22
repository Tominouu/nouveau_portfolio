const lenis = new Lenis({
    duration: 0.04,  // Ajuste la durée pour un scroll plus naturel (1 = rapide, 2 = lent)
    smooth: true,   // Active le smooth scroll
    smoothTouch: false, // Désactive le smooth sur mobile (sinon ça peut être bizarre)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Courbe d'animation plus fluide
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  

// Vérification que GSAP fonctionne
console.log("GSAP chargé :", gsap);
console.log("ScrollTrigger chargé :", ScrollTrigger);

// Active ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation de la section hero
gsap.from(".hero h2, .hero p", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.5
});

// Animation de la section "projects"
gsap.from(".projects h2, .project-card", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3, // Décale l’apparition des cartes
    ease: "power2.out"
});

// Animation de la section "contact"
gsap.from(".contact h2, .contact p", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out"
});
