import { Link } from "react-router-dom"
const Add = ({dispatch}) => {
  
    const recibir = ev =>{
        ev.preventDefault()

        const obj = {
            id: Date.now(),
            name: ev.target.name.value,
            lugar: ev.target.lugar.value,
            asistentes: Number(ev.target.asistentes.value)
        }
        dispatch({type: "add", payload: obj})
    }
  
    return (
    <div className="container m-2">
        <form className="form-control" onSubmit={recibir}>
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" name="name" id="name" className="form-control" />

            <label htmlFor="lugar" className="form-label">Lugar</label>
            <input type="text" name="lugar" id="lugar" className="form-control" />

            <label htmlFor="asistentes" className="form-label">Asistentes</label>
            <input type="text" name="asistentes" id="asistentes" className="form-control" />
            <button className="btn btn-dark">Añadir</button>
        </form>
        <Link to="/list" className="btn btn-dark">Listado</Link>
    </div>
  )
}

export default Add