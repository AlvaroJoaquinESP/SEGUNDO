const letras = /[A-Z]/
const numeros = /[0-9]/
document.querySelector("#formulario").addEventListener("submit", (ev) => {
  let serie = document.querySelector("#serie").value

  // Chorizear y convertirlo en array
  const numSerie = serie.split("")

  let esNumero = Number(numSerie[0]+ numSerie[1]+ numSerie[2])
  if (isNaN(esNumero)) {
    ev.preventDefault(ev)
    return
  }

  // posicion 3 y 4 son letras(array de letras)

  if (!letras.test(numSerie[3]) || !letras.test(numSerie[4])) {
    ev.preventDefault()
    return
  }

  // Posicion 5 sea 1 o 2

  if (numSerie[5] != "1" && numSerie[5] != "2") {
    ev.preventDefault()
    return
  }
  
  


})








// document.querySelector("#formulario").addEventListener("submit", (ev) => {
//   // alert("sdASD")
//   let numeroSerie = document.querySelector("#serie").value;
//   const div = numeroSerie.split("");
//   document.write(div);
//   if (
//     isNaN(div[0]) &&
//     isNaN(div[1]) &&
//     isNaN(div[2]) &&
//     !isNaN(div[3]) &&
//     !isNaN(div[4]) &&
//     (div[5] == 1 || div[5] == 2)
//   ) {
    
//   } else {
//     alert("Error en el número de serie");
//   }
// });
