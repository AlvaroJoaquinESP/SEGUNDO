import { useState } from "react";

export const Crear = () => {
  const [tareas, setTareas] = useState([]);

  const datosObj = (ev) => {
    ev.preventDefault();

    let tareaDOM = tarea.target.value;
    let fechaDOM = fecha.target.value;
    const tarea = {
      id: Date.now(),
      tarea: tareaDOM,
      fecha: fechaDOM,
    };

    setTareas(...tareas, tarea);
  };

  return (
    <div className="container mt-5">
      <form className="form-control" onSubmit={datosObj}>
        <label className="form-label">Tarea</label>
        <input type="text" className="form-control" name="tarea" required />
        <label className="form-label">Fecha</label>
        <input type="date" className="form-control" name="fecha" required />
        <br />
        <input type="submit" className="btn btn-check" value="Añadir" />
      </form>
    </div>
  );
};
