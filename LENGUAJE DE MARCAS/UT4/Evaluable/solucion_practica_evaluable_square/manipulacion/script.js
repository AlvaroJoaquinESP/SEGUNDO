document.querySelector("#boton").addEventListener('click', () => {
    let azul = document.querySelector("#azul").value
    let rojo = document.querySelector("#rojo").value
    let verde = document.querySelector("#verde").value

    /*Crear contendor padre*/ 
    const container_parent= document.createElement("div")
    container_parent.className = "parentflex"
    document.body.appendChild(container_parent)

    drawSquare(azul, "azul", container_parent)
    drawSquare(rojo, "rojo", container_parent)
    drawSquare(verde, "verde", container_parent)

})

const drawSquare = (color, clase, container_parent) => {
    /*padre de cada color */
    let divparent = document.createElement("div")
    container_parent.appendChild(divparent)
    for (let index = 0; index < color; index++) {

        //Crear div de cada color
        let div = document.createElement("div")
        div.className = clase
        //btn eliminar
        let button = document.createElement("button")
        button.textContent = "Eliminar"
        button.addEventListener("click",() => {
            div.remove();
        })
        div.appendChild(button)

        //btn cambiar color
        let buttonc = document.createElement("button")
        buttonc.textContent = "Cambiar Color"
        buttonc.addEventListener("click",() => {
            cambiarColor(div);
        })       
        div.appendChild(buttonc)
        divparent.appendChild(div)
    }
}
const deleteSquare = (id) => {
    square = document.querySelector("#"+id);
    document.body.removeChild(square);
}

const cambiarColor = (square) =>{
    classActual = square.className;
    if(classActual == 'azul'){
        nuevoClass = 'rojo'
    }
    else if(classActual == 'rojo'){
        nuevoClass = 'verde' 
        
    }
    else{
        nuevoClass = 'azul'
    }
    square.className = nuevoClass;
}