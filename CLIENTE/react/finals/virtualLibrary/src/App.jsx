import { Navigate, Route, Routes } from "react-router-dom"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
import NotFound from "./components/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list"/>}/>
      <Route path="/list" element={<BookList/>}/>
      <Route path="/add" element={<AddBook/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
