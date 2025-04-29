let arrNotas = []
document.querySelector("#boton").addEventListener("click",()=> {
     
    let id = document.querySelector('#id').value

    if (id == "") {
        alert("Not valid obj")
        return null;
    }

    const obj = {
        id : id,
        nombre : nombre = document.querySelector('#nombre').value,
        tema : document.querySelector('#tema').value,
        nota : document.querySelector('#nota').value,
    }

    console.log(obj);

   arrNotas.push(obj)
   show()

});


function show() {
    let salida = `<ul>`
    let salida2 = ``
    let suma = 0

    for (let element of arrNotas) {
        salida+= `<li>ID ${element.id}</li>
        <li>NOMBRE ${element.nombre}</li>
        <li>TEMA ${element.tema}</li>
        <li>NOTA ${element.nota}</li></ul><hr>`
        suma+=element.nota
    }

    document.querySelector('#salida').innerHTML = salida

    let media = suma/ (arrNotas.length)
    console.log(media)
  

    salida2 = `La nota media es: ${media}`
    console.log(salida2)
    document.querySelector('#media').innerHTML = salida2

}