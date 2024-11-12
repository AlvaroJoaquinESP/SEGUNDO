class ProductoSubasta {
  constructor(nombre, precioInicial) {
    this.nombre = nombre;
    this.precioInicial = precioInicial;
    this.precioActual = this.precioInicial;
    this.pujadorActual = "";
  }

  recibirPuja = (pujador, cantidad) => {
    if (cantidad > this.precioActual) {
      this.precioActual = cantidad;
      this.pujadorActual = pujador;
    }
  };

  mostrarSubasta = () => {
    document.write(`Producto: ${this.nombre} <br>
        Precio Actual: ${this.precioActual} <br>
        Pujador: ${this.pujadorActual}<hr>`)
  }
}
