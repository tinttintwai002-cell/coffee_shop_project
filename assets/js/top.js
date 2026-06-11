document.addEventListener('DOMContentLoaded', ()=> {
        gsap.registerPlugin(ScrollTrigger);

        // အပေါ်က JS တွေအကုန်လုံးရဲ့ အပြင်ဘက်မှာ ဒါကို ထည့်ပါ
        window.addEventListener('load', ()=> {
                ScrollTrigger.refresh();
            }

        );

        //Hero
        const tl=gsap.timeline( {
                scrollTrigger: {
                    trigger: ".hero-wrapper",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }

                ,
                defaults: {
                    ease: "power3.out", duration: 1.2
                }
            }

        );

        // Sequence the animation
        tl.from(".hero-content-wrap h1", {
                y: 60, opacity: 0
            }

        ) .from(".hero-content-wrap .hero-content", {
                y: 40, opacity: 0
            }

            , "-=0.9") .from(".hero-btn-container", {
                y: 30, opacity: 0
            }

            , "-=0.8") .from(".hero-img", {
                x: 100, opacity: 0, duration: 1.5
            }

            , "-=1.0");

        // ၁။ Header Scroll Effect (GSAP ScrollTrigger)
        const header=document.querySelector('.header');

        ScrollTrigger.create( {
                start: 'top top+=10',
                onEnter: ()=> header.classList.add('scrolled'),
                onLeaveBack: ()=> header.classList.remove('scrolled'),
            }

        );

        // ၂။ Hamburger Menu Logic
        const hamburger=document.querySelector('.hamburger');
        const navLists=document.querySelector('.nav-lists');

        if (hamburger) {
            hamburger.addEventListener('click', ()=> {
                    hamburger.classList.toggle('active');
                    navLists.classList.toggle('active');

                    // Menu ပွင့်/ပိတ်တဲ့အခါ Height ချိန်ညှိခြင်း
                    if (navLists.classList.contains('active')) {
                        navLists.style.height=navLists.scrollHeight + "px";
                    }

                    else {
                        navLists.style.height="0px";
                    }
                }

            );
        }

        // ၃။ Animation Logic
        const animatedElements=document.querySelectorAll('[data-anim="fade-up"], [data-anim="line-grow"]');
        if (animatedElements.length===0) return;

        // Categories Section Animation
        const catTl=gsap.timeline( {
                scrollTrigger: {
                    trigger: ".sec-categories",
                    start: "top 70%"
                }
            }

        );

        catTl.fromTo(".sec-categories [data-anim='fade-up']",
                {
                y: 50, opacity: 0
            }

            ,
                {
                y: 0, opacity: 1, visibility: "visible", duration: 0.8, stagger: 0.1
            }

        );

        // Ingredients Section Animation
        const ingTl=gsap.timeline( {
                scrollTrigger: {
                    trigger: ".ingredients",
                    start: "top 70%"
                }
            }

        );

        ingTl.fromTo(".ingredients .subtitle, .ingredients h2",
                {
                y: 50, opacity: 0
            }

            ,
                {
                y: 0, opacity: 1, visibility: "visible", duration: 0.8, stagger: 0.3
            }

        ) .fromTo(".ingredients-slider",
                {
                y: 50, opacity: 0
            }

            ,
                {
                y: 0, opacity: 1, visibility: "visible", duration: 0.8
            }

            ,
            "-=0.4"
        );

        // Swiper Initialize
        new Swiper('.ingredients-slider', {

                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                navigation: {
                    nextEl: '.slider-btn.next',
                    prevEl: '.slider-btn.prev',
                }

                ,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }

                ,
                breakpoints: {
                    // Mobile အတွက်
                   375: {
                     slidesPerView: 1,
                        spaceBetween: 30
                    
                   } ,
                   390: {
                      slidesPerView: 1,
                        spaceBetween: 30
                   },
                    // Tablet အတွက် (သင်လိုချင်တဲ့အပိုင်း)
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    }
                  
                    

                    ,
                    // Desktop အတွက်
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }

            }

        );


        // Footer Animation ကို ဒီလို ပြင်ရေးကြည့်ပါ
        gsap.to(".footer", {
                y: 0,
                opacity: 1,
                visibility: "visible", // ပုန်းနေတဲ့ footer ကို ပေါ်လာအောင် လုပ်ပေးမယ်

                duration: 1,
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top 95%",
                    invalidateOnRefresh: true, // Page size ပြောင်းရင် ပြန်တွက်ပေးမယ်
                    toggleActions: "play none none none"
                }
            }

        );

        const menuTl=gsap.timeline( {
                defaults: {
                    ease: "power3.out", duration: 1.5
                }
            }

        );

        menuTl.from(".sec-menu .sec-ttl", {
                opacity: 0,
                y: 40
            }

        ) .from(".sec-menu .menu-subttl", {
                opacity: 0,
                y: 30,
                duration: 1.2
            }

            , "-=0.8") .from(".menu-group:not(.menu-group-reverse) .menu-img-wrap", {
                opacity: 0,
                x: -50,
            }

            , "-=0.7") .from(".menu-group:not(.menu-group-reverse) .menu-list-wrap", {
                opacity: 0,
                x: 40,
            }

            , "-=0.9") .from(".menu-group-reverse .menu-list-wrap", {
                opacity: 0,
                x: -40,
            }

            , "-=0.6") .from(".menu-group-reverse .menu-img-wrap", {
                opacity: 0,
                x: 50,
            }

            , "-=1.0") .from(".menu-action .btn-primary", {
                opacity: 0,
                scale: 0.85,
                duration: 1.5,
                ease: "back.out(1.2)"
            }

            , "-=0.5");

        const menuImages=document.querySelectorAll(".menu-img-wrap");

        menuImages.forEach((imgWrap)=> {

                imgWrap.addEventListener("mouseenter", ()=> {
                        gsap.to(imgWrap, {
                                scale: 0.8,
                                duration: 0.2,
                                ease: "power2.out",
                                overwrite: "auto"
                            }

                        );
                    }

                );

                imgWrap.addEventListener("mouseleave", ()=> {
                        gsap.to(imgWrap, {
                                scale: 1,
                                duration: 0.2,
                                ease: "power2.out",
                                overwrite: "auto"
                            }

                        );
                    }

                );
            }

        );

        gsap.registerPlugin(ScrollTrigger);

        // TARGET ELEMENTS
        const section=".sec-coffeebanner";
        const leftText=".sec-coffeebanner .text-left";
        const rightText=".sec-coffeebanner .text-right";
        const cupImage=".sec-coffeebanner .banner-img-container img";

        gsap.set(leftText, {
                opacity: 0, x: -120
            }

        );

        gsap.set(rightText, {
                opacity: 0, x: 120
            }

        );

        gsap.set(cupImage, {
                opacity: 0, scale: 0, rotation: -180, animationPlayState: "paused"
            }

        );

        const sequenceTimeline=gsap.timeline( {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 30%",
                    scrub: 1.5,
                    markers: false,
                    duration: 1
                }
            }

        );

        sequenceTimeline.to(leftText, {
                opacity: 1,
                x: 0,
                ease: "power2.out"
            }

            , 0) .to(rightText, {
                opacity: 1,
                x: 0,
                ease: "power2.out"
            }

            , 0) .to(cupImage, {
                opacity: 3,
                scale: 1,
                rotation: 0,
                animationPlayState: "running",
                ease: "back.out(1.2)"
            }

            , 0.5);

    }

);