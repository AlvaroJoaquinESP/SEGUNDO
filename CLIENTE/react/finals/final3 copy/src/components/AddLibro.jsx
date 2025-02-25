import { useDispatch} from "react-redux";
import { addDatos } from "../datosSlice";
import { Link } from "react-router-dom";

function AddLibro() {
    const dispatch = useDispatch();

    const recibir = ev => {
        ev.preventDefault()

        const obj = {
            name: ev.target.name.value,
            autor: ev.target.autor.value,
            year: ev.target.year.value,
            pages: ev.target.pages.value,
            
        }
        dispatch(addDatos(obj))
    }


  return (
        <div className="container m-2">
            <h1 className="text-center bg-info rounded-2">INSERTE UN LIBRO</h1>
            <form className="form-control" onSubmit={recibir}>
                <label htmlFor="name" className="form-label">Titulo</label>
                <input type="text" name="name" id="name" className="form-control" />
                <br />
                <label htmlFor="autor" className="form-label">Autor</label>
                <input type="text" name="autor" id="autor" className="form-control" />
                <br />
                <label htmlFor="year" className="form-label">Year</label>
                <input type="date" name="year" id="year" className="form-control" />
                <br />
                <label htmlFor="pages" className="form-label">Páginas</label>
                <input type="text" name="pages" id="pages" className="form-control" />
                <br />
                <button className="btn btn-success">Enviar</button>

            </form>

            <Link to="/" className="btn btn-info m-2">Listado</Link>

        </div>
  )
}

export default AddLibro