gsap.registerPlugin(ScrollTrigger);

gsap.to(".story h2",{

    scale:3,

    opacity:.2,

    scrollTrigger:{
        trigger:".story",
        start:"top top",
        end:"+=1000",
        scrub:true,
        pin:true
    }

});