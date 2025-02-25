import { useContext, useState } from "react"
import { EventosContext } from "../helper/Eventos"
import { Link, useParams } from "react-router-dom"

const AddEvento = () => {
    const {id} = useParams()
    const {editEvent, datos} = useContext(EventosContext)
    const[objActualizar, setobjActualizar] = useState([])
    const recibir = (ev) => {
        ev.preventDefault()

        // const { titulo, fecha, hora, asistentes } = ev.target.value;
        const obj = {
            id: id,
            titulo: ev.target.titulo.value,
            fecha: ev.target.fecha.value,
            hora: ev.target.hora.value,
            asistentes: ev.target.asistentes.value
        }
        editEvent(obj)

        
        setobjActualizar(datos.find(p => p.id == id))
    }



    return (
    <div className="container m-4">
        <form className="form-control" onSubmit={recibir}>
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input type="text" name="titulo" id="titulo" className="form-control" defaultValue={objActualizar.titulo}/>
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
            <button className="btn btn-info">Editar</button>
        </form>

        <Link to="/list" className="btn btn-info m-2">Ver Listado</Link>

    </div>
  )
}

export default AddEvento