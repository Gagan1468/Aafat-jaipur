gsap.registerPlugin(ScrollTrigger);

gsap.from(".reveal-left",{

x:-200,
opacity:0,

scrollTrigger:{
trigger:".reveal-left",
start:"top 80%"
}

});

gsap.from(".reveal-up",{

y:150,
opacity:0,

scrollTrigger:{
trigger:".reveal-up",
start:"top 80%"
}

});

gsap.from(".reveal-right",{

x:200,
opacity:0,

scrollTrigger:{
trigger:".reveal-right",
start:"top 80%"
}

});
