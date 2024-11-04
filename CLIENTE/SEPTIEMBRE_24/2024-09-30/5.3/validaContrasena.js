const validaContrasena = (contrasena) => {
    const minusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];

    if(texto.length < 8) {
        return false;
    }
    let contMayusculas = 0, contMinusculas = 0, contNumeros = 0;

    const arrTexto = texto.split("");
     
    arrTexto.forEach(element => {
        if(mayusculas.includes(element)) contMayusculas++;
        if(minusculas.includes(element)) contMinusculas++;
        if(numeros.includes(element)) contNumeros++;

    });

    return (contMayusculas >= 0 && contMinusculas >= 0 && contNumeros >= 0);

// return true or false

document.write(validaContrasena())
}