document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

const href = link.getAttribute("href");

if(!href || href === "#") return;

e.preventDefault();

let tl = gsap.timeline({

onComplete(){
window.location.href = href;
}

});

tl.to(".page-transition",{
y:"100%",
duration:.8
})

.to(".page-transition h1",{
opacity:1,
scale:1.1,
duration:.3
},0.2);

});

});