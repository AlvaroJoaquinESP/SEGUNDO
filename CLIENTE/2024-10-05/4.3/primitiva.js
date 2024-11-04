const apuesta = () => {
   let num1 = Math.round(Math.random() * 48) + 1;

  //Si el número es igual, genero un número aleatorio.
  //Definir los numeros fuera a la hora de comparar.
  let num2;

  do {
    num2 = Math.round(Math.random() * 48) + 1;
  } while (num2 == num1);
  let num3;

  do {
    num3 = Math.round(Math.random() * 48) + 1;
  } while (num3 == num1 || num3 == num2);
  let num4;

  do {
    num4 = Math.round(Math.random() * 48) + 1;
  } while (num4 == num3 || num4 == num2 || num4 == num1);
  let num5;

  do {
    num5 = Math.round(Math.random() * 48) + 1;
  } while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4);
  let num6;

  do {
    num6 = Math.round(Math.random() * 48) + 1;
  } while (
    num6 == num5 ||
    num6 == num4 ||
    num6 == num3 ||
    num6 == num2 ||
    num6 == num1
  );

  document.write(
    num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6
  );
 };
 for(let i = 1; i<= 8; i++) {
    document.write('Apuesta ' + i + ': ');
    apuesta(); //Ya hace un .write.
    document.write('<br>');

 }

