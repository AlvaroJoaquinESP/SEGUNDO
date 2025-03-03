import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeDatos } from "../datosSlice";
const ListaReservas = () => {
  const datos = useSelector((state) => state.datos.datos);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-3">
      <h1 className="text-center">Listado de reservas</h1>
      <hr />
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha Entrada</th>
            <th>Fecha Salida</th>
            <th>Habitación</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((elemento) => {
            return (
              <tr key={elemento.id}>
                <td>{elemento.nombre}</td>
                <td>{elemento.fechaEntrada}</td>
                <td>{elemento.fechaSalida}</td>
                <td>{elemento.habitacion}</td>
                <td>
                <Link to={`/reserva/${elemento.id}`} className="btn btn-warning">Modificar</Link>
                <button className="btn btn-danger mx-1" onClick={() => dispatch(removeDatos(elemento.id))}>Cancelar</button></td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListaReservas;
