import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addDatos } from "../datosSlice";

function Add() {
  const datos = useSelector((state) => state.datos.datos);
  const dispatch = useDispatch();


  const recibir = ev => {
    ev.preventDefault()

    const obj = {
        id: Date.now(),
        name: ev.target.name.value,
        lugar: ev.target.lugar.value,
        asistentes: Number(ev.target.asistentes.value)
    }
    dispatch(addDatos(obj))
  }
  return (
    <div className="container m-1">

      <form className="form-control" onClick={recibir}>
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" name="name" id="name" className="form-control" />

        <label htmlFor="lugar" className="form-label">
          Lugar
        </label>
        <input type="text" name="lugar" id="lugar" className="form-control" />

        <label htmlFor="asistentes" className="form-label">
          Asistentes
        </label>
        <input
          type="number"
          name="asistentes"
          id="asistentes"
          className="form-control"
        />
        <button className="btn btn-dark">Añadir</button>
      </form>
      <Link to="/list" className="btn btn-secondary">Listado</Link>
    </div>
  );
}

export default Add;
