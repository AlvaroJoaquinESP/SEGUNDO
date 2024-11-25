let variable = Number(prompt('Ingresa un numero'));

const parImpar = (variable) => {
    if(variable % 2 == 0) {
        document.write('Es par');
    } else {
        document.write('Es impar');
    }

}

parImpar(variable)