import RegistroGastos from "./RegistroGastos"
import { useState } from "react"


function App() {

  const [gastos, setGastos] = useState([{id: 1, descripcion: 'Gasto 1',monto: 100,categoria: 'Comida',fecha:'2025-01-01'}, {id: 2, descripcion: 'Gasto 2',monto: 200,categoria: 'Transporte',fecha:'2025-01-02'}])

  return (
    <div className="container">
      <h1>Registro de gastos personales</h1>
      <hr />
      <RegistroGastos datos={gastos} setDatos={setGastos}/>



    </div>
         
  )
}

export default App
