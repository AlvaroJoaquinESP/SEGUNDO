import { Link, useParams } from "react-router-dom"
const Add = ({state,dispatch}) => {

    const {id} = useParams()
    const datos2 = state.datos.find(p => p.id == Number(id))

    const {name, lugar, asistentes} = datos2

    
    const recibir = ev =>{
        ev.preventDefault()

        const obj = {
            id: Number(id),
            name: ev.target.name.value,
            lugar: ev.target.lugar.value,
            asistentes: Number(ev.target.asistentes.value)
        }

        dispatch({type: "delete", payload: obj.id})
        dispatch({type: "add", payload: obj})
    }
  
    return (
    <div className="container m-2">
        <form className="form-control" onSubmit={recibir}>
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" name="name" id="name" className="form-control" defaultValue={name}/>

            <label htmlFor="lugar" className="form-label">Lugar</label>
            <input type="text" name="lugar" id="lugar" className="form-control" defaultValue={lugar}/>

            <label htmlFor="asistentes" className="form-label">Asistentes</label>
            <input type="text" name="asistentes" id="asistentes" className="form-control" defaultValue={asistentes}/>
            <button className="btn btn-dark">Editar</button>
        </form>
        <Link to="/list" className="btn btn-dark">Listado</Link>
    </div>
  )
}

export default Add