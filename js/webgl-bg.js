const scene =
new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.domElement.style.position="fixed";
renderer.domElement.style.top="0";
renderer.domElement.style.left="0";
renderer.domElement.style.zIndex="-1";

document.body.appendChild(
renderer.domElement
);

const particles =
new THREE.BufferGeometry();

const count = 8000;

const pos =
new Float32Array(count*3);

for(let i=0;i<count*3;i++){

const spread = 120;

pos[i] = (Math.random() - 0.5) * spread;

}

particles.setAttribute(
'position',
new THREE.BufferAttribute(pos,3)
);

const material =
new THREE.PointsMaterial({

size:0.02,
color:0xd4af37,

transparent:true,
opacity:0.7

});

const points =
new THREE.Points(
particles,
material
);

scene.add(points);

camera.position.z=15;

function animate(){

requestAnimationFrame(
animate
);

points.rotation.y+=0.0005;
points.rotation.x+=0.0002;

renderer.render(
scene,
camera
);

}

animate();

/* RESIZE FIX */

window.addEventListener("resize",()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
