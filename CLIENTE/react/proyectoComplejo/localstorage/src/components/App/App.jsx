import { useEffect, useState } from "react";
import  Crear  from "../Crear/Crear";
import Listar from "../Listar/Listar";

function App() {
  const [tareas, setTareas] = useState([])


  useEffect(() => {
    // localStorage.getItem('arrTareas') recupera el valor de esa clave del navegador.
    // JSON.parse convierte el string en formato JSON a un objeto/array, dependiendo de lo que se haya almacenado.
    const listado = JSON.parse(localStorage.getItem('arrTareas')) // arrTareas es el nombre que se utiliza en localStorage para almacenar datos. Se lo asigna el dev. 
    
    if (listado) setTareas(listado)
  },[])


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
