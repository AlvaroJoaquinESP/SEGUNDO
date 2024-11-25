class Batalla {
    // Constructor.
    constructor (personaje1P, personaje2P) {
        this.personaje1 = personaje1P
        this.personaje2 = personaje2P
    }

    // Métodos.
    iniciar = () => {
        while (this.personaje1.estaVivo() && this.personaje2.estaVivo()) {
            this.personaje1.atacar(this.personaje2);
            if (this.personaje2.estaVivo()) {
                this.personaje2.atacar(this.personaje1)
            }
        }
    }

    mostrarResultado = () => {
        if (this.personaje1.estaVivo()) {
            console.log("Ha ganao el 1")
        } else {
            console.log("Ha ganao el 2")
        }
    }
}