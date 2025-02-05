import Proptypes from "prop-types";
import { useContext } from "react";
import { ContactoContext } from "../helpers/ContactoHelper";

function Contacto({ elemento }) {
  const { eliminaContacto } = useContext(ContactoContext);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{elemento.id}</h5>
        <p className="card-text">{elemento.nombre}</p>
        <p className="card-text">{elemento.telefono}</p>
        <button
          onClick={() => eliminaContacto(elemento.id)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
Contacto.propTypes = {
  elemento: Proptypes.object,
  contactos: Proptypes.array,
  setContactos: Proptypes.array,
};
export default Contacto;
