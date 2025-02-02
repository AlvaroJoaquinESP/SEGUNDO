import { useState } from "react";
import  Crear  from "../Crear/Crear";
import Listar from "../Listar/Listar";

function App() {
  const [tareas, setTareas] = useState([])


  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-8">
          <Listar tareas={tareas}/> {/*nombre del paremetro = {parametro}*/}
        </div>

        <div className="col-4">
        <Crear tareas={tareas} setTareas={setTareas}/>
        </div>
      </div>
    </div>
  );
}

export default App;
