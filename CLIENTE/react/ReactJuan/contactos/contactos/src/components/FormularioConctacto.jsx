import { useContext } from "react";
import { ContactoContext } from "../helpers/ContactoHelper";

function FormularioConctacto() {
  
  const { agregarContacto } = useContext(ContactoContext);
  const recibir = (ev) => {
    ev.preventDefault();
    const nombre = ev.target.nombre.value;
    const telefono = ev.target.telefono.value;
    agregarContacto( nombre, telefono );
  };

  return (
    <form onSubmit={recibir}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input type="text" name="nombre" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input type="tel" name="telefono" className="form-control" />
      </div>

      <input type="submit" value="Enviar" className="btn btn-primary" />
    </form>
  );
}

export default FormularioConctacto;
