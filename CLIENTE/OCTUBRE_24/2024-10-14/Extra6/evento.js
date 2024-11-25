class Evento {
  // Constructor.
  constructor(
    nombreP = "",
    fechaP = "",
    lugarP = "",
    capacidadMaximaP = 0
  ) {
    this.nombre = nombreP;
    this.fecha = fechaP;
    this.lugar = lugarP;
    this.capacidadMaxima = capacidadMaximaP;
    this.asistentes = [];
  }

  leeNumber = (pregunta) => {
    let unNumber;
    do {
      unNumber = Number(prompt(pregunta));
    } while (unNumber < 0 || isNaN(unNumber));
    return unNumber;
  };

  leString = (pregunta) => {
    let unString;
    do {
      unString = prompt(pregunta);
    } while (unString.length == 0);
    return unString;
  };
  // Métodos.
  agregarAsistente = (nombreP) => {
    if (this.asistentes.length < this.capacidadMaxima) {
     const a1 = {
        nombre: nombreP,
      };
      this.asistentes.push(a1);
    } else if (this.asistentes.length >= this.capacidadMaxima) {
      console.log(`El evento está lleno`);
    }
  };

  mostrarDetalles = () => {
    console.log(`Nombre Evento: ${this.nombre},
        Fecha Evento ${this.fecha},
        Lugar Evento ${this.lugar},
        Capacidad Máxima Evento ${this.capacidadMaxima},
        Número de Asistentes ${this.asistentes.length},
        Nombre Asistentes ${this.asistentes.nombre}`)

        

    }
}


