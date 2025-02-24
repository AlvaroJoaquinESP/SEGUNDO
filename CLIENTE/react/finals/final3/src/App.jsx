import { Routes,Route, Navigate } from "react-router-dom";
import ListadoLibros from "./components/ListadoLibros";
import AddLibro from "./components/AddLibro";
import EditarLibro from "./components/EditarLibro";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/" />}/>
      <Route path="/list" element={<ListadoLibros />}/>
      <Route path="/add" element={<AddLibro />}/>
      <Route path="/edit/:id" element={<EditarLibro />}/>
    </Routes>
  )
}

export default App
