class Personaje {
    // Constructor.
    constructor (nombreP = "", vidaP = 0, ataqueP = 0, defensaP = 0) {
        this.nombre = nombreP;
        this.vida = vidaP;
        this.ataque = ataqueP;
        this.defensa = defensaP;
    }

    // Métodos.
    atacar = (oponente) => {
        let danonino = this.ataque - oponente.defensa
        if (danonino < 0) {
            danonino = 0
        }
        oponente.vida -= danonino
    }

    estaVivo = () => {
        return (this.vida > 0)
    }

    mostrarEstado = () => {
        console.log(`Nombre: ${this.nombre}, 
            Vida Restante: ${this.vida}`)
    }
}