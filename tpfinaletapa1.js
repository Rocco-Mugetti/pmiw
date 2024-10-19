/*
Comision 3
Francisco Tomas Oliver 95512/9
Rocco Mugetti 121136/9
link a video explicativo 1:
link a video explicativo 2: 
*/




let currentScreen = 0;
let images = [];
let buttonStart, buttonCredits, buttonA, buttonB, buttonRestart;
const buttonWidth = 100;
const buttonHeight = 50;
let fondoMusica;

function preload() {
  for (let i = 0; i < 17; i++) {
    images[i] = loadImage('data/imagen' + i + '.png');
  }
  fondoMusica = loadSound('data/fondo.mp3');
  buttonStart = loadImage('data/empezar.png');
  buttonCredits = loadImage('data/creditos.png');
  buttonA = loadImage('data/botona.png');
  buttonB = loadImage('data/botonb.png');
  buttonRestart = loadImage('data/reiniciar.png');
}

function setup() {
  createCanvas(640, 480);
  fondoMusica.setVolume(0.5);
  fondoMusica.loop();
}

function draw() {
  background(0);
  switch (currentScreen) {
  case 0:
    pantalla0();
    break;
  case 1:
    pantalla1();
    break;
  case 2:
    pantalla2();
    break;
  case 3:
    pantalla3();
    break;
  case 4:
    pantalla4();
    break;
  case 5:
    pantalla5();
    break;
  case 6:
    pantalla6();
    break;
  case 7:
    pantalla7();
    break;
  case 8:
    pantalla8();
    break;
  case 9:
    pantalla9();
    break;
  case 10:
    pantalla10();
    break;
  case 11:
    pantalla11();
    break;
  case 12:
    pantalla12();
    break;
  case 13:
    pantallaFinalAlternativo2();
    break;
  case 14:
    pantallaFinalAlternativo1();
    break;
  case 15:
    pantallaFinalOriginal();
    break;
  case 16:
    pantallaCreditos();
    break;
  default:
  }
}

