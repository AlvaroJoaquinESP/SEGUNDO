class car {
    // Metodos
    constructor(marca, modelo, color, matricula) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.matricula = matricula;
    }
    toString() {
        return "Marca " + this.marca + "modelo " + this.modelo + "color " + this.color + "matricula " + this.matricula;
    }
}
