import { Navigate, Route, Routes } from "react-router-dom";
import { EventosProvider } from "./helper/Eventos";
import  ListaEventos  from "./components/ListaEventos"
import AddEvento from "./components/AddEvento";
function App() {
  return (
    <EventosProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<ListaEventos />} />
        <Route path="/add" element={<AddEvento />} />
      </Routes>
    </EventosProvider>
  );
}

export default App;
