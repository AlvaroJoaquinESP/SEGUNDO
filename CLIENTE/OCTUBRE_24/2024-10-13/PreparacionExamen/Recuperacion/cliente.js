class Cliente {
    // Constructor.
    constructor(dni = "", nombre = "", direccion = "", telefono = "") {
        this.dni = dni;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    // Métodos.
    insertaCliente() {
        this.dni = prompt("Ingresa el dni");
        this.nombre = prompt("Ingresa el nombre");
        this.direccion = prompt("Ingresa el dni");    
        this.telefono = prompt("Ingresa el telefono");
    }

    muestraCliente() {
        return `DNI: ${this.dni}, Nombre: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
    }

    

}