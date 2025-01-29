import { useRef, useState } from "react";

function App() {
  const [arrTareas, setArrTareas] = useState([]);
  const tareaP = useRef("");
  const fechaP = useRef("");

  const tareas = {
    tarea: tareaP,
    fecha: fechaP,
  };

  setArrTareas([...arrTareas, tareas]);
  console.log(arrTareas);

  return (
    <div className="container mt-4">
      <label htmlFor="tarea" className="label-form">
        Tarea
      </label>
      <input type="text" className="form-control" id="tarea" ref={tareaP} />
      <label htmlFor="fecha" className="label-form">
        Fecha Límite
      </label>
      <input type="date" className="form-control" id="fecha" ref={fechaP} />
      <br />
      <button className="btn btn-info">Añadir</button>

      <div className="mt-4"></div>
    </div>
  );
}

export default App;
