class Subasta {
  constructor() {
    this.productos = [];
    this.pujadores = [];
  }

  agregarProducto = (producto) => {
    this.productos.push(producto);
  };

  agregarPujador = (nombre) => {
    this.pujadores.push(nombre);
  };

  mostrarProductos = () => {
    this.productos.forEach((element) => {
        element.mostrarSubasta()
    });
  };

  realizarPuja = (producto, pujador, cantidad) => {
    if (this.pujadores.includes(pujador)) {
        for (const element of this.productos) {
            if (element.nombre == producto) {
              element.recibirPuja(pujador, cantidad);
            }
          }    
    }
    
  };
}
