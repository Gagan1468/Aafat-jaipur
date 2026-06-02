gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".story-panel");

gsap.to(sections,{
    xPercent:-100 * (sections.length - 1),

    ease:"none",

    scrollTrigger:{
        trigger:".story-horizontal",
        pin:true,
        scrub:1,
        snap:1/(sections.length-1),
        end:"+=4000"
    }
});