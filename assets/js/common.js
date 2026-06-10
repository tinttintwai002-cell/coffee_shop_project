document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector('.hamburger');
    const navLists = document.querySelector('.nav-lists');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLists.classList.toggle('active');
    });

    document.querySelectorAll('.nav-lists a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLists.classList.remove('active');
        });
    });

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
    gsap.registerPlugin(ScrollTrigger);

    const footer = document.querySelector(".footer");
    if (footer) {
        gsap.fromTo(".footer",
            {
                autoAlpha: 0,
                y: 50
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top 90%",
                    toggleActions: "play reverse play reset",
                    invalidateOnRefresh: true
                }
            }
        );
    }
});