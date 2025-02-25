import { Routes,Route } from "react-router-dom";
import Add from "./components/Add";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Add />}/>
      
    </Routes>
  )
}

export default App
