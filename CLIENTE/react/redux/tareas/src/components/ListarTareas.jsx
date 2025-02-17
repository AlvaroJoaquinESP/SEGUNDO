import {useSelector } from "react-redux";

function ListarTareas() {
    const datos = useSelector((state) => state.datos.datos);
  return (
        <div className="container">
            { datos.map((elemento) => {
                return (
                    <div key={elemento.id}>
                    <h1>{elemento.id}</h1>
                    <h2>{elemento.tarea}</h2>
                    </div>
                )
            }) }



        </div>
  )
}

export default ListarTareas