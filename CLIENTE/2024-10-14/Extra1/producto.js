class Producto {
    // Constructor.
    constructor(nombreP = "", precioP = 0, cantidadP = 0, categoriaP = "") {
        this.nombre = nombreP
        this.precio = precioP
        this.cantidad = cantidadP
        this.categoria = categoriaP
    }

    // Métodos.
    actualizarStock(nuevaCantidad) {
        this.cantidad = nuevaCantidad
    }

    mostrarProducto() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad},Nombre: ${this.categoria}`
    }

    
} 