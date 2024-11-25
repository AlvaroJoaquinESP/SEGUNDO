class Agenda {
  //Constructor.
  constructor() {
    this.contactos = [];
  }

  //Métodos.
  aniadirContacto(c1) {
    this.contactos.push(c1);
  }

  listarContactos() {
    // Const ya que element será un Objeto. Puedo hacer forEach.
    for (const element of this.contactos) {
        element.mostrarContacto();
    }
  }


  buscaContacto(nombre) {
    // Const ya que element será un Objeto.
    for (const element of this.contactos) {
        // Accedo al nombre del O bjeto.
       if (element.nombre.toUpperCase() == nombre.toUpperCase()) {
            element.mostrarContacto();
       }
    }
}
}
