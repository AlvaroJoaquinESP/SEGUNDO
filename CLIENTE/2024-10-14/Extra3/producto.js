class Producto {
    // Constructor.
    constructor(nombreP = "", precioP = 0, categoriaP = "") {
        this.nombre = nombreP
        this.precio = precioP
        this.categoria = categoriaP
    }

    mostrarProducto = () => {
        return `Producto: ${this.nombre},
        Precio: ${this.precio},
        Categoría: ${this.categoria}`
    }

}