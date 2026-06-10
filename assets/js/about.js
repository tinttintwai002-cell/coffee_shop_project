document.addEventListener("DOMContentLoaded", () => {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const animatedElements = document.querySelectorAll('[data-anim="fade-up"], [data-anim="line-grow"]');

    if (animatedElements.length === 0) return;

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;

                setTimeout(() => {
                    element.classList.add('is-animated');
                }, delay);

                animationObserver.unobserve(element);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    animatedElements.forEach(el => animationObserver.observe(el));
});