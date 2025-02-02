import { PropTypes } from "prop-types";
const Listar = ({ tareas }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((elemento, indice) => {
          return (
            <tr key={indice}>
              <td>{elemento.id}</td>
              <td>{elemento.tarea}</td>
              <td>{elemento.fecha}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Con esto digo de que tipo son los props que recibe el componente.
Listar.propTypes = {
  tareas: PropTypes.array,
};

export default Listar;
