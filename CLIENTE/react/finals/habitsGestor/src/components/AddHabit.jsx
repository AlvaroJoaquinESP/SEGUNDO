import PropTypes, { element } from 'prop-types'

function AddHabit ({state,dispatch}) {

const recibir = ev => {
    ev.preventDefault()
    const obj = {
        id: Number(ev.target.dia.value),
        habito: ev.target.habito.value,
        nivel_cumplimiento: Number(ev.target.nivel_cumplimiento.value)
    }

    const nuevo = [...state.datos,obj]
    dispatch({type: "add", payload: nuevo})



}

  return (
    <div className='container'>
        <form onSubmit={recibir}>

            <label htmlFor="dia">Día</label>
            <input type="number" name="dia" id="dia" />
            
            <label htmlFor="habito">Hábito</label>
            <input type="text" name="habito" id="habito" />
            
            <label htmlFor="nivel_cumplimiento">Compromiso</label>
            <input type="number" name="nivel_cumplimiento" id="nivel_cumplimiento" />
            

        </form>



    </div>
  )
}








AddHabit.propTypes = {
  datos: PropTypes.array,
  setDatos: PropTypes.func
  
}


export default AddHabit