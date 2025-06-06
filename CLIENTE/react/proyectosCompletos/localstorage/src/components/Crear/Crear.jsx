import { PropTypes } from "prop-types";
const Crear = ({ tareas, setTareas }) => {
  const createTask = (ev) => {
    ev.preventDefault();

    const tarea = {
      id: Date.now(),
      tarea: ev.target.tareaI.value,
      fecha: ev.target.fechaI.value,
    };

    setTareas([...tareas, tarea]);


    localStorage.setItem("arrTareas", JSON.stringify([...tareas, tarea]))


    ev.target.tareaI.value = "";
    ev.target.fechaI.value = "";
  };

  return (
    <div className="container mt-5">
      <form className="form-control bg-light" onSubmit={createTask}>
        <h3>Crear Tarea</h3>
        <label className="form-label">Tarea</label>
        <input
          type="text"
          className="form-control mb-3"
          name="tareaI"
          required
        />
        <label className="form-label">Fecha</label>
        <input
          type="date"
          className="form-control mb-3"
          name="fechaI"
          required
        />
        <br />
        <input type="submit" className="btn btn-info" value="Añadir Tarea" />
      </form>
    </div>
  );
};

Crear.propTypes = {
  tareas: PropTypes.array,
  setTareas: PropTypes.func,
};

export default Crear;
