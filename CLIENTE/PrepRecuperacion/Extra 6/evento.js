class Evento {
    constructor(nombre = "", fecha = "", lugar = "", capacidadMaxima = 0) {
        this.nombre = nombre
        this.fecha = fecha
        this.lugar = lugar
        this.capacidadMaxima = capacidadMaxima
        this.asistentes = []
    }

    agregarAsistente = (nombre) => {
        if (this.capacidadMaxima > this.asistentes.length) {
            this.asistentes.push(nombre)
        } else {
            document.write('El evento está lleno<br>')
        }
    }

    mostrarDetalles = () => {
        document.write(`Nombre Evento: ${this.nombre}<br>
            Fecha: ${this.fecha}<br>
            Lugar: ${this.lugar}<br>
            Capacidad máxima: ${this.capacidadMaxima}<br>
            Nombres de los asistentes: ${this.asistentes}<br>
            Capacidad Actual: ${this.asistentes.length}`)
    }
}