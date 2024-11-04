let numer = Number(prompt('Ingrese un número'));

const masMenos = (numer)=> {
    if(numer > 0) {
        document.write("El numero es positivo");
    } else {
        document.write('El numero es negativo');
    }
    
}


masMenos(numer);

