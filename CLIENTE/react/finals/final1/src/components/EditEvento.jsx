import { useContext} from "react"
import { EventosContext } from "../helper/Eventos"
import { Link, useParams } from "react-router-dom"

const AddEvento = () => {
    const {id} = useParams()
    const {datos, addEvent, deleteEvent} = useContext(EventosContext)

    const datos2 = datos.find(p => p.id == id)
    console.log(datos2);

    const { titulo, fecha, hora, asistentes } = datos2;


    const recibir = (ev) => {
        ev.preventDefault()

        const obj = {
            id: Number(id),
            titulo: ev.target.titulo.value,
            fecha: ev.target.fecha.value,
            hora: ev.target.hora.value,
            asistentes: ev.target.asistentes.value
        }
        deleteEvent(id)
        addEvent(obj)
    }

    return (
    <div className="container m-4">
        <form className="form-control" onSubmit={recibir}>
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input type="text" name="titulo" id="titulo" className="form-control" defaultValue={titulo}/>
            <br />
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input type="text" name="fecha" id="fecha" className="form-control" defaultValue={fecha}/>
            <br />
            <label htmlFor="hora" className="form-label">Hora</label>
            <input type="number" name="hora" id="hora" className="form-control" defaultValue={hora}/>
            <br />
            <label htmlFor="asistentes" className="form-label">Asistentes</label>
            <input type="text" name="asistentes" id="asistentes" className="form-control" defaultValue={asistentes}/>
            <br />
            <button className="btn btn-info">Editar</button>
        </form>

        <Link to="/list" className="btn btn-info m-2">Ver Listado</Link>

    </div>
  )
}

export default AddEvento