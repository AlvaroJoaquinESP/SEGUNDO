class Personaje {
  // Constructor.
  constructor(nombre = "", vida = 0, dinero = 0) {
    this.nombre = nombre;
    this.vida = vida;
    this.dinero = dinero;
    this.arma = null;
    this.defensa = null;
  }

  // Métodos.
  asignarArma(item) {
    this.arma = item;
  }

  asignarDefensa(item) {
    this.defensa = item;
  }

  levear() {
    if (this.dinero >= 2) {
      this.vida += 5;
      this.dinero -= 2;
    }
  }

  farmeo = new Item();
  farmear(item) {
    
  }

  mostrarPersonaje() {
    document.write(`Nombre: ${this.nombre},
            Vida: ${this.vida},
            Arma: ${this.arma.toString()}, 
            Defensa: ${this.defensa.toString()},
            Dinero: ${this.dinero}`);
  }
  // Arma y defensa con toString() ya que son objetos.
}
