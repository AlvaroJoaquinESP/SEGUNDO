import PropTypes from 'prop-types'



function Crear({tareas,setTareas}) {

    const crearTarea=(ev)=> {
        ev.preventDefault();
        const obj={
            id:Date.now(),
            tarea:ev.target.tarea.value,
            fecha:ev.target.fecha.value
        }

        setTareas([...tareas,obj])
        localStorage.setItem('arrTareas',JSON.stringify([...tareas,obj]))
    }

  return (
    <div className='container bg-light p-3'>
        <h2>Crear Tarea</h2>
        <form onSubmit={crearTarea}>
        <label className="form-label">Tarea</label>
        <input type="text" className="form-control mb-3" name="tarea" required/>

        <label className="form-label">Fecha Limite</label>
        <input type="date" className="form-control mb-3" name="fecha" required/>

        <input type="submit" className="btn btn-primary" value="Crear Tarea"/>

        </form>

    </div>
  )
}


Crear.propTypes = {
    tareas:PropTypes.PropTypes.array,
    setTareas:PropTypes.PropTypes.array
}

export default Crear