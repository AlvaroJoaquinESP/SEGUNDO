import PropTypes from "prop-types";
import GastoItems from "./GastoItems";

function RegistroGastos({ datos, setDatos }) {
  const enviarDatos = (e) => {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      descripcion: e.target.descripcion.value,
      monto: e.target.monto.value,
      categoria: e.target.categoria.value,
      fecha: e.target.fecha.value,
    };
    setDatos([...datos, obj]);
  };

  return (
    <div className="container">
      <div className="row">
        {datos.map((elemento, indice) => {
          return <GastoItems elemento={elemento} datos={datos} setDatos={setDatos} key={indice} />;
        })}
      </div>

      <hr />

      <form onSubmit={enviarDatos}>
        <div className="row bg-light ">
          <h2>Registro de gastos</h2>
          <div className="col-6 mt-3">
            <label className="form-label">Descripcion</label>
            <input type="text" className="form-control" name="descripcion" />
          </div>

          <div className="col-6">
            <label className="form-label">Monto</label>
            <input type="number" className="form-control" name="monto" />
          </div>

          <div className="col-6">
            <label className="form-label">Categoria</label>
            <input type="text" className="form-control" name="categoria" />
          </div>

          <div className="col-6">
            <label className="form-label">Fecha</label>
            <input type="date" className="form-control" name="fecha" />
          </div>

          <div className="col-12 mt-3">
            <input type="submit" className="btn btn-primary" value="Agregar" />
          </div>
        </div>
      </form>
    </div>
  );
}

RegistroGastos.propTypes = {
  datos: PropTypes.array,
  setDatos: PropTypes.func,
};

export default RegistroGastos;
