import PropTypes from "prop-types";



function GastoItems({ elemento,datos, setDatos}) {

    const Eliminar = (id) => {
    const nuevoArray = datos.filter((elemento) => elemento.id !== id);
    setDatos(nuevoArray);
    }
  return (
    <div className="col-5 rounded border border-dark p-2 m-1">
      <h1>{elemento.id}</h1>
      <h2>{elemento.descripcion}</h2>
      <p><button className="btn btn-danger" onClick={() => Eliminar(elemento.id)}>Eliminar</button></p>
    </div>
  );
}

GastoItems.propTypes = {
  elemento: PropTypes.object,
};

export default GastoItems;
