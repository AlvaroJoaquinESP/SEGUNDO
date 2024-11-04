const cambiar = () => {
    // Para comprobar que el html está bien. 
    // OBLIGATORIO
    // alert("asdajsd")

    // Modifico el css desde js.
    let verduras = document.querySelector("#verduras").value

    for (const element of verduras) {
        element.style.backgroundColor = "yellow"
    }
    
    
}