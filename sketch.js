//array de objs trazo//
let tfon = [];
//pgraphic figura//
let pgf;
//array de objs figura//
let tfig = [];
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
  trazofondo.resize(trazofondo.width/2, trazofondo.height/2);
  trazofondo.mask(mascaratfondo);
  colorMode(HSB);
  //objs trazo fondo//
  for (let i = 0; i < 10; i++) {
    let trazo_f = new Trazo_f(trazofondo);
    tfon.push(trazo_f);
  }
  for (let j = 0; j<10;j++){
    let trazo_fi = new trazo_fig;
    tfig.push(trazo_fi);
  }
  //pgraphic figura//
  pgf= createGraphics(windowWidth,windowHeight*0.75);
  pgf.position(0,windowHeight*0.70);
}

function draw() {
  for (let i = 0; i < tfon.length; i++) {
    push();
    tfon[i].dibujar();
    tfon[i].movertrazo_f();
    pop();
    tfon[i].darcolor();
  }

 //figura//
  for (let j = 0; j < tfig.length; j++) {  
tfig[j].dibujar();
tfig[j].mover();
  }
//pgraphic//
  image(pgf,0,height - pgf.height);
  //diagrama de estados//
}
