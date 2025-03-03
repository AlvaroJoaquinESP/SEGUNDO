import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import ListaReservas from "./components/ListaReservas";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/reservas" element={<ListaReservas />}/>

    </Routes>
  )
}

export default App
