const spotlight =
document.querySelector(".spotlight");

window.addEventListener("mousemove",e=>{

    spotlight.style.left =
    e.clientX+"px";

    spotlight.style.top =
    e.clientY+"px";

});