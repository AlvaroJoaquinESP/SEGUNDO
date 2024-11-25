// Numeros de la primitiva 1...49.

const numeros = new Set();

do {
    let num = Math.round(Math.random() * 48 ) + 1;
    numeros.add(num);

}while(numeros.size < 6);

console.log(numeros);