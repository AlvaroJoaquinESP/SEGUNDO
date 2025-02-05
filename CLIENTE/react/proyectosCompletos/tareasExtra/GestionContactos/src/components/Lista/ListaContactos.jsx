import { useContext } from "react";
import { ContactosContext } from "../../helpers/ContactoHelper.jsx";
import { ContactoComponent } from "../Contacto/ContactoComponent.jsx"
const ListaContactos = () => {
  const { contactos } = useContext(ContactosContext);

  return (
    <div>
      {contactos.map((elemento, indice) => {
        return (
          <ContactoComponent
            key={indice} obj={elemento}
            className="container form-control bg-primary bg-gradient m-3"
          />
        );
      })}
    </div>
  );
};

export default ListaContactos;
