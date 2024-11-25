class Inventario {
    // Constructor.
    constructor() {
        this.array = []
    }

    // Métodos.
    agregarProducto(product) {
        this.array.push(product)
    }

    listarProductos() {
        array.forEach(i => {
            i.mostrarProducto()
        })
    }

    buscarPorCategoria(categoria) {
        array.forEach(element => {
            if (element.categoria.toLowerCase() == categoria.toLowerCase()) {
                element.mostrarProducto()
            }
        })
    }
}