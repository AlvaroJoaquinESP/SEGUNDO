import { Navigate, Route, Routes } from "react-router-dom"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
import NotFound from "./components/NotFound"
import EditBook from "./components/EditBook"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list"/>}/>
      <Route path="/list" element={<BookList/>}/>
      <Route path="/add" element={<AddBook/>}/>
      <Route path="/edit/:isbn" element={<EditBook/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
