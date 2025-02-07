import { Routes, Route } from "react-router-dom"
import Aula from "./aula/components/Aula.jsx"
import Home from "./home/components/Home.jsx"
import AddAula from "./aula/components/AddAula.jsx"
function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/aula" element={<Aula />}/>
      <Route path="/aula/add" element={<AddAula />}/>
      
    </Routes>
  )
}

export default App
