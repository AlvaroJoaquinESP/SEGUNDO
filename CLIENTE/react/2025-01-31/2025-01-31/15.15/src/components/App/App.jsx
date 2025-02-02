import { useEffect, useState } from "react";
import Crear from "../Crear/Crear";
import Listar from "../Listar/Listar";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let url = "https://examen-e5714-default-rtdb.firebaseio.com/tareas.json";

    try {
      fetch(url)
        .then((datatype) => datatype.json())
        .then((response) => {
          console.log(response);
          if (response) setTareas(response);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <Listar tareas={tareas} setTareas={setTareas} />
        </div>

        <div className="col-4">
          <Crear tareas={tareas} setTareas={setTareas} />
        </div>
      </div>
    </div>
  );
}

export default App;
