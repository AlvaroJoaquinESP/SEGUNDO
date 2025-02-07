import { useState } from "react";

const Aula = () => {
  const [aula] = useState([]);





  return (
    <div className="container mt-2">
        <h2>Gestión de Aulas</h2>
        <hr />
        <a href="aula/add"><button className="btn btn-success">Agregar</button></a>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Denominación</th>
            <th>Pabellón</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {aula.map((elemento, indice) => {
            return (
              <tr key={indice}>
                <td>{elemento.denominacion}</td>
                <td>{elemento.pabellon}</td>

                <td>
                  <button className="btn btn-primary m-2">Editar</button>
                  <button className="btn btn-danger  m-2">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Aula;
