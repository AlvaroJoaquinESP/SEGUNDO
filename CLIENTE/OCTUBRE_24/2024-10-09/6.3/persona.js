class Persona {
    //Constructor.
    constructor(nombre = '', edad = 0, sexo = '', peso = 0, altura = 0, DNI = ''){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }


    //Métodos.
    calcularIMC() {
        let imc = this.peso/(Math.pow(this.altura));
        if(imc < 20) {
            return -1;
        } else if(imc >= 20 && imc <= 25) {
            return 0;
        } else if(imc > 25) {
            return 1;
        }
    }

    esMayorDeEdad() {
        return(this.edad >= 18);
    }

    toString() {
        return ``
    }

    static generaDNI() {
        let salida = '';
        for(let i = 1; i <= 8; i++) {
            salida +=Math.round(Math.random() * 9);
        }
        return salida;
    }
}