/* ==========================
   GSAP REGISTER
========================== */

gsap.registerPlugin(
    ScrollTrigger
);

/* ==========================
   HERO CONTENT
========================== */

gsap.from(
".hero-tag",
{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5
}
);

gsap.from(
".hero h1",
{
    y:120,
    opacity:0,
    duration:1.4,
    delay:0.7
}
);

gsap.from(
".hero-sub",
{
    y:60,
    opacity:0,
    duration:1,
    delay:1
}
);

gsap.from(
".btn",
{
    y:40,
    opacity:0,
    duration:1,
    delay:1.2
}
);

/* ==========================
   HERO PARALLAX
========================== */

gsap.to(
".hero-video",
{
    scale:1.3,

    scrollTrigger:{
        trigger:".hero",
        start:"top top",
        end:"bottom top",
        scrub:true
    }
}
);

/* ==========================
   STORY SECTION
========================== */

gsap.from(
".story-left",
{
    x:-150,
    opacity:0,

    scrollTrigger:{
        trigger:".story",
        start:"top 75%",
        toggleActions:"play none none reverse"
    }
}
);

gsap.from(
".story-right",
{
    x:150,
    opacity:0,

    scrollTrigger:{
        trigger:".story",
        start:"top 75%",
        toggleActions:"play none none reverse"
    }
}
);

/* ==========================
   COLLECTION SECTIONS
========================== */

gsap.utils.toArray(
".collection-section"
).forEach(section=>{

gsap.from(
section.querySelector(".collection-image"),
{
    scale:.8,
    opacity:0,

    scrollTrigger:{
        trigger:section,
        start:"top 75%",
        end:"bottom 60%",
        scrub:1
    }
}
);

gsap.from(
section.querySelector(".collection-content"),
{
    y:120,
    opacity:0,

    scrollTrigger:{
        trigger:section,
        start:"top 80%",
        scrub:1
    }
}
);

});

/* ==========================
   GALLERY REVEAL
========================== */

gsap.from(
".gallery-grid img",
{
    scale:.8,
    opacity:0,
    stagger:.15,

    scrollTrigger:{
        trigger:".gallery-grid",
        start:"top 80%"
    }
}
);

/* ==========================
   BRANDS ANIMATION
========================== */

gsap.from(
".brand-slider div",
{
    y:100,
    opacity:0,
    stagger:.1,

    scrollTrigger:{
        trigger:".brands-preview",
        start:"top 80%"
    }
}
);

/* ==========================
   CTA SECTION
========================== */

gsap.from(
".cta h2",
{
    y:80,
    opacity:0,

    scrollTrigger:{
        trigger:".cta",
        start:"top 80%"
    }
}
);

gsap.from(
".cta p",
{
    y:50,
    opacity:0,

    scrollTrigger:{
        trigger:".cta",
        start:"top 80%"
    }
}
);

/* ==========================
   PIN STORYTELLING
========================== */

gsap.to(
".story",
{
    scrollTrigger:{
        trigger:".story",
        start:"top top",
        end:"+=1000",
        pin:true,
        scrub:true
    }
}
);

/* ==========================
   FLOATING GALLERY
========================== */

gsap.utils.toArray(
".gallery-grid img"
).forEach(img=>{

gsap.to(
img,
{
    y:-80,

    scrollTrigger:{
        trigger:img,
        start:"top bottom",
        end:"bottom top",
        scrub:true
    }
}
);

});

/* ==========================
   TEXT REVEAL
========================== */

gsap.utils.toArray(
"h2"
).forEach(title=>{

gsap.from(
title,
{
    y:80,
    opacity:0,

    scrollTrigger:{
        trigger:title,
        start:"top 85%"
    }
}
);

});

/* ==========================
   IMAGE ROTATION
========================== */

gsap.utils.toArray(
".collection-image img"
).forEach(img=>{

gsap.to(
img,
{
    rotate:2,

    scrollTrigger:{
        trigger:img,
        start:"top bottom",
        end:"bottom top",
        scrub:true
    }
}
);

});

/* ==========================
   HORIZONTAL BRAND SCROLL
========================== */

const brands =
document.querySelector(
".brand-slider"
);

if(brands){

gsap.to(
brands,
{
    xPercent:-20,

    scrollTrigger:{
        trigger:".brands-preview",
        start:"top bottom",
        end:"bottom top",
        scrub:true
    }
}
);

}

/* ==========================
   FOOTER FADE
========================== */

gsap.from(
"footer",
{
    opacity:0,
    y:100,

    scrollTrigger:{
        trigger:"footer",
        start:"top 90%"
    }
}
);

/* ==========================
   SMOOTH SECTION SCALE
========================== */

gsap.utils.toArray(
"section"
).forEach(section=>{

gsap.fromTo(
section,
{
    scale:.95
},
{
    scale:1,

    scrollTrigger:{
        trigger:section,
        start:"top 90%",
        end:"top 50%",
        scrub:true
    }
}
);

});

/* ==========================
   GOLD GLOW MOTION
========================== */

gsap.utils.toArray(
".gold-glow"
).forEach(glow=>{

gsap.to(
glow,
{
    y:-40,
    repeat:-1,
    yoyo:true,
    duration:4,
    ease:"power1.inOut"
}
);

});

/* ==========================
   LUXURY PAGE TRANSITIONS
========================== */

window.addEventListener(
"beforeunload",
()=>{

gsap.to(
"body",
{
    opacity:0,
    duration:.4
}
);

});

gsap.from(
"body",
{
    opacity:0,
    duration:.8
}
);