class Persona {
    // Constructor.
    constructor(nombre = "", edad = 0, DNI = "",sexo = "", peso = 0.0, altura = 0.0) {
        this.nombre = nombre;
        this.edad = 0;
        this.DNI = DNI;
        this.peso = peso;
        this.altura = altura;
    }

    // Métodos.
    esMayorEdad() {
        return (this.edad >= 18);
    }

    static comprobarSexo(sexo) {
        if (sexo == "H" || sexo == "F") {
            this.sexo = sexo;
        } else {
            this.sexo = "H";
        }
    }
}