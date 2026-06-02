gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".image-stack",
    start:"top center",
    end:"+=1000",
    scrub:true
  }
});

tl.to(".stack1",{
  x:-350,
  rotation:-18
},0);

tl.to(".stack2",{
  y:-80,
  scale:1.05
},0);

tl.to(".stack3",{
  x:350,
  rotation:18
},0);
