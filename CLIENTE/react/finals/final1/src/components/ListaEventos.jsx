import { useContext } from "react";
import { EventosContext } from "../helper/Eventos";
import { Link } from "react-router-dom";

const ListaEventos = () => {
  const { datos, deleteEvent } = useContext(EventosContext);

  return (
    <div className="container m-2">
      <div className="row g-4">
        {datos.map((elemento) => {
          return (
            <div className="col-5 border" key={elemento.id}>
              <h1>{elemento.id}</h1>
              <h2>{elemento.titulo}</h2>
              <h2>{elemento.fecha}</h2>
              <h2>{elemento.hora}</h2>
              <h2>{elemento.asistentes}</h2>
              <button
                className="btn btn-danger m-2"
                onClick={() => deleteEvent(elemento.id)}
              >
                Eliminar
              </button> 
              <Link to={`/list/edit/${elemento.id}`} className="btn btn-info" >Editar</Link>
            </div>
          );
        })}
      </div>
      <Link to="/add" className="btn btn-success m-2">
        Añadir
      </Link>
    </div>
  );
};

export default ListaEventos;
