class Categoría {
  // Constructor.
  constructor(nombreP = "") {
    this.nombre = nombreP;
    this.productos = [];
  }
  leeString = (pregunta) => {
    let unString;
    do {
      unString = pregunta;
    } while (unString.length == 0);
  };
  agregarProducto = (productoP) => {
    this.productos.push(productoP);
  };

  calcularPrecioTotal = () => {
    let total = 0;
    for (const element of this.productos) {
      total += element.precio;
    }
    console.log(`Precio total: ${total}`) 
  };

  mostrarProductos = () => {
    for (const element of this.productos) {
        console.log(element) 
    }
  }
}
