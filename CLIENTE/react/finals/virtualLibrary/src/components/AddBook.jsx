import { useDispatch } from "react-redux";
import { addDatos } from "../datosSlice";
import { useNavigate } from "react-router-dom";


function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recibir = (ev) => {
    ev.preventDefault();
    const obj = {
      name: ev.target.name.value,
      pages: Number(ev.target.pages.value),
      author: ev.target.author.value,
    };

    dispatch(addDatos(obj));
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

    return (
      <div className="containe m-1">
        <h1 className="text-center bg-info rounded-3">ADD YOUR BOOK</h1>
        <form className="form-control" onSubmit={recibir}>
          <label htmlFor="name" className="form-label">
            Title
          </label>
          <input type="text" name="name" id="name" className="form-control" />
          <br />
          <label htmlFor="pages" className="form-label">
            Pages
          </label>
          <input
            type="number"
            name="pages"
            id="pages"
            className="form-control"
          />
          <br />
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
          />
          <br />
          <button className="btn btn-dark">Add</button>
        </form>
        {/* <Link to="/" className="btn btn-dark m-2">Return</Link>  */}
      </div>
    );
  }


export default AddBook;
