import PropTypes from 'prop-types'
import { Link,useNavigate } from "react-router-dom"

function AddHabit ({state,dispatch}) {
  /** IMPORTANTE EL NAVIGATE . Boton más abajo*/
  const navigate = useNavigate()

const recibir = ev => {
    ev.preventDefault()

    const obj = {
        dia: Number(ev.target.dia.value),
        habito: ev.target.habito.value,
        nivel_cumplimiento: Number(ev.target.nivel_cumplimiento.value)
    }
    const nuevo = [...state.datos,obj]
    dispatch({type: "add", payload: nuevo})
    alert("Added")
    /** IMPORTANTE EL NAVIGATE */
    navigate("/list")
}

  return (
    <div className='container m-2'>
      <h1 className="text-center bg-success-subtle rounded-3">ADD AN HABIT</h1>
      <form onSubmit={recibir}>

            <label htmlFor="dia" className='form-label'>Day:</label>
            <input type="number" name="dia" id="dia" className='form-control'/>
            
            <label htmlFor="habito" className='form-label'>Habit:</label>
            <input type="text" name="habito" id="habito" className='form-control'/>
            
            <label htmlFor="nivel_cumplimiento" className='form-label'>Compromise:</label>
            <input type="number" name="nivel_cumplimiento" id="nivel_cumplimiento" className='form-control'/>
            <button className='btn btn-danger m-2'>Add</button>
        </form>
        
        <Link to="/list" className="btn btn-danger m-2">List</Link>
    </div>
  )
}



AddHabit.propTypes = {
  datos: PropTypes.array,
  setDatos: PropTypes.func
  
}


export default AddHabit