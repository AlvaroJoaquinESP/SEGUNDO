import { useContext } from "react"
import { EventsContext } from "../helper/Events"
import { Link } from "react-router-dom"

const EventsList = () => {

    const {datos, deleteEvent} = useContext(EventsContext)


  return (
    // Aqui se puede meter un header(componente).
    <div className="container">
        <div className="row gap-3 mt-2">
            <h1 className="text-center bg-warning rounded-3">EVENTS</h1>
            { datos.map((elemento) => {
                return (
                    <div className="col-5 border"  key={elemento.id}>
                    <h1>{elemento.titulo}</h1>
                    <h2>{elemento.fecha}</h2>
                    <h2>{elemento.hora}</h2>
                    <h2>{elemento.ubicacion}</h2>
                    <h2>{elemento.asistentes}</h2>
                    <button className="btn btn-danger m-1" onClick={() => deleteEvent(elemento.id)}>Delete</button>
                    <Link to={"/list/edit/" + elemento.id}className="btn btn-info">Editar</Link>
                    </div>
                )
            }) }
        </div>  

        <Link to="/add" className="btn btn-primary m-3">Add another one</Link>
        {/* Compruebo el navigate del App.jsx */}
        <Link to="/" className="btn btn-primary m-3">Home</Link>

    </div>

    // Aqui se puede meter un footer(componente).

  )
}

export default EventsList