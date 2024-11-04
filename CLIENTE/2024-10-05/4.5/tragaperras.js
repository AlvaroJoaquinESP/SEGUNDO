let num1 = Math.round(Math.random() * 9) + 1;
let num2 = Math.round(Math.random() * 9) + 1;
let num3 = Math.round(Math.random() * 9) + 1;

const comprobarPremio = (num1, num2, num3) => {
  if (num1 == num2 && num2 == num3 && num1 == num3) {
    alert("Has ganado 500€");
  } else if (num1 == num2 || num2 == num3 || num1 == num3) {
    alert("Has ganado 100€");

} else {
    alert("Siga buscando, pardillo");
  }
};

comprobarPremio(num1, num2, num3);
