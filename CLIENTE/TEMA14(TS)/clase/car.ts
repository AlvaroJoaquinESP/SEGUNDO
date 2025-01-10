class car {
    // Atributos.
    private marca : string
    private modelo: string
    private color: string
    private matricula: string


    // Metodos
    constructor(marca:string,modelo:string,color:string,matricula:string,) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.matricula = matricula
    }

    toString(): string {
        return "Marca " + this.marca + "modelo " + this.modelo +"color " + this.color +"matricula " + this.matricula
    }
}