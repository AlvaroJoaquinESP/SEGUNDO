async function rellenaArray() {
    let url = "https://prueba-3fd02-default-rtdb.firebaseio.com/ajas.json"
    
        const datatype= await fetch(url);
        const response= await datatype.json()
        //  console.log(response);
        // return de un array
        mostrarDatos(response)
        return response

}