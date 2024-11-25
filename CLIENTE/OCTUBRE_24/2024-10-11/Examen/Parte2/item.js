class Item  {
    // Constructor.
    constructor(nombre = "", coste = 0, tipo = "", potencia = 0) {
        this.nombre = nombre;
        this.coste = coste;
        this.potencia = potencia;
        if (tipo.toLowerCase() == "ataque" || tipo.toLowerCase() == "defensa") {
            this.tipo = tipo;
        } else {
            throw new Error("El tipo debe de ser ataque o defensa");
        }
    }

    // Métodos.
    toString() {
        return `Item: ${this.nombre}, Coste: ${this.coste}, Tipo: ${this.tipo}, Potencia: ${this.potencia}`
    }


}