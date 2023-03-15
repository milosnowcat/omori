// Cargar imágenes
var personajeArriba = new Image();
personajeArriba.src = "img/personaje_arriba.png";

var personajeAbajo = new Image();
personajeAbajo.src = "img/personaje_abajo.png";

var personajeIzquierda = new Image();
personajeIzquierda.src = "img/personaje_izquierda.png";

var personajeDerecha = new Image();
personajeDerecha.src = "img/personaje_derecha.png";

// Crear objeto Personaje
var Personaje = {
  x: 0,
  y: 0,
  imagen: personajeAbajo,

  dibujar: function() {
    contexto.drawImage(this.imagen, this.x, this.y);
  }
};

// Funciones de movimiento del personaje
function moverArriba() {
  Personaje.y -= 10;
  Personaje.imagen = personajeArriba;
}

function moverAbajo() {
  Personaje.y += 10;
  Personaje.imagen = personajeAbajo;
}

function moverIzquierda() {
  Personaje.x -= 10;
  Personaje.imagen = personajeIzquierda;
}

function moverDerecha() {
  Personaje.x += 10;
  Personaje.imagen = personajeDerecha;
}

// Agregar evento para detectar teclas presionadas
window.addEventListener("keydown", function(evento) {
  switch (evento.keyCode) {
    case 38: // flecha arriba
      moverArriba();
      break;
    case 40: // flecha abajo
      moverAbajo();
      break;
    case 37: // flecha izquierda
      moverIzquierda();
      break;
    case 39: // flecha derecha
      moverDerecha();
      break;
  }
});

// Obtener contexto del lienzo y actualizar el dibujo
var lienzo = document.getElementById("lienzo");
var contexto = lienzo.getContext("2d");

function actualizar() {
  contexto.clearRect(0, 0, lienzo.width, lienzo.height);
  Personaje.dibujar();
}

// Ejecutar la función actualizar cada 10 milisegundos
setInterval(actualizar, 10);
