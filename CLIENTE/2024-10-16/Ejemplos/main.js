function sumar() {
    let ele1 = Number(document.getElementById("ele1").value);
    let ele2 = Number(document.getElementById("ele2").value);
    let suma = ele1 + ele2
    // Marchaco el valor de resultado con el valor suma.
    document.getElementById("res").value=suma;
    document.getElementById("ele1").value="";
    document.getElementById("ele2").value="";
}

// Llamo a la función en el onclick de html.