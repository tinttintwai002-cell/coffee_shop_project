document.addEventListener('DOMContentLoaded', () => {
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                // Each Section Class
                if (entry.target.id === 'sec-touch') {
                    entry.target.classList.add('animate-reveal');
                } else if (entry.target.id === 'sec-community') {
                    entry.target.classList.add('animate-active');
                } else if (entry.target.id === 'sec-message') {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.id === 'sec-connected') {
                    entry.target.classList.add('is-visible');
                }
                else if (entry.target.classList.contains('footer')) {
                    entry.target.classList.add('is-visible');
                }
                observer.unobserve(entry.target);   // unobserve --- want animation only one time
            }
        });
    }, { threshold: 0.2 });

    // Target all Sections
    const targets = [
        document.querySelector('#sec-touch'),
        document.querySelector('#sec-community'),
        document.querySelector('#sec-message'),
        document.querySelector('#sec-connected')
    ];

    targets.forEach(target => {
        if (target) {
            observer.observe(target);
        }
    });

    const footer = document.querySelector('.footer');
    if (footer) {
        observer.observe(footer);
    }

    //Header Section

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

    //   Header Animation
    // Header Scroll 
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
