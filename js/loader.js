window.addEventListener("load",()=>{

gsap.to("#loader",{
opacity:0,
duration:1,
onComplete(){
document.getElementById("loader").remove();
}
});

});