function verificarDeClick(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function pantalla0() {
  image(images[0], 0, 0);
  fill(255);
  image(buttonStart, 220, 380, 80, 80);
  image(buttonCredits, 360, 380, 80, 80);
}

function pantalla1() {
  image(images[1], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("En un mundo que una vez fue vibrante, ahora solo queda un vasto desierto, donde el sol abrasador castiga \n implacablemente la tierra agrietada. Las sombras de antiguas civilizaciones se alzan como recordatorios \n de lo que fue, con estructuras en ruinas que se desmoronan bajo el peso del tiempo. En este escenario \n inhóspito, Max, un guerrero solitario, camina con un paso firme y decidido, marcado por cicatrices visibles e \n invisibles. Cada día es una lucha no solo contra \n las condiciones extremas del entorno, sino también contra los fantasmas de un pasado lleno de dolor \n y pérdida. La escasez de recursos ha convertido a la humanidad en una manada desesperada, y el \n instinto de supervivencia se ha vuelto el único imperativo.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla2() {
  image(images[2], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("La calma tensa del desierto se rompe cuando Max es emboscado por los guerreros de Immortal Joe, un\n tirano cuya presencia es tan ominosa como la tormenta que se avecina. En un instante, el ruido de los \n motores y las gritos de batalla inundan el aire, llevándolo a ser capturado y llevado a la fortaleza de Joe. \n Mientras lo transportan, Max se da cuenta de la desesperación reflejada en los ojos de los oprimidos. \n Sin embargo, lo que más lo atormenta es el misterio que rodea a las esposas de Joe, que permanecen en \n la oscuridad de su desconocimiento, ya que aún no ha cruzado caminos con Furiosa, la mujer que \n cambiará su destino.", 80, 80);
  image(buttonB, 140, 380, 80, 80);
  image(buttonA, 350, 380, 80, 80);
}

function pantalla3() {
  image(images[3], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("Dentro de las filas de los guerreros de Joe, se encuentra Furiosa, una mujer fuerte y decidida que ha vivido toda \n su vida bajo la opresión de su gobernante. Con un plan audaz en mente, se prepara para escapar con \nlas esposas de Joe, quienes han sido tratadas como objetos en lugar de seres humanos. Furiosa, en su \n camino hacia la libertad, está impulsada por un fuego interno que la lleva a desafiar el sistema. En \n su travesía, sus caminos se cruzan con el de Max, aunque aún no lo sabe, marcando el comienzo de un vínculo \n que desafiará el destino.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla4() {
  image(images[4], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("El momento culminante llega cuando Furiosa orquesta su escape en el imponente camión de guerra de\n Immortal Joe. Las esposas, aterrorizadas pero llenas de esperanza, suben a bordo, dispuestas a desafiar\n su destino. En medio de la confusión, Max se encuentra arrastrado a la mezcla, subiendo al camión en un intento\n por escapar de la captura. Las balas zumban y los motores rugen mientras la adrenalina se dispara. La tensión\n entre Max y Furiosa es palpable, llena de desconfianza, pero la necesidad de sobrevivir les obliga a colaborar\n en esta feroz carrera por la libertad.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla5() {
  image(images[5], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("A medida que la persecución se intensifica, Max y Furiosa se ven forzados a trabajar juntos. La chispa\n de desconfianza que al principio los separa se transforma lentamente en una alianza tensa pero esencial.\n Ambos son guerreros en un mundo caótico, pero sus motivaciones son diferentes: Max busca redención\n por un pasado que lo atormenta, mientras que Furiosa lucha por la libertad de las esposas y por un futuro\n donde las mujeres puedan vivir sin miedo. A medida que enfrentan peligros juntos, comienzan a comprender\n que, aunque sus caminos son distintos, su lucha es la misma.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla6() {
  image(images[6], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("Las esposas de Immortal Joe, jóvenes y asustadas, se convierten en símbolo de la opresión del tirano. Max,\n inicialmente escéptico, comienza a sentir una responsabilidad hacia ellas, viendo en sus ojos la misma\n lucha que él ha enfrentado. Con diálogos cortos y significativos, los vínculos se establecen, y las esposas\n ven en Max y Furiosa una chispa de esperanza que les recuerda que la libertad aún es posible. Sin embargo,\n la angustia y el miedo son evidentes, y la presión de la situación provoca un conflicto emocional en \nMax, quien se siente cada vez más conectado con su causa.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla7() {
  image(images[7], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("A medida que el grupo avanza a través del desierto, los desafíos parecen interminables. Tormentas\n de arena y la escasez de agua ponen a prueba su determinación y su humanidad. En un momento\n desgarrador, una de las esposas cae, víctima de un ataque sorpresa. La desolación inunda\n el ambiente, y el grupo enfrenta la cruda realidad de su lucha por la supervivencia. Max, que siempre\n ha sido un lobo solitario, siente el peso de la culpa por no haber podido protegerlas, mientras que\n Furiosa se esfuerza por mantener la moral alta, recordando a todos que aún hay esperanza.\n Esta pérdida refuerza su propósito y los une aún más, convirtiendo el dolor en una fuerza motivadora.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla8() {
  image(images[8], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("La confrontación final se aproxima, y Max y Furiosa deben enfrentarse a Immortal Joe y sus guerreros.\n La batalla se desata en una tormenta de fuego y metal, donde cada segundo cuenta. Max, Furiosa,\n y las esposas luchan con todo lo que tienen, dispuestas a reclamar su libertad a cualquier costo. Los\n ecos de la lucha resuenan en el desierto, y la violencia y la valentía se entrelazan en un clímax\n apoteósico. La determinación de los oprimidos contra el poder del tirano lleva la historia a su\n punto culminante.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla9() {
  image(images[9], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("La batalla final es feroz, con explosiones que resuenan en el aire. Max y Furiosa, hombro a hombro,\n luchan con un ímpetu inquebrantable, sabiendo que la libertad está al alcance. Sin embargo, la sombra\n de Immortal Joe se cierne sobre ellos, y la lucha parece interminable. En el clímax de la batalla,\n una traición inesperada surge de entre las filas de los guerreros de Joe, creando una pausa\n momentánea en la lucha mientras Max y Furiosa deben adaptarse y luchar por sus vidas en un juego\n de supervivencia que no han elegido.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla10() {
  image(images[10], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("La lucha culmina en un duelo entre Max e Immortal Joe, donde los ecos del pasado se enfrentan a\n la esperanza del futuro. Max, empujado por la furia de la injusticia, utiliza todo lo que ha aprendido\n en sus batallas previas, uniendo su pasado doloroso con el deseo de liberar a los oprimidos.\n En un momento de pura acción y drama, Furiosa también se enfrenta a Joe, demostrando que no es\n simplemente una víctima, sino una guerrera que ha tomado su destino en sus propias manos.\n La batalla se convierte en un símbolo de la lucha por la libertad y la resistencia contra la opresión.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla11() {
  image(images[11], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("Con un grito de triunfo, Max y Furiosa finalmente derrotan a Immortal Joe, y las esposas son liberadas\n de sus cadenas. El aire se llena de alegría, aunque el costo de la victoria ha sido alto. Mientras\n se alejan del desierto, saben que su viaje apenas comienza, que la lucha por la libertad es interminable,\n pero su conexión es más fuerte que nunca. La historia termina con una nota de esperanza, mientras\n Max y Furiosa se dirigen hacia un nuevo futuro, con la promesa de que nunca más volverán a ser\n oprimidos.", 80, 80);
  image(buttonA, 260, 380, 80, 80);
}

function pantalla12() {
  image(images[12], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("A medida que el sol se pone en el horizonte, la cámara se aleja lentamente, mostrando la vastedad del\n desierto y los caminos aún por recorrer. El eco de las risas y la música resuena, simbolizando un\n nuevo comienzo. Max y Furiosa, ahora no solo aliados, sino amigos, se miran con un entendimiento profundo.\n El viaje ha cambiado sus vidas para siempre, y aunque el futuro es incierto, la fuerza que han\n descubierto en sí mismos los guiará hacia adelante. En un mundo que una vez fue sombrío, la esperanza\n ha renacido, y con ella, la promesa de un nuevo amanecer.", 80, 80);
  image(buttonB, 140, 380, 80, 80);
  image(buttonA, 350, 380, 80, 80);
}

function pantallaFinalAlternativo2() {
  image(images[13], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("A medida que Max y Furiosa se alejan, una sombra de duda permanece en el aire. Las decisiones que\n tomaron resonarán a lo largo de la historia, y el desierto, que una vez los unió, ahora los separa. \n La libertad siempre tendrá un precio, y Max debe enfrentar las consecuencias de sus elecciones.\n Un nuevo ciclo comienza, y el futuro está lleno de incertidumbres.", 80, 80);
  image(buttonRestart, 260, 380, 80, 80);
}

function pantallaFinalAlternativo1() {
  image(images[14], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("En una realidad paralela, Furiosa logra escapar con las esposas, y Max, enfrentando su pasado, se une a\n la causa de la resistencia. La lucha continúa, pero ahora tienen la fuerza de un nuevo ejército. \n La esperanza de un nuevo amanecer resplandece, y la historia de Max y Furiosa se convierte en leyenda.\n Juntos, luchan no solo por su libertad, sino por la de todos los oprimidos, con la promesa de que\n nunca más se rendirán.", 80, 80);
  image(buttonRestart, 260, 380, 80, 80);
}

function pantallaFinalOriginal() {
  image(images[15], 0, 0);
  PonerCuadroDetexto();
  TamañoyColorDeTexto();
  text("El viaje de Max y Furiosa se convierte en un faro de esperanza para las futuras generaciones.\n La batalla que libraron resonará a lo largo del tiempo, y su legado vivirá en cada acto de resistencia.\n La historia concluye con un mensaje poderoso: la libertad no es un destino, sino una lucha constante,\n y aunque el camino es arduo, el espíritu humano siempre encontrará la manera de levantarse de nuevo.", 80, 80);
  image(buttonRestart, 260, 380, 80, 80);
}

function pantallaCreditos() {
  image(images[16], 0, 0);
  PonerCuadroDetexto2()
    textSize(20);
  fill(255);
  text("Creditos:", 270, 80);
  text("Francisco Tomas Oliver", 100, 140);
  text("95512/9", 100, 165);
  text("Rocco Mugetti", 360, 140);
  text("121136/9", 360, 165);
  image(buttonRestart, 260, 380, 80, 80);
}
