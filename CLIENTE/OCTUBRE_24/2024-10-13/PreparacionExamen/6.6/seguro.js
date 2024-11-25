class Seguro {
    // Constructor.
    constructor() {
        this.DNI = "";
        this.nombreApellidos = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
        this.vehiculo = "";
        this.seguro = "";
        this.franquicia = "";
        this.mes = "";
        this.precio = 0;
    }

    // Métodos.
    // ¿Podríamos implementar los métodos leer String y leer number?
    insertarSeguro() {
        this.DNI = prompt("Ingrese dni");
        this.nombreApellidos = prompt("Ingrese nombres y apellidos");
        this.direccion = prompt("Ingrese dirección");
        this.telefono = prompt("Ingrese teléfono");
        this.email = prompt("Ingrese email");
        this.vehiculo = prompt("Ingrese vehículo");
        this.seguro = prompt("Ingrese seguro");
        this.franquicia = prompt("Ingrese franquicia");
        this.mes = prompt("Ingrese mes");
        this.precio = Number(prompt("Ingrese precio"));
    }

    mostrarSeguro() {
        return `DNI: ${this.DNI}, Nombre y Apellidos: ${this.nombreApellidos} 
        Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Email: ${this.email}
        Vehículo: ${this.vehiculo}, Seguro: ${this.seguro}, Franquicia: ${this.franquicia}
        Mes: ${this.mes}, Precio: ${this.precio}`;
    }

    tipoSeguro() {
        return this.seguro;
    }

    mesSeguro() {
        return this.mes;
    }

    tipoVehiculo() {
        return this.vehiculo;
    }
}