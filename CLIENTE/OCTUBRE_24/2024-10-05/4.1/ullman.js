import prompt from 'prompt';
let num = Number(prompt("Insert a number"));
const ullman = (num) => {
    //Veo si el número es > que 1.
  if (num < 1) {
    document.write("El número ingresado es menor que 1"); //Salgo de la función con esto.
  } else {
    document.write('Correcto '+ num + ", ");
  }
   //Mientras que el número sea distinto de 1 ejecuto la lógica.
  while (num != 1) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
      
    }
    document.write(num + ', ');

  }


 
};

ullman(num)


