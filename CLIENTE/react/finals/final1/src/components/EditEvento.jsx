import { useContext } from "react"
import { EventosContext } from "../helper/Eventos"
import { Link } from "react-router-dom"

const AddEvento = () => {
    const {editEvent} = useContext(EventosContext)
    
    const recibir = (ev) => {
        ev.preventDefault()

        const { titulo, fecha, hora, asistentes } = ev.target.value;


        const obj = {


            id: Date.now(),
            titulo: ev.target.titulo.value,
            fecha: ev.target.fecha.value,
            hora: ev.target.hora.value,
            asistentes: ev.target.asistentes.value
        }
        editEvent(obj)
    }

    return (
    <div className="container m-4">
        <form className="form-control" onSubmit={recibir}>
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input type="text" name="titulo" id="titulo" className="form-control" defaultValue={titulo}/>
            <br />
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input type="text" name="fecha" id="fecha" className="form-control" />
            <br />
            <label htmlFor="hora" className="form-label">Hora</label>
            <input type="number" name="hora" id="hora" className="form-control" />
            <br />
            <label htmlFor="asistentes" className="form-label">Asistentes</label>
            <input type="text" name="asistentes" id="asistentes" className="form-control" />
            <br />
            <button className="btn btn-info">Añadir</button>
        </form>

        <Link to="/list" className="btn btn-info m-2">Ver Listado</Link>

    </div>
  )
}

export default AddEvento