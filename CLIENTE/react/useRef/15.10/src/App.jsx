import { useRef, useState } from "react";

function App() {
  const [arrTareas, setArrTareas] = useState([]);
  const tareaP = useRef("");
  const fechaP = useRef("");

  const addTarea = () => {
    const tarea = {
      tarea: tareaP.current.value,
      fecha: fechaP.current.value,
    };
    setArrTareas([...arrTareas, tarea]);
    tareaP.current.value = "";
    fechaP.current.value = "";
  };

  console.log(arrTareas);

  return (
    <div className="container mt-4">
      <h2 className="modal-title">Tareas por hacer (TO-DO)</h2>
      <label htmlFor="tarea" className="label-form">
        Tarea
      </label>
      <input type="text" className="form-control" id="tarea" ref={tareaP} />
      <label htmlFor="fecha" className="label-form">
        Fecha Límite
      </label>
      <input type="date" className="form-control" id="fecha" ref={fechaP} />
      <br />
      <button className="btn btn-info" onClick={addTarea}>
        Añadir
      </button>

      <div className="mt-4">
        <h2 className="card-title">Lista</h2>
        <ul>
          {arrTareas.map((elemento, indice) => {
            return (
              <li key={indice}>
                Tarea: <br/> {elemento.tarea} <br/> Límite: <br/> {elemento.fecha} <hr/>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
