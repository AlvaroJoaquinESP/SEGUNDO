const cartas = () => {
  // alert("asdf")
  // Genero números aleatorios entre 1 y 20.
  const numeros = [];
  while (numeros.length < 4) {
    let numero = Math.round(Math.random() * 19) + 1;
    // Si el array no contiene al número, lo añado.
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }
  // Para depurar hago un console.log
  // console.log(numeros)

  let salida = "";
  for (const element of numeros) {
    let imagen = element + ".jpg";
    salida += `<img src='cartas/${imagen}'>`// /Cartas es el nombre de la carpeta donde están las img.
  }

  // Para depurar hago un console.log
  // console.log(salida)

document.querySelector("#salida").innerHTML = salida // El div se sobreescribe con el valor de salida.
};
