import { Link } from "react-router-dom"

const Lista = ({state, dispatch}) => {
  return (
    <div className="container">
        <div className="row">

            { state.datos.map((elemento) => {
                return (
                    <div className="col border"  key={elemento.id}>
                    <h1>{elemento.id}</h1>
                    <h1>{elemento.name}</h1>
                    <h2>{elemento.lugar}</h2>
                    <h2>{elemento.asistentes}</h2>
                    <button className="btn btn-danger" onClick={() => dispatch({type: "delete", payload: elemento.id})}>Eliminar</button>
                    <Link to={`/edit/${elemento.id}`} className="btn btn-dark">Editar</Link>
                    </div>
                )
            }) }
        </div>
        <Link to="/add" className="btn btn-dark">Añadir</Link>

    </div>
  )
}

export default Lista