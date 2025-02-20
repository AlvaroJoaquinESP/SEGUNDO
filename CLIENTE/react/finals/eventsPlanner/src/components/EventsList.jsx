import { useContext } from "react"
import { EventsContext } from "../helper/Events"

const EventsList = () => {

    const {datos} = useContext(EventsContext)


  return (
    <div className="container">
        <div className="row">
            { datos.map((elemento) => {
                return (
                    <div className="col-5 border"  key={elemento.id}>
                    <h1>{elemento.titulo}</h1>
                    <h2>{elemento.fecha}</h2>
                    <h2>{elemento.hora}</h2>
                    <h2>{elemento.ubicacion}</h2>
                    <h2>{elemento.asistentes}</h2>
                    </div>
                )
            }) }




        </div>



    </div>
  )
}

export default EventsList