import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
const AddTarea = (state, dispatch) => {


    const add = ev => {
        ev.preventDefault()

        const obj = {
            id: uuidv4(),
            tarea : ev.target.tarea.value,
            limite : ev.target.limite.value,
            prioridad : ev.target.prioridad.value
        }

        dispatch({type:'anyadir',payload:obj})
        console.log(obj)
    }

    return (
    <div className="container m-5">
        <form onSubmit={add}>
            <h2>Agregar Tareas</h2>
            <label htmlFor="tarea" className="form-label">Tarea</label>
            <input type="text" name="tarea" id="tarea" className="form-control" />
            
            <label htmlFor="limite" className="form-label">Límite</label>
            <input type="text" name="limite" id="limite" className="form-control" />
            
            <label htmlFor="prioridad">Prioridad</label>
            <select name="prioridad" id="prioridad" className="form-select">
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>

            </select>

            <button className="btn btn-primary mt-2">Add</button>
        </form>
        <hr />

        <Link to="/" className="btn btn-primary mt-2">Volver</Link>
    </div>
  )
}

export default AddTarea