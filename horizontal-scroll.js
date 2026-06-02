gsap.registerPlugin(ScrollTrigger);

const track =
document.querySelector(".track");

if(track){

console.log(
"Track Width:",
track.scrollWidth
);

console.log(
"Window Width:",
window.innerWidth
);

let scrollWidth =
track.scrollWidth -
window.innerWidth;

gsap.to(track,{

x:-scrollWidth,

ease:"none",

scrollTrigger:{
trigger:".horizontal",
start:"top top",
end:()=>"+="+scrollWidth,
scrub:1,
pin:true
}

});

}