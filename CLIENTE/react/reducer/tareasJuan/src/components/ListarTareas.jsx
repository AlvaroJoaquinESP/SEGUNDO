import { Link } from "react-router-dom";

const ListasTareas = ({state, dispatch}) => {
  return (
    <div className="container">
      <div className="row gap-2">

        {state.tareas.map((elemento) => {
          return (
            <div className="col-4 border p-2" key={elemento.id}>
              <h1>{elemento.id}</h1>
              <h2>{elemento.tarea}</h2>
              <h3>{elemento.limite}</h3>
              <h4>{elemento.prioridad}</h4>
              <button className="btn btn-danger m-1" onClick={() => dispatch({type:"eliminar", payload: elemento.id})}>Eliminar</button>
            </div>
          );
        })}
      </div>

      <Link to="/nuevo" className="btn btn-success mt-3">Añadir</Link>
    </div>
  );
};

export default ListasTareas;
