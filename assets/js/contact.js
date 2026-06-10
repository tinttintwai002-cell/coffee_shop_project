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
                observer.unobserve(entry.target);
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

});
