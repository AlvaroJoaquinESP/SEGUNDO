const quitaRepetidos=(arr) => {
    let set = new Set();

    arr.forEach(element => {
       set.add(element); 
    });
    //return Array.from(set); Asi devielve un array en vez de un set.
    //Otra forma más sencilla.
    const arr2= [];
    for(const element of set) {
        arr2.push(element);
    }

    return arr2;
}



const valor = quitaRepetidos([2,3,2,5,5,5,6,7,7]);

console.log(valor);












