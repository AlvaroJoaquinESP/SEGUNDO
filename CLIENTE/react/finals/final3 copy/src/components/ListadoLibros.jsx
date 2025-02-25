import { useDispatch, useSelector } from "react-redux";
import { removeDatos } from "../datosSlice";
import { Link } from "react-router-dom";

function ListadoLibros() {
    const datos = useSelector((state) => state.datos.datos);
    const dispatch = useDispatch();
  return (
        <div className="container m-2">
            <div className="row g-2">
            { datos.map((elemento) => {
                return (
                    <div  className="col-4 border" key={elemento.id}>
                    <h1>{elemento.id}</h1>
                    <h2>{elemento.name}</h2>
                    <h2>{elemento.autor}</h2>
                    <h2>{elemento.year}</h2>
                    <h2>{elemento.pages}</h2>
                    <button className="btn btn-danger" onClick={() => dispatch(removeDatos(elemento.id))}>Eliminar</button>
                    </div>
                )
            }) }
            </div>
            <Link to="/add" className="btn btn-info m-2">Añadir</Link>
        </div>
  )
}

export default ListadoLibros