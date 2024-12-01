const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "9"];
const mayusculas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

$(document).ready(function () {
  $("#formulary").submit(function (e) {
    if (!esCorrecta($("#numeroSerie").val())) {
      alert("No valida");
      e.preventDefault();
    }
  });
});

const esCorrecta = (numeroSerie) => {
  let letras = numeroSerie.split("");

  if (
    numeros.includes(letras[0]) &&
    numeros.includes(letras[1]) &&
    numeros.includes(letras[2])
  ) {
    return true;
  }

  if (mayusculas.includes(letras[3]) && mayusculas.includes(letras[4])) {
    return true;
  }

  if (letras[5] != "1" && letras[5] != "2") {
    return true;
  }
};
