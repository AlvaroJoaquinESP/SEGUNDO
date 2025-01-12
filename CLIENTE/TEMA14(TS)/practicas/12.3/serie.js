class Serie {
    constructor(titulo, temporadas, entregado, genero, creador) {
        this._titulo = titulo;
        this._temporadas = temporadas;
        this.entregado = entregado;
        this._genero = genero;
        this._creador = creador;
    }
    // getters & setters
    get titulo() {
        return this._titulo;
    }
    set titulo(value) {
        this._titulo = value;
    }
    get temporadas() {
        return this._temporadas;
    }
    set temporadas(value) {
        this._temporadas = value;
    }
    get genero() {
        return this._genero;
    }
    set genero(value) {
        this._genero = value;
    }
    get creador() {
        return this._creador;
    }
    set creador(value) {
        this._creador = value;
    }
    toString() {
        return "Titulo: " + this._titulo + "Temporadas: " + this._temporadas +
            "Entregado: " + this.entregado + "Género: " + this._genero + "Creador: " + this._creador;
    }
}
