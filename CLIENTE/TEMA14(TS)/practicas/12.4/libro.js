export class Libro {
    constructor() {
        this._titulo = "";
        this._autor = "";
        this._isbn = "";
        this._paginas = 0;
        this._fechaPublicacion = "";
        this._numeroEjemplares = 0;
        this._ejemplaresPrestados = 0;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(value) {
        this._titulo = value;
    }
    get autor() {
        return this._autor;
    }
    set autor(value) {
        this._autor = value;
    }
    get paginas() {
        return this._paginas;
    }
    set paginas(value) {
        this._paginas = value;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(value) {
        this._isbn = value;
    }
    get fechaPublicacion() {
        return this._fechaPublicacion;
    }
    set fechaPublicacion(value) {
        this._fechaPublicacion = value;
    }
    get numeroEjemplares() {
        return this._numeroEjemplares;
    }
    set numeroEjemplares(value) {
        this._numeroEjemplares = value;
    }
    get ejemplaresPrestados() {
        return this._ejemplaresPrestados;
    }
    set ejemplaresPrestados(value) {
        this._ejemplaresPrestados = value;
    }
    insertarLibro() {
        var _a, _b, _c, _d, _e, _f, _g;
        // Asignar "" si prompt devuelve null
        const titulo = (_a = prompt("Ingresa el título del Libro")) !== null && _a !== void 0 ? _a : "";
        const autor = (_b = prompt("Ingresa el autor  Libro")) !== null && _b !== void 0 ? _b : "";
        const isbn = (_c = prompt("Ingresa el isbn del Libro")) !== null && _c !== void 0 ? _c : "";
        const paginas = Number((_d = prompt("Ingresa el número de páginas del Libro")) !== null && _d !== void 0 ? _d : "");
        const fechaPublicacion = (_e = prompt("Ingresa la fecha de publicación")) !== null && _e !== void 0 ? _e : "";
        const numeroEjemplares = Number((_f = prompt("Ingresa el numero de ejemplares")) !== null && _f !== void 0 ? _f : "");
        const ejemplaresPrestados = Number((_g = prompt("Ingresa el numero de ejemplares prestados")) !== null && _g !== void 0 ? _g : "");
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.paginas = paginas;
        this.fechaPublicacion = fechaPublicacion;
        this.numeroEjemplares = numeroEjemplares;
        this.ejemplaresPrestados = ejemplaresPrestados;
    }
    prestamo() {
        if (this._numeroEjemplares - this._ejemplaresPrestados <= 0) {
            alert("No hay libros, lo sentimos");
            return false;
        }
        else {
            this._ejemplaresPrestados++;
            return true;
        }
    }
    devolucion() {
        if (this._ejemplaresPrestados == 0) {
            return false;
        }
        else {
            this._ejemplaresPrestados--;
            return true;
        }
    }
    mostrarLibro() {
        return ("Título: " +
            this._titulo +
            "Autor: " +
            this._autor +
            "ISBN: " +
            this._isbn +
            "Páginas: " +
            this._paginas +
            "Fecha de publicación: " +
            this._fechaPublicacion +
            "Ejemplares: " +
            this._numeroEjemplares +
            "Prestados: " +
            this._ejemplaresPrestados);
    }
}
