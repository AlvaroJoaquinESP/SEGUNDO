import Lista from "./components/Lista";
import { RecetasProvider } from "./helper/Recetas"
import { Routes, Route, Navigate } from "react-router-dom"
function App() {
  return (
    <RecetasProvider>
      <Routes>
        <Route path="/" element={<Navigate to ="/list" />}/>
        <Route path="/list" element={<Lista />}/>
      </Routes>
    </RecetasProvider>
  );
}

export default App;
