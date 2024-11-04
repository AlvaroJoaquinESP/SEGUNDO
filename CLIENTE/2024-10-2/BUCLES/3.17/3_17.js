let num = Number(prompt('Insert a number'));


const esTriangular = (num) => {
    let triangular = 0;
    let cont = 1;

    while(triangular == cont) {
        triangular = cont*(cont +1) /2;
        cont++;
    }

    if(triangular == cont) {
        return true;
    } 
}

esTriangular(num);