//array de objs trazo//
let tfon = [];
//pgraphic figura//
let pgf;
//array de objs figura//
let tfig;
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
  //objs trazo fondo//
  for (let i = 0; i < 5; i++) {
    let trazo_f = new Trazo_f(trazofondo);
    tfon.push(trazo_f);
  }
  //pgraphic figura//
  tfig= new trazo_fig;
  pgf= createGraphics(windowWidth,windowHeight*0.75);
  pgf.position(0,windowHeight*0.70);
}

function draw() {
  //fondo//
  for (let i = 0; i < tfon.length; i++) {
    tfon[i].dibujar();
    tfon[i].movertrazo_f();
  }
  //figura//
tfig.dibujar();
tfig.mover();
image(pgf,0,height - pgf.height);
}
