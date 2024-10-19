function mousePressed() {
  if (currentScreen === 0) {
    if (verificarDeClick(220, 380, buttonWidth, buttonHeight)) {
      currentScreen = 1;
      fondoMusica.loop();
    } else if (verificarDeClick(360, 380, buttonWidth, buttonHeight)) {
      currentScreen = 16;
    }
  } else if (currentScreen === 1) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 2;
    }
  } else if (currentScreen === 2) {
    if (verificarDeClick(140, 380, buttonWidth, buttonHeight)) {
      currentScreen = 14;
    } else if (verificarDeClick(350, 380, buttonWidth, buttonHeight)) {
      currentScreen = 3;
    }
  } else if (currentScreen === 3) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 4;
    }
  } else if (currentScreen === 4) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 5;
    }
  } else if (currentScreen === 5) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 6;
    }
  } else if (currentScreen === 6) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 7;
    }
  } else if (currentScreen === 7) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 8;
    }
  } else if (currentScreen === 8) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 9;
    }
  } else if (currentScreen === 9) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 10;
    }
  } else if (currentScreen === 10) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 11;
    }
  } else if (currentScreen === 11) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 12;
    }
  } else if (currentScreen === 12) {
    if (verificarDeClick(140, 380, buttonWidth, buttonHeight)) {
      currentScreen = 15;
    } else if (verificarDeClick(350, 380, buttonWidth, buttonHeight)) {
      currentScreen = 13;
    }
  } else if (currentScreen === 13) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 16;
    }
  } else if (currentScreen === 14) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 16;
    }
  } else if (currentScreen === 15) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 16;
    }
  } else if (currentScreen === 16) {
    if (verificarDeClick(260, 380, buttonWidth, buttonHeight)) {
      currentScreen = 0;
      fondoMusica.stop();
    }
  }
}

function verificarDeClick(x, y, width, height) {
  return mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height;
}
