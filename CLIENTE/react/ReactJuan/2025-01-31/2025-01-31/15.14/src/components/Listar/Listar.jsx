import PropTypes from 'prop-types';

function Listar({tareas}) {


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
        { tareas.map((elemento, indice) => {
        return (
          <tr key={indice}>
            <td>{elemento.id}</td>
            <td>{elemento.tarea}</td>
            <td>{elemento.fecha}</td>
          </tr>  
          
    
    ) }) }
    </tbody>
    </table>
    ) 

} 




Listar.propTypes = {
    tareas: PropTypes.array
}
export default Listar

