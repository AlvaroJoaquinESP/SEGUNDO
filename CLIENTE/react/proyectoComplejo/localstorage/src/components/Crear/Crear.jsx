export const Crear = () => {

  let tareaDOM = tarea.target.value

  const datosObj = (ev) => {    
    ev.preventDefault();
    const obj = {
      tarea : tareaDOM,
      tarea : tareaDOM,


    };
  };
  return (
    <div>
      <form onSubmit={datosObj}>
        <label className="form-label">Tarea</label>
        <input type="text" className="form-control" name="tarea" />
        <label className="form-label">Fecha</label>
        <input type="text" className="form-control" name="fecha" />
        <br />
        <input type="submit" className="btn btn-check" value="Añadir" />
      </form>
    </div>
  );
};
