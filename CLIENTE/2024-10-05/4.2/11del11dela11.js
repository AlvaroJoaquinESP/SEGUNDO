const elGordo = () => {
    //Con el round obtengo el valor entero del número.
    let num1 = String(Math.round(Math.random() * 9));
    let num2 = String(Math.round(Math.random() * 9));
    let num3 = String(Math.round(Math.random() * 9));
    let num4 = String(Math.round(Math.random() * 9));
    let num5 = String(Math.round(Math.random() * 9));
    //Pongo el String para poder concatenar correctamente. Sino, los sumaría.
    let resultado = num1 + num2 + num3 + num4 + num5;
    
    let serie = Math.round(Math.random() * 119) + 1;

    document.write('El cupón ganador es: ' + resultado + ' de la serie: ' + serie);

    let resultadoNumerico = Number(resultado);
   // document.write( ' ' + resultadoNumerico);


            
}

elGordo();