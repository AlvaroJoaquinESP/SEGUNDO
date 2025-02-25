import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ListaHabitos ({state ,dispatch}) {

  return (
    <div className="container m-2">
        <div className="row">
            { state.coches.map((elemento) => {
                return (
                    <div  className='col border m-1' key={elemento.id}>
                    <h1>{elemento.id}</h1>
                    <h2>{elemento.marca}</h2>
                    <h2>{elemento.year}</h2>
                    <h2>{elemento.color}</h2>
                    <button className='btn btn-danger' onClick={() => dispatch({type: "eliminar", payload: elemento.id})}>Eliminar</button>
                    </div>
                )
            }) }
        </div>
            <Link to="/add" className='btn btn-info'>Añadir</Link>
    </div>
  )
}


export default ListaHabitos