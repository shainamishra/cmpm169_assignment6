let bg;
function preload() {
  bg = loadImage('bg.png');
}

function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  translate(-240, -100, 0);
  // material
  normalMaterial();

  // 3D object
  translate(240, 100, 100);
  push();
  // transformations
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();
  
  // texture
  texture(bg);
  translate(0, 0, -100);
  plane(710, 400);
  
  // light effect
  pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 200);
}
