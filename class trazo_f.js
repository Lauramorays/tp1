class Trazo_f {
    constructor(quetrazo) {
      this.quetrazo = quetrazo;
      this.vel = 20;
      this.posy = 500;
      this.posx_f = 0;
      this.randomcol = 0;
      this.angulo = 0;
      this.dx = 0;
      this.dy = 0;
    }
  
    movertrazo_f() {
      // perlin noise para hacer los trazos un toque mas organicos//
      this.angulo = map(this.posy, windowHeight, 0, 40, 100);
      this.angulo += noise(this.posy * 0.01, millis() * 0.001) * 100 - 20;
  
      this.dx = cos(radians(this.angulo));
      this.dy = sin(radians(this.angulo));
  
      this.posy = this.posy - this.dy * this.vel;
      // mover los trazos a la izquierda y derecha,la direccion se cambia sumando o restando//
      // si la posicion en x es menor a
      if (this.posx_f < windowWidth / 2) {
        this.posx_f = this.posx_f - this.dx * this.vel;
      } else {
        this.posx_f = this.posx_f + this.dx * this.vel;
      }
  
      // espacio toroidal//
      // cuando la posicion en y pasa los -80, resetea la posicion//
      if (this.posy < -80) {
        // resetea el trazo a afuera de la pantalla abajo//
        this.posy = windowHeight;
        // le asigna un color random al siguiente trazo que sale desde abajo//
        this.randomcol = random(200, 360);
        // le asigna una posicion en x al siguiente trazo que sale desde abajo//
        this.posx_f = random(50, windowWidth - 50);
      }
    }
  
    dibujar() {
      // hacer un obj paleta//
      push();
      tint(this.randomcol, 30, 255, 0.05);
      image(this.quetrazo, this.posx_f, this.posy);
      pop();
    }
  }
  