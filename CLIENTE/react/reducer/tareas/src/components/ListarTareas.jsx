const ListarTareas = (state,dispatch) => {
  return (
    <div className="container m-5">
        <div className="row">
            <div className="col-4">
              { state.tareas.map((elemento) => {
                  return (
                      <div key={elemento.id}>
                      <h1>{elemento.id}</h1>
                      <h2>{elemento.tarea}</h2>
                      <h2>{elemento.limite}</h2>
                      <h3>{elemento.prioridad}</h3>
                      </div>
                  )
              }) }



            </div>


        </div>



    </div>
  )
}

export default ListarTareas