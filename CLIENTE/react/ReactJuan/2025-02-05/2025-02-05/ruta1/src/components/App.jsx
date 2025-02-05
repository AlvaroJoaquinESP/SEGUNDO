import { Routes,Route } from "react-router-dom"
import Inicio from "./Inicio"
import Fotos from "./Fotos"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/fotos" element={<Fotos />} />
   
    </Routes>
  )
}

export default App
