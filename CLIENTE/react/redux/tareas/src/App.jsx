import { Route, Routes } from "react-router-dom"
import ListarTareas from "./components/ListarTareas"

function App() {

  return (
    <Routes>
      <Route path="/" element={<ListarTareas/>}/>
    </Routes>
  )
}

export default App
