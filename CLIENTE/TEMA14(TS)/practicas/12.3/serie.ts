class Serie {
  private _titulo: string;

  private entregado: boolean;

  private _genero: any;

  private _creador: any;

  constructor(
    titulo: string,
    temporadas: number,
    entregado: boolean,
    genero: string,
    creador: string
  ) {
    this._titulo = titulo;
    this._temporadas = temporadas;
    this.entregado = entregado;
    this._genero = genero;
    this._creador = creador;
  }

  // getters & setters

  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }

  private _temporadas: number;
  public get temporadas(): number {
    return this._temporadas;
  }
  public set temporadas(value: number) {
    this._temporadas = value;
  }
  public get genero(): any {
    return this._genero;
  }
  public set genero(value: any) {
    this._genero = value;
  }
  public get creador(): any {
    return this._creador;
  }
  public set creador(value: any) {
    this._creador = value;
  }

  toString() {
    return "Titulo: " + this._titulo + "Temporadas: " + this._temporadas + 
"Entregado: " + this.entregado +  "Género: " + this._genero +  "Creador: " + this._creador}
}
