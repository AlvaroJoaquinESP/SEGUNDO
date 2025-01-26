export class Libro {
  private _titulo: string;
  private _autor: string;
  private _isbn: string;
  private _paginas: number;
  private _fechaPublicacion: string;
  private _numeroEjemplares: number;
  private _ejemplaresPrestados: any;

  constructor() {
    this._titulo = "";
    this._autor = "";
    this._isbn = "";
    this._paginas = 0;
    this._fechaPublicacion = "";
    this._numeroEjemplares = 0;
    this._ejemplaresPrestados = 0;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public get autor(): string {
    return this._autor;
  }

  public set autor(value: string) {
    this._autor = value;
  }

  public get paginas(): number {
    return this._paginas;
  }

  public set paginas(value: number) {
    this._paginas = value;
  }

  public get isbn(): string {
    return this._isbn;
  }

  public set isbn(value: string) {
    this._isbn = value;
  }

  public get fechaPublicacion(): string {
    return this._fechaPublicacion;
  }

  public set fechaPublicacion(value: string) {
    this._fechaPublicacion = value;
  }

  public get numeroEjemplares(): number {
    return this._numeroEjemplares;
  }

  public set numeroEjemplares(value: number) {
    this._numeroEjemplares = value;
  }

  public get ejemplaresPrestados(): any {
    return this._ejemplaresPrestados;
  }

  public set ejemplaresPrestados(value: any) {
    this._ejemplaresPrestados = value;
  }

  public insertarLibro() {
    // Asignar "" si prompt devuelve null
    const titulo = prompt("Ingresa el título del Libro") ?? "";
    const autor = prompt("Ingresa el autor  Libro") ?? "";
    const isbn = prompt("Ingresa el isbn del Libro") ?? "";
    const paginas = Number(
      prompt("Ingresa el número de páginas del Libro") ?? ""
    );
    const fechaPublicacion = prompt("Ingresa la fecha de publicación") ?? "";
    const numeroEjemplares = Number(
      prompt("Ingresa el numero de ejemplares") ?? ""
    );
    const ejemplaresPrestados = Number(
      prompt("Ingresa el numero de ejemplares prestados") ?? ""
    );

    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.paginas = paginas;
    this.fechaPublicacion = fechaPublicacion;
    this.numeroEjemplares = numeroEjemplares;
    this.ejemplaresPrestados = ejemplaresPrestados;
  }

  public prestamo() {
    if (this._numeroEjemplares - this._ejemplaresPrestados <= 0) {
        alert("No hay libros, lo sentimos");
        return false;
      } else {
        this._ejemplaresPrestados++;
        return true;
      }
    
  }


  public devolucion() {
    if (this._ejemplaresPrestados == 0) {
      return false
    } else {
      this._ejemplaresPrestados--
      return true
    }
  }

  public mostrarLibro() {
    return (
      "Título: " +
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
      this._ejemplaresPrestados
    );
  }
}
