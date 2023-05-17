class trazo_fig{
    constructor(){
      //movimiento//
      this.tam_fig=20;
      this.posX_fig=random(width);
      this.posY_fig=height-150;
      this.dx_fig;
      this.dy_fig;
      this.vel_fig=random(20);
      this.angulo_fig;
      this.direccion_fig;
      this.distancia_fig;
      this.largo_trazo= 0;
      //variable para el maximo del largo de un trazo//
      this.max_largo_trazo=1;
      //var img de trazo//
      //this.imgt_fig=imgt_fig;//
      this.color_fig = color(random(360), random(50, 100), random(50, 100));
    }
    //funciones y metodos//
 
    mover(){ 
    // Incrementar o decrementar largo_trazo en función de mouseX//
    this.largo_trazo += map(mouseX, 0, width, -1, 1);
    // Restringir largo_trazo dentro del rango permitido//
    this.largo_trazo = constrain(this.largo_trazo, 0, this.max_largo_trazo);
//si se pasa del valor maximo del trazo se resetea el trazo//
if (this.largo_trazo >= this.max_largo_trazo) {
  this.saltaralprincipio();
}

      //angulo//
this.angulo_fig=0;
    
        // valores angulo x en funcion al mouse//
        this.angulo_fig = map(mouseY, height , 0, 90, -150);
    
      
      this.dx_fig = cos(radians(this.angulo_fig));
      //angulo en que se mueve el trazo en el eje y -90 para que suba//
      this.dy_fig=sin(radians(-90));
    
//variables de movimiento//
      this.posX_fig=this.posX_fig+this.dx_fig;
      this.posY_fig=this.posY_fig+this.dy_fig;
      //espacio toriodal//
      if(this.posY_fig<0+this.tam_fig){
        this.saltaralprincipio();
      }
    }

    //funcion volver al estado inicial//
    saltaralprincipio(){
      this.posY_fig=height-150;
      this.posX_fig=random(width);
      this.color_fig = color(random(360), random(50, 100), random(50, 100));
    }
    debug(){
      pgf.fill(0); // Color negro
      pgf.text("Largo trazo: " + this.largo_trazo, 10, 20); 
    }
    dibujar(){
      //image(this.imgt_fig,this.posX_fig,this.posX_fig);//
      push();
      pgf.noStroke();
      pgf.fill(this.color_fig);
      pgf.ellipse(this.posX_fig,this.posY_fig,this.tam_fig,this.tam_fig);
      pop();
    }
    

  }
  