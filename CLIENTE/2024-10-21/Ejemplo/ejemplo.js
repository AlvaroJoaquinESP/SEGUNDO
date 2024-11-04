const cambiar = () => {
    // Para comprobar que el html está bien. 
    // OBLIGATORIO
    // alert("asdajsd")

    // Modifico el css desde js.
    // let verduras = document.getElementsByClassName("verdura")

    // for (const element of verduras) {
    //     element.style.backgroundColor = "yellow"
    // }

    let datos = document.querySelector("#datos").value // LA ALMOHADILLA INDICA QUE ES POR ID!! POR CLASE UTILIZARIA UN .

    let arrDatos = datos.split("")

    arrDatos.reverse()

    let salida = arrDatos.join("")

    document.querySelector("#resultado").value = salida
    
    
}