var teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37,
};

document.addEventListener("keyup", dibujarTeclado);
var bg = document.getElementById("canvas");
f = bg.getContext("2d");
canvas.addEventListener("mousedown", dibujarRaton);
canvas.addEventListener("mousemove", ratonMove);
canvas.addEventListener("mouseup", noDibujarRaton);
dibujar ("blue", 299 ,301, 301, 299);
var colorElegido = "blue";
var x = 300;
var y = 300;
var movimiento = 6;
var click = false;

function ratonMove(moverRaton)
{
  xRaton = moverRaton.offsetX;
  yRaton = moverRaton.offsetY;
  /*console.log(xRaton);
  console.log(yRaton);
  console.log(moverRaton);*/
  if(click == true)
  {
    dibujarRaton(xRaton, yRaton);
  }
}

function dibujar(color, xinicio, yinicio, xfinal, yfinal)
{

  f.beginPath();
  f.lineWidth = 3;
  f.strokeStyle = color;
  f.moveTo(xinicio, yinicio);
  f.lineTo(xfinal, yfinal);
  f.stroke();
  f.closePath();
}

function noDibujarRaton()
{
  click = false;
}

function dibujarRaton(xRaton, yRaton)
{
  //xRaton = eventoRaton.offsetX;
  //yRaton = eventoRaton.offsetY;

  dibujar(colorElegido, xRaton -1 , yRaton +1, xRaton+ 1, yRaton -1 );
  click = true;
  console.log(xRaton);
  console.log(yRaton);
  //console.log(eventoRaton);
}

function dibujarTeclado (evento)
{
  switch(evento.keyCode)
  {
    case teclas.UP:
     dibujar(colorElegido, x, y, x, y - movimiento );
     y = y - movimiento;
    break;

    case teclas.DOWN:
    dibujar(colorElegido, x, y, x, y + movimiento );
    y = y + movimiento;
    break;

    case teclas.RIGHT:
    dibujar(colorElegido, x, y, x + movimiento, y );
    x = x + movimiento;
    break;

    case teclas.LEFT:
    dibujar(colorElegido, x, y, x - movimiento, y );
    x = x - movimiento;
    break;

    default:
      console.log("Tecla pulsafa incorrecta");

  }

}
