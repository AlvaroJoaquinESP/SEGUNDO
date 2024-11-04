class Articulo {
    // Constructor.
    constructor(codigo = "", descripcion = "", pvp = 0) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.pvp = pvp;
    }

    // Métodos.
    insertaArticulo() {
        this.codigo = prompt("Ingrese el código");
        this.descripcion = prompt("Ingrese una descripción");
        this.pvp = prompt("Ingrese pvp");
    }

    muestraArticulo() {
        return `Código: ${this.codigo}, Descripción: ${this.descripcion}, PVP: ${this.pvp}`;
    }


}