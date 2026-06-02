/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2000);

});

/* ==========================
   STICKY NAVBAR
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,.75)";

        navbar.style.backdropFilter =
        "blur(20px)";

    }
    else{

        navbar.style.background =
        "rgba(0,0,0,.2)";

    }

});

/* ==========================
   REVEAL ANIMATION
========================== */

const reveals =
document.querySelectorAll(
".fade-up,.fade-left,.fade-right,.zoom-in"
);

const revealElements = () => {

    reveals.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            el.classList.add("show");

        }

    });

};

window.addEventListener(
"scroll",
revealElements
);

revealElements();

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
        section.offsetTop - 200;

        if(window.scrollY >= top){

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
        link.href.includes(current)
        ){

            link.classList.add("active");

        }

    });

});

/* ==========================
   SPOTLIGHT CURSOR
========================== */

const spotlight =
document.createElement("div");

spotlight.classList.add(
"spotlight"
);

document.body.appendChild(
spotlight
);

document.addEventListener(
"mousemove",
(e)=>{

spotlight.style.left =
e.clientX - 200 + "px";

spotlight.style.top =
e.clientY - 200 + "px";

});

/* ==========================
   MAGNETIC BUTTONS
========================== */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener(
"mousemove",
(e)=>{

const rect =
btn.getBoundingClientRect();

const x =
e.clientX - rect.left -
rect.width/2;

const y =
e.clientY - rect.top -
rect.height/2;

btn.style.transform =
`translate(${x*0.15}px,
${y*0.15}px)`;

});

btn.addEventListener(
"mouseleave",
()=>{

btn.style.transform =
"translate(0,0)";

});

});

/* ==========================
   PARALLAX IMAGES
========================== */

const parallaxItems =
document.querySelectorAll(
".parallax"
);

window.addEventListener(
"scroll",
()=>{

let scroll =
window.pageYOffset;

parallaxItems.forEach(item=>{

let speed =
item.dataset.speed || 0.2;

item.style.transform =
`translateY(${scroll*speed}px)`;

});

});

/* ==========================
   HERO ZOOM
========================== */

const heroVideo =
document.querySelector(
".hero-video"
);

window.addEventListener(
"scroll",
()=>{

if(heroVideo){

let scroll =
window.scrollY;

heroVideo.style.transform =
`scale(${1 + scroll*0.0002})`;

}

});

/* ==========================
   TEXT SPLIT EFFECT
========================== */

const heroTitle =
document.querySelector(
".hero h1"
);

if(heroTitle){

const letters =
heroTitle.innerText
.split("");

heroTitle.innerHTML = "";

letters.forEach((char,index)=>{

const span =
document.createElement("span");

span.innerHTML =
char === " "
? "&nbsp;"
: char;

span.style.opacity = 0;

span.style.display =
"inline-block";

span.style.transform =
"translateY(80px)";

heroTitle.appendChild(
span
);

setTimeout(()=>{

span.style.transition =
".8s ease";

span.style.opacity = 1;

span.style.transform =
"translateY(0px)";

},index*40);

});

}

/* ==========================
   FLOATING ORBS
========================== */

for(let i=0;i<4;i++){

const orb =
document.createElement("div");

orb.classList.add("orb");

orb.style.width =
Math.random()*300+150+"px";

orb.style.height =
orb.style.width;

orb.style.left =
Math.random()*100+"%";

orb.style.top =
Math.random()*100+"%";

orb.style.animationDuration =
Math.random()*10+10+"s";

document.body.appendChild(
orb
);

}

/* ==========================
   SMOOTH SCROLL LINKS
========================== */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================
   CONSOLE BRANDING
========================== */

console.log(
"%c STORE IN JAIPUR ",
"background:#D4AF37;color:#000;font-size:20px;padding:10px;"
);

console.log(
"%c Premium Fashion Website Loaded",
"color:#D4AF37;font-size:14px;"
);