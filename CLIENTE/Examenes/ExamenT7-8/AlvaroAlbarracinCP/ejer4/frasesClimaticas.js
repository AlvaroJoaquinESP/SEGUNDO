const frasesSoleado = [
  "¡Hace un día espectacular para estar al aire libre!",
  "El sol brilla con fuerza, ¡perfecto para un paseo!",
  "Recuerda ponerte protector solar, el día está radiante.",
  "Un cielo despejado como este invita a disfrutar de la naturaleza.",
];

// Frases para climas nublados
const frasesNublado = [
  "El cielo está gris, pero aún es un buen día.",
  "Parece que el sol está tomando un descanso hoy.",
  "Un día perfecto para reflexionar o leer un buen libro.",
  "El clima está fresco, ideal para caminar sin calor.",
];

// Frases para climas lluviosos
const frasesLluvioso = [
  "Es un buen día para quedarse en casa con una taza de té.",
  "La lluvia trae frescura y calma, ¿lo escuchas caer?",
  "No olvides tu paraguas si vas a salir.",
  "Aunque llueva, siempre se puede encontrar algo de belleza en el día.",
];

// Frases para tormentas
const frasesTormenta = [
  "Cuidado con los rayos y mantente a salvo en casa.",
  "El sonido de los truenos es impresionante, ¿no crees?",
  "Es un buen momento para encender una vela y relajarte.",
  "Las tormentas pueden ser intensas, pero también limpian el aire.",
];

// Main

const temperatura = [
  "-10 ",
  "-9 ",
  "-8",
  "-7",
  "-6",
  "-5",
  "-4",
  "-3",
  "-2 ",
  "-1 ",
  "0",
  "1 ",
  "2 ",
  "3 ",
  " 4",
  "5 ",
  "6 ",
  "7 ",
  "8 ",
  "9 ",
  "10 ",
  "11 ",
  "12 ",
  "13 ",
  "14 ",
  "15 ",
  "16 ",
  "17 ",
  "18 ",
  "19 ",
  "20 ",
  "21 ",
  "22 ",
  "23 ",
  "24 ",
  "25 ",
  "26 ",
  "27 ",
  "28 ",
  "29 ",
  "30 ",
  "31 ",
  "32 ",
  "33 ",
  "34 ",
  "35 ",
  "36 ",
  "37 ",
  "38 ",
  "39 ",
  "40 ",
];
const condicion = ["Soleado", "Nublado", "Lluvioso", "Tormenta"];

document.querySelector("#boton").addEventListener("click", () => {
  simularClima();
});


const simularClima = () => {
  // COMENTARIO PARA JUAN
  // El math.random me devuelve un número, pero no se pasarlo a string para comprobarlo, el error está ahí casi al 100%.
  // Creo que me ha pasado lo mismo en los demás ejercicios.
  let temperaturas = Math.round(Math.random() * temperatura.lenght - 1);
  let clima = Math.round(Math.random() * condicion.lenght - 1);

  if (clima == condicion[0]) {
    document.querySelector("#salida").innerHTML = frasesSoleado;
  } else if (clima == condicion[1]) {
    document.querySelector("#salida").innerHTML = frasesNublado;
  } else if (clima == condicion[2]) {
    document.querySelector("#salida").innerHTML = frasesLluvioso;
  } else if (clima == condicion[3]) {
    document.querySelector("#salida").innerHTML = frasesTormenta;
  }
};

