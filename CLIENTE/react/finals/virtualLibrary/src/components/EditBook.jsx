import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { editDatos } from "../datosSlice";

function EditBook() {
  const datos = useSelector((state) => state.datos.books);
  const dispatch = useDispatch();

  const { isbn } = useParams();
  const book = datos.find((p) => p.isbn == Number(isbn));
  console.log(book);

  const {name, pages, author} = book
 
  const edit = ev => {
    ev.preventDefault()
    const obj = {
        name: ev.target.name.value,
        pages: Number(ev.target.pages.value),
        author: ev.target.author.value,
      };
    //   dispatch(editDatos(obj))
  }

  return (
    <div className="containe m-1">
      <h1 className="text-center bg-info rounded-3">EDITING BOOK</h1>
      <form className="form-control" onSubmit={edit}>
        <label htmlFor="name" className="form-label">
          Title
        </label>
        <input type="text" name="name" id="name" className="form-control" defaultValue={name} readOnly/>
        <br />
        <label htmlFor="pages" className="form-label">
          Pages
        </label>
        <input type="number" name="pages" id="pages" className="form-control" defaultValue={pages}/>
        <br />
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input type="text" name="author" id="author" className="form-control" defaultValue={author}/>
        <br />
        <button className="btn btn-dark">Add</button>
      </form>
    </div>
  );
}

export default EditBook;
