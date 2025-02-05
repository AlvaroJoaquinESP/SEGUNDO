import PropTypes from "prop-types";

function Listar({ tareas, setTareas }) {
  const eliminar = (id) => {
    const arr2 = tareas.filter((elemento) => elemento.id !== id);
    setTareas(arr2);
    let url = "https://examen-e5714-default-rtdb.firebaseio.com/tareas.json";
    let datosJSON = JSON.stringify(arr2);

    fetch(url, {
      method: "PUT",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((datatype) => datatype.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((elemento, indice) => {
          return (
            <tr key={indice}>
              <td>{elemento.id}</td>
              <td>{elemento.tarea}</td>
              <td>{elemento.fecha}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminar(elemento.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Listar.propTypes = {
  tareas: PropTypes.array,
  setTareas: PropTypes.func,
};
export default Listar;
