import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { EventsContext } from "../helper/Events"
import { useContext } from "react"
const AddEvent = () => {

    const {addEvent} = useContext(EventsContext)

    

    const recibir = ev => {
        ev.preventDefault()

        const obj = {
            id: uuidv4(),
            titulo: ev.target.titulo.value,
            fecha: ev.target.fecha.value,
            hora: ev.target.hora.value,
            ubicacion: ev.target.ubicacion.value,
            asistentes: ev.target.asistentes.value
        }
        alert("Insertado correctamente")
        addEvent(obj)
    }


  return (
    <div className="container m-4">
        <h1 className="text-center bg-primary rounded-2">INSERT YOUR EVENT</h1>
        <form className="form-control" onSubmit={recibir} >
            <label htmlFor="titulo" className="form-label">Tittle:</label>
            <input type="text" name="titulo" id="titulo" className="form-control" required/>
            <br />
            
            <label htmlFor="fecha" className="form-label">Data:</label>
            <input type="date" name="fecha" id="fecha" className="form-control" required/>
            <br />
            
            <label htmlFor="hora" className="form-label">Hour:</label>
            <input type="time" name="hora" id="hora" className="form-control" required/>
            <br />
            
            <label htmlFor="ubicacion" className="form-label">Ubication:</label>
            <input type="text" name="ubicacion" id="ubicacion" className="form-control" required/>
            <br />
            
            <label htmlFor="asistentes" className="form-label">Attendees:</label>
            <input type="text" name="asistentes" id="asistentes" className="form-control" required/>
            <br />
            <button className="btn btn-primary m-1">Add Event</button>
        </form>


        
    <Link to = "/" className="btn btn-primary m-2">Home</Link>
    <Link to = "/list" className="btn btn-primary m-2">Events List</Link>
    </div>
  )
}

export default AddEvent