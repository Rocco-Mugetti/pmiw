//Rocco Mugetti 
//Legajo 121136/9
//Comision 3 , TP1: "Op Art p5js"

let img; // Declaración de la variable para la imagen
let cantX = 10; // Cantidad de filas de la grilla
let cantY = 10; // Cantidad de columnas de la grilla
let animacionX = 0; // Variables para la animacion
let animacionY = 0;

function preload() {
  img = loadImage("data/F_42.png"); // Imagen original
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  image(img, 0, 0); // Imagen ubicada a la izquierda
  grilla(); // Funciones creadas
  circulos();
}

function grilla() { // En esta funcion esta creada la grilla con los cuadrados en blanco y negro
  let modX = 400 / cantX;
  let modY = 400 / cantY;
  for (let y = 0; y < cantY; y++) {
    for (let x = 0; x < cantX; x++) {
      if ((x + y) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }

      rect(400 + x * modX, y * modY, modX, modY);
    }
  }
}

function colorPorDistancia(d) { // Funcion que calcula un color basado en la distancia entre el centro del cuadrado y el mouse.
  let factor = map(d, 0, 400, 0, 1);
  let col1 = color(0);
  let col2 = color(255);
  return lerpColor(col1, col2, factor);
}

function circulos() { // En esta funcion estan los circulos que van dentro de los cuadrados
  let modX = 400 / cantX;
  let modY = 400 / cantY;
  for (let y = 0; y < cantY; y++) {
    for (let x = 0; x < cantX; x++) {
      if ((x + y) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }

      // Calculo el centro de los cuadrados
      let centerX = 400 + x * modX + modX / 2 + animacionX;
      let centerY = y * modY + modY / 2 + animacionY;
      let distancia = dist(centerX, centerY, mouseX, mouseY);
      fill(colorPorDistancia(distancia));

      // Dibujo el ellipse dentro del cuadrado
      ellipse(centerX, centerY, modX / 2, modY / 2);
    }
  }
}

function mouseDragged() {
  // Al hacer click y arrastrar el mouse los circulos se mueven en la dirección del mouse
  animacionX = map(mouseX, 0, width, -10, 10);
  animacionY = map(mouseY, 0, height, -10, 10);
}
