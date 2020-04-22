// import ScrollMagic from 'scrollmagic';
// import { gsap } from 'gsap';

// old
// bezier: [{x:200, y:100}, {x:400, y:0}, {x:300, y:200}]

// new
// motionPath: [{x:200, y:100}, {x:400, y:0}, {x:300, y:200}]
//fromTo() - You define the starting and ending values.

$(document).ready(function () {

    const controller = new ScrollMagic.Controller();

    //front-page
    gsap.to(".front-page-hero__element__title", { duration: 2, scale: 1, ease: "power2.out" });



    //web-design
    gsap.from(".services-hero__element__title", { duration: 2, y: 500, ease: "power2.out" });
    gsap.from(".services-hero__image", { duration: 3, y: -500, ease: "power2.out" });

    const processTL = gsap.timeline().from(".process__title", { duration: 2, x: -300, ease: "power2.out" })
        .to(".process__element__image", { duration: 2, opacity: 1, scale: 1, ease: "elastic.out(1, 0.3)" });
    new ScrollMagic.Scene({ triggerElement: '.process__title' })
        .addTo(controller)
        .setTween(processTL);

    //portfolio
    gsap.from(".portfolio-hero__title", { duration: 2, y: 500, ease: "power2.out" });
    gsap.from(".portfolio-hero__image", { duration: 3, y: -500, ease: "power2.out" });


    //portfolio-websites
    const newTL = gsap.timeline();
    newTL.to('.revealer', { x: 0, scale: 1, duration: 0.5, ease: "power2.out" })
    .to('.websites-element__element', {duration: 0.1, opacity: 1})
        .to('.revealer', { x: window.innerWidth, scale: 1, duration: 0.5, ease: "power2.out" }, "+=0.5")
        .to('.image-revealer', { x: window.innerWidth, scale: 1, duration: 4, ease: "power2.out" }, "-=0.5");
    new ScrollMagic.Scene({ triggerElement: '.websites-element' })
        .addTo(controller)
        .setTween(newTL);

    $(".websites-element__element").each(function (index, element) {
        const websitesHover = gsap.timeline({ paused: true });
        websitesHover.to(element, { duration: 0.2, scale: 1.2, ease: "power2.out" })
        element.animation = websitesHover;
    })
    $(".websites-element__element").mouseenter(function () {
        this.animation.play();
    })
    $(".websites-element__element").mouseleave(function () {
        this.animation.reverse();
    })


    //portfolio-apps
    const mobile = gsap.to(".mobile-apps-element", { duration: 1.5, scaleX: 1, width: '100%', ease: "back.out(1.7)" });
    new ScrollMagic.Scene({ triggerElement: '.mobile-apps-element' })
        .addTo(controller)
        .setTween(mobile);

        $(".mobile-apps-element__element").each(function (index, element) {
            const appsHover = gsap.timeline({ paused: true });
            appsHover.to(element, { duration: 1, y:-100, ease: "power2.out" })
            element.animation = appsHover;
        })
        $(".mobile-apps-element__element").mouseenter(function () {
            this.animation.play();
        })
        $(".mobile-apps-element__element").mouseleave(function () {
            this.animation.reverse();
        })



    //portfolio-library
    const librarySection = gsap.timeline().from(".library", { duration: 2, x: -window.innerWidth, ease: "power2.out" })
        .from(".library-box", { stagger: 0.5, duration: 0.6, x: -window.innerWidth, ease: "power4.out" }, "-=0.5");

    new ScrollMagic.Scene({ triggerElement: '.library' })
        .addTo(controller)
        .setTween(librarySection);


    $(".library-box").each(function (index, element) {
        const LTL = gsap.timeline({ paused: true });
        LTL.to(element, { duration: 0.2, scale: 1.2, ease: "power2.out" })
            .to($(element).find("div"), { duration: 0.4, width:284, opacity: 1, ease: "power2.out" })
            .to($(element).find("p"), { duration: 0.1, opacity: 1, ease: "power2.out" })
        element.animation = LTL;
    })

    $(".library-box").mouseenter(function () {
        this.animation.play();
    })

    $(".library-box").mouseleave(function () {
        this.animation.reverse();
    })




});


