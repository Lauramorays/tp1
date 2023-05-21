
//array de objs trazo//
let tfon = [];
//array de objs figura//
let tfig = [];
//mascara figura//
//las cosas que se cargan antes de iniciar el sketch//
function preload(){
  //img simil lienzo//
  imgfondo = loadImage('imagenes/lienzofondo2.jpg');
  //trazo del fondo//
  trazofondo = loadImage('trazos/trazofondo_13.png');
  //mascara fondo//
  mascaratfondo= loadImage('trazos/trazofondo_14_a.png');
  //recursos figura//
  //img trazo figura//
  //mascara figura//
  mascarafigura = loadImage('trazos/mascara_figura.jpg');
 // mascarafigura =loadImage('ruta e img');//
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
    let trazo_fi = new trazo_fig(mascarafigura);
    tfig.push(trazo_fi);
  }
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
  //diagrama de estados//
}
