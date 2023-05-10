//array de objs trazo//
let tfon = [];
//pgraphic figura//

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
  
  for (let i = 0; i < 5; i++) {
    let trazo = new Trazo_f(trazofondo);
    tfon.push(trazo);
  }
}

function draw() {
  //fondo//
  for (let i = 0; i < tfon.length; i++) {
    tfon[i].dibujar();
    tfon[i].movertrazo_f();
  }
  //figura//

}
