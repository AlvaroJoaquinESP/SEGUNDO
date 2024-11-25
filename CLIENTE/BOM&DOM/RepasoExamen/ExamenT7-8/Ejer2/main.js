const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0];
document.querySelector("#boton").addEventListener("click", () => {
    // alert("asdf")
  for (let j = 0; j < 36000; j++) {
    let dado1 = Math.round(Math.random() * 5) + 1;
    let dado2 = Math.round(Math.random() * 5) + 1;
    let suma = dado1 + dado2;
    // En la posición suma
    apariciones[suma]++
  }

  
  let salida = ``;
  for (let i = 0; i < apariciones.length; i++) {
    salida += ` <ul>
    <li>Suma ${i}: ha salido ${apariciones[i]} </li>
    </ul>`;
    
  }
  document.querySelector("#salida").innerHTML = salida;
});


