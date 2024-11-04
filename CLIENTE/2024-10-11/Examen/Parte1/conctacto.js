class Contacto  {
    //Constructor.
     constructor () {
        this.nombre = "";
        this.tlfno = "";
     }



     //Métodos.
     crearContacto(nombre, tlfno) {
        this.nombre = nombre;
        this.tlfno = tlfno;
     }

     mostrarTelefono() {
        document.write(this.tlfno);
     }


     mostrarContacto() {
        document.write("Nombre: " + this.nombre 
        + "<br>" + "Telefono: " + this.tlfno + "<br>");
     }


     


}