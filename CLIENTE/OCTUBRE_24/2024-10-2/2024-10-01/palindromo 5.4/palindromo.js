const palindromo = (texto) => {

  //Cortafiambres.
  const arrTexto = texto.split("");
  //Reverso tenebroso de la fuerza.
  arrTexto.reverse();

  const text2 = arrTexto.join("");
  //Comparar la cadena original con el reverso.
  return (texto == text2);

};

document.write(palindromo("reconocea"));
