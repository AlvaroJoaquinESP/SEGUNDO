import { useEffect, useState } from "react"
import Crear from "../Crear/Crear"
import Listar from "../Listar/Listar"

function App() {

  const [tareas, setTareas] = useState([])


  useEffect(() => {
    const listado=JSON.parse(localStorage.getItem('arrTareas'));
    if (listado) setTareas(listado);
  },[]);

  return (
    <div className="container">
      <div className="row mt-5">
 
        <div className="col-8">
          <Listar tareas={tareas}/>
          
          
          </div>

        <div className="col-4">
          <Crear tareas={tareas} setTareas={setTareas}/>
        </div>
      </div>


    </div>
  )
}

export default App
