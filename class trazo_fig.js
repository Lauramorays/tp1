class trazo_fig{
    constructor(){
      //movimiento//
      this.tam_fig=50;
      this.posX_fig=random(this.tam_fig,windowWidth-this.tam_fig);
      this.posY_fig=windowHeight-this.tam_fig;  
      this.vel_fig=random(20);
      //var img de trazo//
      //this.imgt_fig=imgt_fig;//
      this.color_fig = color(random(360), random(50, 100), random(50, 100));
    }
    //funciones y metodos//
    dibujar(){
      //image(this.imgt_fig,this.posX_fig,this.posX_fig);//
      push();
      pgf.noStroke();
      pgf.fill(this.color_fig);
      pgf.ellipse(this.posX_fig,this.posY_fig,this.tam_fig,this.tam_fig);
      pop();
    }
    mover(){  
      this.posY_fig-=this.vel_fig;
      //espacio toriodal//
      if(this.posY_fig<-50){
        this.posY_fig=windowHeight;
        this.posX_fig=random(this.tam_fig,windowWidth-this.tam_fig);
        this.color_fig = color(random(360), random(50, 100), random(50, 100));
      }
    }
  }
  