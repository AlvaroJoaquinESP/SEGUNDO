import { useDispatch, useSelector } from "react-redux";
import { removeDatos } from "../datosSlice";
import { Link } from "react-router-dom";

function BookList() {
  const datos = useSelector((state) => state.datos.books);
  const dispatch = useDispatch();
  return (
    <div className="container mt-2">
        <div className="row">
      {datos.map((elemento) => {
        return (
          <div className="col border" key={elemento.isbn}>
            <h1>{elemento.isbn}</h1>
            <h1>{elemento.name}</h1>
            <h2>{elemento.pages}</h2>
            <h2>{elemento.author}</h2>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeDatos(elemento.isbn))}
            >
              Delete
            </button>
          </div>
        );
      })}
      </div>
      <Link to="/add" className="btn btn-dark m-2">Add Book</Link>
    </div>
  );
}

export default BookList;
