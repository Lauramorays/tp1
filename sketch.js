let c;
//las cosas que se cargan antes de iniciar el sketch//
function preload(){
  imgfondo = loadImage('imagenes/lienzofondo2.jpg');
  //trazo del fondo//
  trazofondo = loadImage('trazos/trazofondo_13.png');
  mascaratfondo= loadImage('trazos/trazofondo_14_a.png');
}
  function setup() {
createCanvas(windowWidth,windowHeight);
//fondo//
image(imgfondo, 0, 0);
trazofondo.mask(mascaratfondo);
colorMode(HSB);
c = new Trazo_f(trazofondo);
}

function draw() {
//fondo//
c.dibujar();
c.movertrazo_f();
}
