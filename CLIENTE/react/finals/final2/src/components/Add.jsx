import { Link } from 'react-router-dom'

const Add = ({state, dispatch}) => {

    const recibir = ev => {
        ev.preventDefault()

        const obj = {
            id: Date.now(),
            marca: ev.target.marca.value,
            year: Number(ev.target.year.value),
            color: ev.target.color.value
        }
        const nuevo = [...state.coches, obj]
        dispatch({type:"add", payload: nuevo})
    }

  return (
    <div className="container m-2">
        <form className="form-control" onSubmit={recibir}>
            <label htmlFor="marca" className="form-label">Marca</label>
            <input type="text" name="marca" id="marca" className="form-control" />

            <label htmlFor="year" className="form-label">Year</label>
            <input type="number" name="year" id="year" className="form-control" />
            
            <label htmlFor="color" className="form-label">Color</label>
            <input type="text" name="color" id="color" className="form-control" />
            <button>Añadir</button>
        </form>
        <Link to="/list" className='btn btn-info'>Listado</Link>

    </div>
  )
}

export default Add