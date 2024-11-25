const p1 = new Producto("Lentejas", 1, 3, "Legumbre")
const p2 = new Producto("Alubias", 2, 4, "Legumbre")
const p3 = new Producto("Leche", 1, 3, "Lacteos")
const p4 = new Producto("Queso", 1, 3, "Lacteos")

const inventario = new Inventario() 

inventario.array.push(p1)
inventario.array.push(p2)
inventario.array.push(p3)
inventario.array.push(p4)

// Mostrar productos.
inventario.forEach(element => {
    element.mostrarProducto()
});

// Filtrar por categoría.
inventario.buscarPorCategoria(categoria)













