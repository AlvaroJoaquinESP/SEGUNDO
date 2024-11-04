document.querySelector("#boton").addEventListener("click", () => {
    generar()
})




const generar = () => {

    const superArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q', 'R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]

     let longitud = Number(document.querySelector("#long").value)
    if ( longitud < 4) {
        alert("Tontucio")
        return false;
    } 

    let contrasenia = ""
    for (let i = 0; i <= longitud; i++) {
        let posicion = Math.round(Math.random() * superArr.length -1)
        contrasenia += superArr[posicion]

        
    }

// console.log(contrasenia)
// Los inputs siempre son con value
    document.querySelector("#res").value = contrasenia


}