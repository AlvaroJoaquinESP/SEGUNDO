export const traerLibros=() => {
    let datos = localStorage.getItem("libros")

    if(datos) {
        return JSON.parse(datos)
    } else {
        return []
    }
}

export const guardarLibros=(arrLibros) => {
    const libroJSON = JSON.stringify(arrLibros)
    localStorage.setItem("libros", libroJSON)
}