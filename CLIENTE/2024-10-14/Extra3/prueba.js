const electronica = new Categoría("Electronica")
const ropa = new Categoría("Ropa")
const alimentos = new Categoría("Alimentos")

const p1 = new Producto("Portátil", 350, electronica)
const p2 = new Producto("Atún", 2.3, alimentos)
const p3 = new Producto("Camisa", 35, ropa)

electronica.agregarProducto(p1)
alimentos.agregarProducto(p2)
ropa.agregarProducto(p3)

electronica.mostrarProductos()
ropa.mostrarProductos()
alimentos.mostrarProductos()

electronica.calcularPrecioTotal()
ropa.calcularPrecioTotal()
alimentos.calcularPrecioTotal()






