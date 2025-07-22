document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Animate on Scroll (AOS)
    AOS.init({
        duration: 800,       // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true,          // whether animation should happen only once - while scrolling down
        mirror: false,       // whether elements should animate out while scrolling past them
    });

    // Interactive Hero Text Effect
    const heroContent = document.querySelector('.hero-content');
    const hero = document.querySelector('.hero-section');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (window.innerWidth / 2 - clientX) / 25;
        const y = (window.innerHeight / 2 - clientY) / 25;

        heroContent.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateZ(50px)`;
    });

    // Reset hero text position on mouse leave
    hero.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'none';
    });

});