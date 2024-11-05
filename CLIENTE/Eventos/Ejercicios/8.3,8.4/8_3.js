const lineaFactura = []

document.querySelector("#boton").addEventListener("click", () => {
    const productoN = {
        nombre : document.querySelector("#product").value,
        cantidad : Number(document.querySelector("#quantity").value),
        pvp : Number(document.querySelector("#pvp").value)
    }

    lineaFactura.push(productoN)
    console.log(lineaFactura)



})


document.querySelector("#boton").addEventListener("click",()=> {
    

});
