let num = Number(prompt("Insert a number"));

const abundante = (num) => {
  let sumaDivisores = 0;
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      sumaDivisores += i;
    }
  }
  //Devuelvo true si la suma de los div es mayor que el num.
  if (num > 0) {
    document.write(sumaDivisores > num);
  } else {
    document.write('Número menor que 1');
  }
};

abundante(num);
