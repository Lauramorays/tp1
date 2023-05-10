//trazos fondo//
//hola//
let quetrazo
let vel =20;
let posy=500;
let posx_f = 0;
let randomcol;
//coordenadas polares//
let angulo;
dx = cos(radians(angulo));
 dy = sin(radians(angulo));


 function movertrazo_f(){
//perlin noise para hacer los trazos un toque mas organicos//   
angulo = map(posy, windowHeight, 0, 40, 100);
angulo += noise(posy * 0.01, millis() * 0.001) *100 - 20;


    dx = cos(radians(angulo));
     dy = sin(radians(angulo));
     
     posy= posy-dy*vel;
     //mover los trazos a la izquierda y derecha,la direccion se cambia sumando o restando//
     //si la posicion en x es menor a 
     if(posx_f<windowWidth/2){
        posx_f = posx_f-dx*vel;
       }
       else{
        posx_f = posx_f+dx*vel;
       }
       

    //espacio toroidal//)
        //cuando la posicion en y pasa los -80, resetea la posicion//
    if(posy<-80){
        //resetea el trazo a afuera de la pantalla abajo//
        posy=windowHeight;
        //le asigna un color random al siguiente trazo que sale desde abajo//
         randomcol =random(200,360);
         //le asigna una posicion en x al siguiente trazo que sale desde abajo//
        posx_f=random(50,windowWidth-50);
       }
       }

function dibujar(quetrazo){
    //hacer un obj paleta//
    push();
    tint(randomcol,30,255,0.05);
    image(quetrazo,posx_f,posy);
    pop();
}


//hacer un diagrama de estados para limitar la generación de los trazos//
//hacer una clase paleta//
//pásar todo esto a una clase trazo//

    
