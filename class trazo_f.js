//to do list//
/*hacer algo con el fondo para que no se acumulen tantos trazos(bajar la opacidad prograsivamente
o limitar la cantidad de vueltas que dan los caminantes*/
//seguir arreglando el angulo para que no quede pelado en el medio//
//hacer la paleta de colores//
class Trazo_f {
  constructor(quetrazo) {
    //variable para elegir el trazo//
    this.quetrazo = quetrazo;
    //vars movimiento//
    this.vel = random(5,20);
    this.posy = height;
    this.posx_f =random(0, windowWidth - 50);
    this.angulo =90;
    this.dx = 0;
    this.dy = 0;
    this.vueltas;
    //vars cambiar color//
    this.velmouse;
    this.difX;
    this.difY;
    this.brillo=255;
    this.opacidad=0.02;
    this.randomcol = random(200, 360);
   
  }
//funcion para dar color//
    darcolor(){
      //vars para calcular la velocidad//
      this.difX =  abs(mouseX - pmouseX);
      this.difY =  abs(mouseY - pmouseY);
      this.velmouse = floor(this.difX +this.difY);
      if (this.velmouse > 80) {
        this.dibujar();
        //hacer la interaccion de la opacidad//
        this.brillo+= this.velmouse/40; //aumenta el valor del brillo
        //agregar lerp//
        
        //agregar lerp//
        
      }
      else{
        //hacer la interaccion de opacidad//
        this.brillo--;
      }
        //limitar el rango de brillo y opacidad(ajustar rango)//
        this.brillo = constrain(this.brillo, 100, 255);
        this.opacidad = constrain(this.opacidad, 0.01, 0.05);
    }

             // espacio toroidal//
             saltaralprincipio_f() {
  // resetea el trazo a afuera de la pantalla abajo//
  this.posy =height;
  // le asigna un color random al siguiente trazo que sale desde abajo//
  this.randomcol = random(200, 360);
  // le asigna una posicion en x al siguiente trazo que sale desde abajo//
  this.posx_f = random(0, windowWidth - 50);
          
                }
  
    movertrazo_f() {
    let noise_angulo;
    let anguloMin, anguloMax;
    /*este condicional crea una zona en el centro de 200 pixeles 
    a la derecha e izquierda que hacen que el rango del angulo sea entre 85 a 90, angulos mas rectos*/

  if (this.posx_f > windowWidth/2-200 && this.posx_f < windowWidth/2+200) {
    noise_angulo=(noise(this.posy * 0.01, millis() * 0.001) * 100 - 20) * 0.5;
    anguloMin = 85;
    anguloMax = 95;
  } else {
    noise_angulo=noise(this.posy * 0.01, millis() * 0.001) * 100 - 20;
    anguloMin = 45;
  anguloMax = 120;
  }
  this.angulo = map(this.posy, windowHeight, 0, anguloMin, anguloMax);
      // perlin noise para hacer los trazos un toque mas organicos//
      this.angulo += noise_angulo
  
      this.dx = cos(radians(this.angulo));
      this.dy = sin(radians(this.angulo));
  
      this.posy = this.posy - this.dy * this.vel;
      // mover los trazos a la izquierda y derecha,la direccion se cambia sumando o restando//
      // si la posicion en x es menor a la mitad de la pantalla//
      if (this.posx_f < windowWidth / 2) {
        this.posx_f = this.posx_f + this.dx * this.vel;
      } else {
        this.posx_f = this.posx_f -this.dx * this.vel;
      }
  
 
      // cuando la posicion en y pasa los -80, resetea la posicion//
      if (this.posy < -80) {
        this.saltaralprincipio_f();
      }
    }



    dibujar() {
      push();
      translate(this.posx_f,this.posy);
      tint(this.randomcol, 30, this.brillo, this.opacidad); 
      image(this.quetrazo, 0,0); 
      pop();
    }
    
    
  }
