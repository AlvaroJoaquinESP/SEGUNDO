let num = Number(prompt('Ingreso'));

const valorAbsoluto = (num) => {
    if(num >= 0) {
        document.write(num);
    } else {
        num = num* (-1);
        document.write('El valor absoluto del numero negativo es ' + num);
    }
}


valorAbsoluto(num);