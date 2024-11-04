const generaApuesta = () => {
  const set = new Set();

  do {
    let aleatorio = Math.round(Math.random() * 49) + 1;
    set.add(aleatorio);
  } while (set.size <= 5);

  const estrellas = new Set();
  do {
    let osas = Math.round(Math.random() * 11) + 1;
    set.add(osas);
  } while (estrellas.size < 2);
};


const generaCarton = () => {
  let contador = 0;

  do{
    document.write('apuesta ' + contador);
    generaApuesta();
    contador++;
  }while(contador < 6);
}




generaCarton();
