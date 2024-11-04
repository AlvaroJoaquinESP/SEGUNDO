let num1 = 1;
let num2 = 1;
let num3 = 1;
let num4 = 1;
let num5 = 1;

const juanito = () => {
  let num6 = num1 + num2 + num3 - num4;
  let num7 = num2 + num3 + num4 - num5;

  document.write(num1 + ', <br>');
  document.write(num2+ ', <br>');
  document.write(num3+ ', <br>');
  document.write(num4+ ', <br>');
  document.write(num5+ ', <br>');
  document.write(num6+ ', <br>');
  document.write(num7+ ', <br>');

  num1 = num2;
  num2 = num3;
  num3 = num4;
  num4 = num5;
  num5 = num6;

  return num7;
};
let cont = 0;
do {
  juanito();
  cont++;
} while (cont < 1000);
