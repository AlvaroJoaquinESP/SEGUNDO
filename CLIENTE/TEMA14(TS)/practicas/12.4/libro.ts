class Libro {
  private _titulo: string;
  private _autor: string;
 
  private _isbn: string;
  
  
  
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

  toString() {}








  public get titulo_1(): string {
    return this._titulo;
  }
  public set Settitulo_1(value: string) {
    this._titulo = value;
  }


  public get autor(): string {
    return this._autor;
  }
  public set Setautor(value: string) {
    this._autor = value;
  }


  private _paginas: number;
  public get paginas(): number {
    return this._paginas;
  }
  public set Setpaginas(value: number) {
    this._paginas = value;
  }


  public get isbn(): string {
    return this._isbn;
  }
  public set Setisbn(value: string) {
    this._isbn = value;
  }


  public get fechaPublicacion(): string {
    return this._fechaPublicacion;
  }
  public set SetfechaPublicacion(value: string) {
    this._fechaPublicacion = value;
  }


  public get numeroEjemplares(): number {
    return this._numeroEjemplares;
  }
  public set SetnumeroEjemplares(value: number) {
    this._numeroEjemplares = value;
  }


  public get ejemplaresPrestados(): any {
    return this._ejemplaresPrestados;
  }
  public set ejemplaresPrestados(value: any) {
    this._ejemplaresPrestados = value;
  }
}

function insertarLibro(): void {
  const titulo = prompt("Ingresa el título del Libro");
  const autor = prompt("Ingresa el autor  Libro");
  const isbn = prompt("Ingresa el isbn del Libro");
  const paginas = Number(prompt("Ingresa el número de páginas del Libro"));
  const fechaPublicacion = prompt("Ingresa la fecha de publicación");
  const numeroEjemplares = Number(prompt("Ingresa el numero de ejemplares"));
  const ejemplaresPrestados = Number(
    prompt("Ingresa el numero de ejemplares prestados")
  );

  const nuevoLibro = new Libro()

  
}




