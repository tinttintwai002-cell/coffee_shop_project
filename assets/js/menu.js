document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabList = document.querySelector('[role="tablist"]');

    tabs.forEach((tab, index) => {
        tab.addEventListener("keydown", (e) => {
            let targetIndex = null;

            if (e.key === "ArrowRight") {
                targetIndex = index + 1 === tabs.length ? 0 : index + 1;
            } else if (e.key === "ArrowLeft") {
                targetIndex = index - 1 < 0 ? tabs.length - 1 : index - 1;
            }

            if (targetIndex !== null) {
                e.preventDefault();
                tabs[targetIndex].focus();
                switchTab(tabs[targetIndex]);
            }
        });

        tab.addEventListener("click", (e) => {
            switchTab(e.currentTarget);
        });
    });

    function switchTab(targetTab) {
        tabs.forEach((t) => {
            t.setAttribute("aria-selected", "false");
            t.setAttribute("tabindex", "-1");
            t.classList.remove("active");
        });

        targetTab.setAttribute("aria-selected", "true");
        targetTab.setAttribute("tabindex", "0");
        targetTab.classList.add("active");
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.top-card').forEach((item, index) => {
        const img = item.querySelector('.card-img-wrap');
        const desc = item.querySelector('.card-content');
        const isInverted = item.classList.contains('card-inverted');

        const menuTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reset",
                invalidateOnRefresh: true
            }
        });

        if (isInverted) {
            menuTl.fromTo(desc, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1.0, ease: "power3.out" })
                .fromTo(img, { autoAlpha: 0, y: -60 }, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }, "<25%");
        } else {
            const xDirection = index === 0 ? -60 : 60;
            menuTl.fromTo(img, { autoAlpha: 0, x: xDirection }, { autoAlpha: 1, x: 0, duration: 1.2, ease: "power3.out" })
                .fromTo(desc, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }, "<25%");
        }
    });

    const menuListTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".menu-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reset",
            invalidateOnRefresh: true
        }
    });

    menuListTl
        .fromTo(".menu-left-image", { autoAlpha: 0, x: -50, y: 30 }, { autoAlpha: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out" })
        .fromTo(".menu-list", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1.0, ease: "power3.out" }, "<30%")
        .fromTo(".menu-footer-btn", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

    const adsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".coffee-ads-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reset",
            invalidateOnRefresh: true
        }
    });

    adsTl
        .fromTo(".card", { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .fromTo(".card-image", { autoAlpha: 0, x: -60 }, { autoAlpha: 1, x: 0, duration: 1.0, ease: "power3.out" }, "<25%")
        .fromTo(".text-wrapper", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }, "<35%");

    gsap.fromTo(".footer",
        { autoAlpha: 0, y: 40 },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%",
                toggleActions: "play reverse play reset",
                invalidateOnRefresh: true
            }
        }
    );
});