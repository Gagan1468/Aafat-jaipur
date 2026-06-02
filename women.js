gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO
========================= */

gsap.from(".hero-content h1",{
y:100,
opacity:0,
duration:1.2
});

gsap.from(".hero-content p",{
y:50,
opacity:0,
duration:1.2,
delay:.3
});

gsap.from(".split-char",{

y:120,
opacity:0,

stagger:.08,

duration:1.2,

ease:"power4.out"

});

/* =========================
   EDITORIAL
========================= */

gsap.from(".editorial-image",{

x:-150,
opacity:0,

scrollTrigger:{
trigger:".editorial",
start:"top 70%"
}

});

gsap.from(".editorial-text",{

x:150,
opacity:0,

scrollTrigger:{
trigger:".editorial",
start:"top 70%"
}

});

/* =========================
   QUOTE
========================= */

gsap.from(".quote-section h2",{

scale:.5,
opacity:0,

scrollTrigger:{
trigger:".quote-section",
start:"top 70%"
}

});

/* =========================
   FEATURED COLLECTION
========================= */

let featuredTL = gsap.timeline({

scrollTrigger:{
trigger:".featured-section",
start:"top top",
end:"+=1000",
scrub:true,
pin:".featured-sticky"
}

});

featuredTL.to(".featured1",{

x:-750,
rotation:-20

},0);

featuredTL.to(".featured2",{

x:-250,
y:-100,
rotation:-8

},0);

featuredTL.to(".featured3",{

x:250,
y:-100,
rotation:8

},0);

featuredTL.to(".featured4",{

x:750,
rotation:20

},0);

/* =========================
   BAGS
========================= */
let bagsTL = gsap.timeline({

scrollTrigger:{
trigger:".bags-section",
start:"top top",
end:"bottom top",
scrub:true,
pin:".bags-sticky"
}

});

bagsTL.to(".bag1",{
x:-250,
rotation:-30
},0);

bagsTL.to(".bag2",{
x:-100,
y:-80
},0);

bagsTL.to(".bag3",{
x:100,
y:-80
},0);

bagsTL.to(".bag4",{
x:250,
rotation:30
},0);
/* =========================
   FOOTWEAR
========================= */

let heelsTL = gsap.timeline({

scrollTrigger:{
trigger:".heels-section",
start:"top top",
end:"+=1000",
scrub:true,
pin:".heels-sticky"
}

});

heelsTL.to(".heel1",{

x:-500,
rotation:-15

},0);

heelsTL.to(".heel2",{

scale:1.2,
y:-80

},0);

heelsTL.to(".heel3",{

x:500,
rotation:15

},0);

/* =========================
   ACCESSORIES
========================= */

let accessoriesTL = gsap.timeline({

scrollTrigger:{
trigger:".accessories-section",
start:"top top",
end:"+=1000",
scrub:true,
pin:".accessories-sticky"
}

});

accessoriesTL.to(".acc1",{

x:-550,
rotation:-30

},0);

accessoriesTL.to(".acc2",{

scale:1.25,
y:-60

},0);

accessoriesTL.to(".acc3",{

x:550,
rotation:30

},0);

/* =========================
   REFRESH
========================= */

window.addEventListener("load",()=>{

ScrollTrigger.refresh();

});

window.addEventListener("scroll",()=>{

const scrollTop =
window.scrollY;

const docHeight =
document.body.scrollHeight -
window.innerHeight;

const progress =
(scrollTop/docHeight)*100;

document.querySelector(
".scroll-progress"
).style.width =
progress + "%";

});

const glow =
document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

gsap.to(glow,{

x:e.clientX,
y:e.clientY,

duration:1,

ease:"power3.out"

});

});


/* MAGNETIC BUTTONS */

document
.querySelectorAll(".shop-btn")
.forEach(btn=>{

btn.addEventListener(
"mousemove",
e=>{

const rect =
btn.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

gsap.to(btn,{
x:(x-rect.width/2)*0.15,
y:(y-rect.height/2)*0.15,
duration:.3
});

});

btn.addEventListener(
"mouseleave",
()=>{

gsap.to(btn,{
x:0,
y:0,
duration:.3
});

});

});

const cursor =
document.querySelector(".cursor");

const dot =
document.querySelector(".cursor-dot");

window.addEventListener(
"mousemove",
e=>{

gsap.to(cursor,{

x:e.clientX,
y:e.clientY,

duration:.3

});

gsap.to(dot,{

x:e.clientX,
y:e.clientY,

duration:.1

});

});

document
.querySelectorAll("a,img")
.forEach(el=>{

el.addEventListener(
"mouseenter",
()=>{

gsap.to(".cursor",{

width:80,
height:80

});

});

el.addEventListener(
"mouseleave",
()=>{

gsap.to(".cursor",{

width:40,
height:40

});

});

});

let storyTL = gsap.timeline({

scrollTrigger:{
trigger:".storytelling",
start:"top top",
end:"bottom bottom",
scrub:true
}

});

storyTL.to(".story-track",{

x:-3000

});