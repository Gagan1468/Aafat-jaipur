gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1",{
    y:100,
    opacity:0,
    duration:1.5,
    ease:"power3.out"
});

