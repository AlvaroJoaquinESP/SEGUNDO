import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { EventsContext } from "../helper/Events"

const EditEvent = () => {
    
    const {id} = useParams()
    const {datos} = useContext(EventsContext)


    useEffect(() => {
        const obj = datos.find(p=>p.id == id)
        console.log(obj)
    }, [])

  return (
    <div className="container m-4">
        <h1 className="text-center bg-primary rounded-2">EDITING EVENT Nº {id}</h1>
        <form className="form-control">
            <label htmlFor="titulo" className="form-label">Tittle:</label>
            <input type="text" name="titulo" id="titulo" className="form-control" />
            <br />
            
            <label htmlFor="fecha" className="form-label">Data:</label>
            <input type="date" name="fecha" id="fecha" className="form-control" />
            <br />
            
            <label htmlFor="hora" className="form-label">Hour:</label>
            <input type="time" name="hora" id="hora" className="form-control" />
            <br />
            
            <label htmlFor="ubicacion" className="form-label">Ubication:</label>
            <input type="text" name="ubicacion" id="ubicacion" className="form-control" />
            <br />
            
            <label htmlFor="asistentes" className="form-label">Attendees:</label>
            <input type="text" name="asistentes" id="asistentes" className="form-control" />
            <br />
            <button className="btn btn-primary m-1">Add Event</button>
        </form>
        <Link to = "/" className="btn btn-primary m-2">Home</Link>
        <Link to = "/list" className="btn btn-primary m-2">Events List</Link>
        </div>
  )
}

export default EditEvent