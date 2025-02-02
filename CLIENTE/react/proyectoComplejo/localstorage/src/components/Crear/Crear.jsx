import { PropTypes } from "prop-types";
export const Crear = ({tareas, setTareas}) => {

  const createTask = (ev) => {
    ev.preventDefault(); 

    const tarea = {
      id: Date.now(),
      tarea: ev.target.tareaI.value,
      fecha: ev.target.fechaI.value
    };

    setTareas([...tareas, tarea]);

    ev.target.tareaI.value = ""
    ev.target.fechaI.value = ""
  };
  
  return (
    <div className="container mt-5">
      <form className="form-control bg-bg-light" onSubmit={createTask}>
        <label className="form-label">Tarea</label>
        <input type="text" className="form-control mb-3" name="tareaI" required />
        <label className="form-label">Fecha</label>
        <input type="date" className="form-control mb-3" name="fechaI" required />
        <br />
        <input type="submit" className="btn btn-info" value="Añadir Tarea" />
      </form>
    </div>
  );
};

Crear.PropTypes = {
  tareas : PropTypes.array,
  setTareas : PropTypes.array
}
export default Crear
