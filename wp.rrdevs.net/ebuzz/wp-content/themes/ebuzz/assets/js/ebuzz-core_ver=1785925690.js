/***************************************************
==================== JS INDEX ======================
01. Data Background Set

****************************************************/

(function($) {
    ("use strict");



    // feature slider home 01
    // featured - news
    if (document.querySelector(".featured-news__active")) {
        var swiper = new Swiper(".featured-news__active", {
            slidesPerView: 3,
            spaceBetween: 24,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".featured-news__arrow-next",
                prevEl: ".featured-news__arrow-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1.8,
                },
                992: {
                    slidesPerView: 2.3,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    }


    /*======================================
          Mobile Menu Js
          ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanMenuCloseSize: "14px",
        meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
    });



    /* === Magnific Video popup Js (index 08) === */
    if ($(".video-popup").length && "magnificPopup" in jQuery) {
        $(".video-popup").magnificPopup({
            type: "iframe",
        });
    }


    // latest - blog - 6
    if (document.querySelector(".latest-blog-6__active")) {
        var swiper = new Swiper(".latest-blog-6__active", {
            slidesPerView: 3,
            spaceBetween: 23,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".latest-blog-6__arrow-next",
                prevEl: ".latest-blog-6__arrow-prev",
            },
            pagination: {
                el: ".latest-blog-6__pagination",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // banner - section 6
    if (document.querySelector(".banner-section-6__active")) {
        var swiperhero5 = new Swiper(".banner-section-6__active", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 500,
            navigation: {
                nextEl: ".banner-section-6__arrow-next",
                prevEl: ".banner-section-6__arrow-prev",
            },
        });
    }

    // banner - section
    if (document.querySelector(".banner-section-5__active")) {
        var swiperhero5 = new Swiper(".banner-section-5__active", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 500,
            navigation: {
                nextEl: ".banner-section-5__arrow-next",
                prevEl: ".banner-section-5__arrow-prev",
            },
        });
    }


    // hero image background home-04
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("[data-background]").forEach(function(el) {
            const bg = el.getAttribute("data-background");
            if (bg) {
                el.style.backgroundImage = `url(${bg})`;
            }
        });
    });

    // featured - news
    if (document.querySelector(".featured-news-3__active")) {
        var swiper = new Swiper(".featured-news-3__active", {
            slidesPerView: 3,
            spaceBetween: 23,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".featured-news-3__arrow-next",
                prevEl: ".featured-news-3__arrow-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1.5,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // featured - news
    if (document.querySelector(".news-alert__active")) {
        var swiper = new Swiper(".news-alert__active", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 2000,
            navigation: {
                nextEl: ".news-alert__arrow-next",
                prevEl: ".news-alert__arrow-prev",
            },
        });
    }

    if ($(".grid").length > 0) {

        // Initialize each grid
        $(".grid").imagesLoaded(function() {
            $(this).isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
            });
        });

        // Filter click handler
        $(document).on("click", ".filter-tab button", function(event) {
            event.preventDefault();
            var filterValue = $(this).attr("data-filter");
            var filterIndex = $(this).closest("[data-filter-index]").attr("data-filter-index");
            var $grid;

            if (typeof filterIndex !== "undefined") {
                $grid = $(".tab-pane").eq(filterIndex).find(".grid");
            } else {
                $grid = $(this).closest("section").find(".grid");
            }

            // active class update
            $(this).closest(".filter-tab").find("button").removeClass("active");
            $(this).addClass("active");

            if ($grid.length > 0) {
                $grid.isotope({
                    filter: filterValue
                });
            }
        });

        $(document).on("shown.bs.tab", "[data-bs-toggle='tab']", function() {
            var index = $(this).closest(".nav").find("button").index(this);

            // filter-wrapper show/hide
            $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                .find(".filter-wrapper")
                .addClass("d-none")
                .removeClass("filter-active");

            $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                .find(".filter-wrapper[data-filter-index='" + index + "']")
                .removeClass("d-none")
                .addClass("filter-active");

            var $grid = $(".tab-pane").eq(index).find(".grid");
            if ($grid.length > 0) {
                $grid.isotope({
                    filter: "*"
                });
                $grid.isotope("layout");
            }

            // filter button reset to All
            $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                .find(".filter-wrapper[data-filter-index='" + index + "'] .filter-tab button")
                .removeClass("active");
            $(this).closest(".col-md-4, .col-xl-3, .col-lg-5")
                .find(".filter-wrapper[data-filter-index='" + index + "'] .filter-tab button[data-filter='*']")
                .addClass("active");
        });
    }

    // brand - section
    if (document.querySelector(".featured-news-2__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".featured-news-2__active", {
                slidesPerView: "auto",
                spaceBetween: 28,
                centeredSlides: true,
                speed: 4000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 0.4,
                },
            });
        });
    }

    // blog - slider
    if (document.querySelector(".blog-slider__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".blog-slider__active", {
                slidesPerView: "auto",
                spaceBetween: 24,
                centeredSlides: false,
                loop: true,
                autoplay: true,
                speed: 500,
                freeMode: false,
                allowTouchMove: true,
            });
        });
    }

    // odometer
    $(".odometer").waypoint(
        function(direction) {
            if (direction === "down") {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: "80%",
        },
    );

    // slider home 01
    // brand - section
    if (document.querySelector(".blog-post__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".blog-post__active", {
                slidesPerView: "auto",
                spaceBetween: 24,
                centeredSlides: true,
                speed: 500,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 2500,
                },
                navigation: {
                    nextEl: ".blog-post__arrow-next",
                    prevEl: ".blog-post__arrow-prev",
                },
            });
        });
    }

    jQuery(document).ready(function($) {
        $("#mobile-menu .sub-menu li").slice(-4).addClass("menu-last");
    });

    // support nice select
    $("body select").niceSelect();

    // Popup Search Box
    $(".search-open-btn").on("click", function() {
        $(".search__popup").addClass("search-opened");
    });

    $(window).scroll(function() {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".search__popup").removeClass("search-opened");
        }
    });

    $(".search-close-btn").on("click", function() {
        $(".search__popup").removeClass("search-opened");
    });

    /* === Magnific Video popup Js (index 08) === */
    if ($(".video-popup").length && "magnificPopup" in jQuery) {
        $(".video-popup").magnificPopup({
            type: "iframe",
        });
    }

    /*======================================
        Sidebar Toggle
        ========================================*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });
    // Scroll to bottom then close navbar
    $(window).scroll(function() {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".offcanvas__area").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        }
    });
    $(".sidebar__toggle").on("click", function() {
        $(".offcanvas__area").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*======================================
        Swiper js with default gallary slider 
      ========================================*/
    if (document.querySelector(".postbox-slider__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".postbox-slider__active", {
                slidesPerView: "auto",
                spaceBetween: 24,
                centeredSlides: true,
                speed: 2000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                navigation: {
                    nextEl: ".postbox-slider-button-next",
                    prevEl: ".postbox-slider-button-prev",
                },
            });
        });
    }

    /*======================================
        Body overlay Js
        ========================================*/
    $(".body-overlay").on("click", function() {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    // custom-js ======================
    var windowOn = $(window);
    let mm = gsap.matchMedia();

    /* === Data Css Js (index 01) === */
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )",
        );
    });



    /* === Register GSAP Plugins Js (index 02) === */
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    var device_width = window.screen.width;

    if (device_width > 767) {
        if (
            document.querySelector("#has_smooth").classList.contains("has-smooth")
        ) {
            const smoother = ScrollSmoother.create({
                smooth: 0.5,
                effects: device_width < 1025 ? false : true,
                smoothTouch: 0.1,
                // normalizeScroll: false,
                normalizeScroll: {
                    allowNestedScroll: true,
                },
                ignoreMobileResize: true,
            });
        }
    }

    /* === Preloader Animation  Js (index 05) === */
    if (document.querySelectorAll(".loader-wrap").length > 0) {
        $(document).ready(function() {
            setTimeout(function() {
                $("#container").addClass("loaded");
            }, 500);

            setTimeout(function() {
                $(".loader-wrap").fadeOut(1000, function() {
                    $(this).remove();
                });
            }, 3000);

            $(".odometer").waypoint(
                function(direction) {
                    if (direction === "down") {
                        let countNumber = $(this.element).attr("data-count");
                        $(this.element).html(countNumber);
                    }
                }, {
                    offset: "80%",
                },
            );
        });

        const svg = document.getElementById("svg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
            delay: 1.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: {
                d: curve,
            },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: {
                d: flat,
            },
            ease: "power2.easeOut",
        });
        tl.to(".loader-wrap", {
            y: -1500,
        });
        tl.to(".loader-wrap", {
            zIndex: -1,
            display: "none",
        });
        tl.from(
            "main", {
                y: 0,
                opacity: 0,
                delay: 0.3,
            },
            "-=1.5",
        );
    }

    /*======================================
        Mobile Menu Js
        ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanMenuCloseSize: "14px",
        meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
    });

    /*======================================
        Sidebar Toggle
        ========================================*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });
    // Scroll to bottom then close navbar
    $(window).scroll(function() {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".offcanvas__area").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        }
    });
    $(".sidebar__toggle").on("click", function() {
        $(".offcanvas__area").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*======================================
        Body overlay Js
        ========================================*/
    $(".body-overlay").on("click", function() {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    // Popup Search Box
    $(".search-open-btn").on("click", function() {
        $(".search__popup").addClass("search-opened");
    });

    $(window).scroll(function() {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".search__popup").removeClass("search-opened");
        }
    });

    $(".search-close-btn").on("click", function() {
        $(".search__popup").removeClass("search-opened");
    });

    /*======================================
        MagnificPopup image view
        ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });



    /* === Text Invert With Scroll Js (index 09) === */
    const split = new SplitText(".text-invert", {
        type: "lines"
    });
    split.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: "top 85%",
                end: "bottom center",
            },
        });
    });

    /* === gsap nav Js (index 10) === */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    /* === Nice Select Js (index 11) === */
    $("select").niceSelect();

    /* ========  main Js ======== */

    // custom-js ======================

    // Register GSAP and ScrollTrigger plugins
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    $(document).ready(function() {
        var st = $(".rr-split-text");
        if (st.length == 0) return;
        gsap.registerPlugin(SplitText, ScrollTrigger);

        st.each(function(index, el) {
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "rr-split-line",
            });
            gsap.set(el, {
                perspective: 400
            });

            if ($(el).hasClass("rr-split-text")) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: 50,
                    ease: "Back.easeOut",
                });
            }

            el.anim = gsap.to(el.split.chars, {
                x: 0,
                y: 0,
                rotateX: 0,
                scale: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    once: true,
                },
            });
        });
    });

    // Item fadeIN animation
    if (document.querySelectorAll(".fade-wrapper").length > 0) {
        $(".fade-wrapper").each(function() {
            var section = $(this);
            var fadeItems = section.find(".fade-top");

            fadeItems.each(function(index, element) {
                var delay = index * 0.1;

                gsap.set(element, {
                    opacity: 0,
                    y: 70,
                });

                ScrollTrigger.create({
                    trigger: element,
                    start: "top 95%",
                    end: "bottom bottom",
                    scrub: false,
                    once: true,
                    onEnter: function() {
                        gsap.to(element, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: delay,
                        });
                    },
                    onLeaveBack: function() {
                        gsap.to(element, {
                            opacity: 0,
                            y: 70,
                            duration: 0.3
                        });
                    },
                });
            });
        });
    }

    // img - custom - anim - img
    if (document.querySelectorAll(".img-custom-anim-img").length > 0) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".img-custom-anim-img").forEach((img) => {
            gsap.set(img, {
                opacity: 0,
                x: -50,
                clipPath: "inset(0 100% 0 0)",
            });

            ScrollTrigger.create({
                trigger: img,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                markers: false,
                onEnter: () => {
                    gsap.to(img, {
                        opacity: 1,
                        x: 0,
                        clipPath: "inset(0 0% 0 0)",
                        duration: 0.6,
                        ease: "power3.out",
                    });
                },
                onLeaveBack: () => {
                    gsap.to(img, {
                        opacity: 0,
                        x: -50,
                        clipPath: "inset(0 100% 0 0)",
                        duration: 0.6,
                        ease: "power3.in",
                    });
                },
            });
        });
    }

    // brand - section
    if (document.querySelector(".brand-section__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".brand-section__active", {
                slidesPerView: "auto",
                spaceBetween: 24,
                centeredSlides: true,
                speed: 5000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // title-slide - section
    if (document.querySelector(".project-section__title-slide_active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".project-section__title-slide_active", {
                slidesPerView: "auto",
                spaceBetween: 0,
                centeredSlides: true,
                speed: 17000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // title-slide - section
    if (document.querySelector(".title-slide__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".title-slide__active", {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: true,
                speed: 17000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // our - experience
    if (document.querySelector(".our-experience__active")) {
        var swiper = new Swiper(".our-experience__active", {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            autoplay: true,
            centerMode: true,
            speed: 400,
            effect: "cards",
            grabCursor: true,
        });
    }

    // testimonial - section - 2
    if (document.querySelector(".testimonial-section-2__active")) {
        var swipertesti2 = new Swiper(".testimonial-section-2__active", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1000,

            navigation: {
                nextEl: ".testimonial-section-2__arrow-next",
                prevEl: ".testimonial-section-2__arrow-prev",
            },

            on: {
                slideChange: function() {
                    const current = this.realIndex + 1;
                    const total = this.slides.length - this.loopedSlides * 2;
                    const cur = current < 10 ? `0${current}` : current;
                    const tot = total < 10 ? `0${total}` : total;
                    const paginationEl = document.querySelector(
                        ".testimonial-section-2__custom-pagination",
                    );
                    if (paginationEl) {
                        paginationEl.innerHTML = `${cur} <span>/${tot}</span>`;
                    }
                },
                init: function() {
                    this.emit("slideChange");
                },
            },
        });
    }

    // hero-2 - section
    if (document.querySelector(".hero-section-2__active")) {
        var swiperhero2 = new Swiper(".hero-section-2__active", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".hero-section-2__arrow__next",
                prevEl: ".hero-section-2__arrow__prev",
            },
        });
    }

    // project-2 - section
    if (document.querySelector(".project-section-2__active")) {
        var swiperproject2 = new Swiper(".project-section-2__active", {
            slidesPerView: 2.5,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2.5,
                },
            },
        });
    }

    // project - section - 3
    if (document.querySelector(".project-section-3__active")) {
        var swiperproject3 = new Swiper(".project-section-3__active", {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: true,
            centerMode: true,
            speed: 400,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
        });
    }

    // our - service - 3
    if (document.querySelector(".our-service-3__active")) {
        var swiperservice3 = new Swiper(".our-service-3__active", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".our-service-3__arrow-next",
                prevEl: ".our-service-3__arrow-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // title-slide-3 - section
    if (document.querySelector(".our-service-3__title-slide_active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".our-service-3__title-slide_active", {
                slidesPerView: "auto",
                spaceBetween: 0,
                centeredSlides: true,
                speed: 17000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // brand-slide-3 - section
    if (document.querySelector(".brand-section-3__active")) {
        document.addEventListener("DOMContentLoaded", function() {
            const swiper = new Swiper(".brand-section-3__active", {
                slidesPerView: "auto",
                spaceBetween: 40,
                centeredSlides: true,
                speed: 4000,
                loop: true,
                freeMode: false,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                },
            });
        });
    }

    // inr-about testimonial js
    if (document.querySelector(".testimonial-section__active")) {
        var swiperteam = new Swiper(".testimonial-section__active", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".testimonial-section__button-next",
                prevEl: ".testimonial-section__button-prev",
            },
        });
    }

    // hero-3 - section
    if (document.querySelector(".hero-section-3__active")) {
        var swiperhero3 = new Swiper(".hero-section-3__active", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".hero-section-3__arrow__next",
                prevEl: ".hero-section-3__arrow__prev",
            },
            pagination: {
                el: ".hero-section-3__pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    var number = (index + 1).toString().padStart(2, "0");
                    return '<span class="' + className + '">' + number + "</span>";
                },
            },
        });
    }

    // our - service - 3
    if (document.querySelector(".hero-section-4__active")) {
        var swiperhero4 = new Swiper(".hero-section-4__active", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".hero-section-4__arrow-next",
                prevEl: ".hero-section-4__arrow-prev",
            },
        });
    }

    // testimonial - 4
    if (document.querySelector(".testimonial-section-4__active")) {
        var swipertesti3 = new Swiper(".testimonial-section-4__active", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".testimonial-section-4__arrow-next",
                prevEl: ".testimonial-section-4__arrow-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1.5,
                },
                1200: {
                    slidesPerView: 2,
                },
            },
        });
    }

    // testimonial - 5
    if (document.querySelector(".testimonial-section-5__active")) {
        var swipertesti3 = new Swiper(".testimonial-section-5__active", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            navigation: {
                nextEl: ".testimonial-section-5__arrow-next",
                prevEl: ".testimonial-section-5__arrow-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // hero-5 - section
    if (document.querySelector(".hero-section-5__active")) {
        var swiperhero5 = new Swiper(".hero-section-5__active", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            centeredSlides: false,
            autoplay: true,
            centerMode: true,
            speed: 400,
            pagination: {
                el: ".hero-section-5__pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    var number = (index + 1).toString().padStart(2, "0");
                    return '<span class="' + className + '">' + number + "</span>";
                },
            },
        });
    }

    // service - overview - 2
    if ($(".service-overview-2__area").length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
            return gsap.to(".service-overview-2__text", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".service-overview-2__area",
                    scrub: 1,
                    start: "top top",
                    end: "bottom 70%",
                    pin: ".service-overview-2__text",
                    markers: false,
                    toggleActions: "play none none reverse",
                },
            });
        });
    }

    // hero - 1
    if ($(".hero-section__wrapper").length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
            return gsap.to(".hero-section__text-anim", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".hero-section__wrapper",
                    scrub: 1,
                    start: "top -20%",
                    end: "bottom 80%",
                    pin: ".hero-section__text-anim",
                    markers: false,
                    pinSpacing: false,
                    toggleActions: "play none none reverse",
                },
            });
        });
    }

    // cta bg animation
    if (document.querySelectorAll(".hero-section__wrapper").length > 0) {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 991px)", () => {
            var tl = gsap.timeline({
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section__wrapper",
                    pin: false,
                    pinSpacing: true,
                    scrub: 4,
                    start: "bottom 130%",
                    end: "bottom 0%",
                },
            });

            tl.to(".hero-section__wrapper .hero-section__bg", {
                scale: "10",
                width: "100vw",
                height: "100vh",
                delay: 0.1,
            });
        });
    }

    // listing - details
    if (document.querySelector(".listing-details__grid")) {
        var iso = new Isotope(".listing-details__grid", {
            itemSelector: ".listing-details__element-item",
            layoutMode: "fitRows",
        });

        const filterBtns = document.querySelectorAll(
            ".listing-details__filter-buttons button",
        );

        filterBtns.forEach((btn) => {
            btn.addEventListener("click", function() {
                var filterValue = this.getAttribute("data-filter");
                iso.arrange({
                    filter: filterValue
                });

                filterBtns.forEach((b) => b.classList.remove("active"));
                this.classList.add("active");
            });
        });

        filterBtns[0].classList.add("active");
        iso.arrange({
            filter: filterBtns[0].getAttribute("data-filter")
        });
    }



    // banner - slider 1
    var slider = new Swiper(".listing-details-slider__active", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        loopedSlides: 6,
        spaceBetween: 20,
        autoplay: true,
    });

    var thumbs = new Swiper(".listing-details-slider__active2", {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: false,
        loop: true,
        slideToClickedSlide: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
        },
    });

    slider.controller.control = thumbs;
    thumbs.controller.control = slider;

    // car - listing
    function initRangeSliders() {
        document
            .querySelectorAll(".car-listing__range-concider")
            .forEach((wrapper) => {
                const range = wrapper.querySelector(".range-slider");
                const minInput = wrapper.querySelector(".minVal");
                const maxInput = wrapper.querySelector(".maxVal");

                if (!range || !minInput || !maxInput) return;

                function updateRangeBackground() {
                    const min = parseFloat(range.min) || 0;
                    const max = parseFloat(range.max) || 100;
                    const val = parseFloat(range.value) || 0;
                    const percent = ((val - min) / (max - min)) * 100;
                    range.style.background = `linear-gradient(to right, #e61b1b ${percent}%, #ddd ${percent}%)`;
                }

                range.addEventListener("input", () => {
                    maxInput.value = range.value;
                    updateRangeBackground();
                });

                maxInput.addEventListener("input", () => {
                    let value = parseFloat(maxInput.value) || 0;
                    const min = parseFloat(range.min) || 0;
                    const max = parseFloat(range.max) || 100;

                    if (value < min) value = min;
                    if (value > max) value = max;

                    range.value = value;
                    updateRangeBackground();
                });

                updateRangeBackground();
            });
    }

    initRangeSliders();

    // main js include

    // end
})(jQuery);