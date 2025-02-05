import { createContext, useState } from "react";
import Proptypes from "prop-types";
import uuid from "react-uuid";

export const ContactoContext = createContext();

export const ContactoProvider = ({ children }) => {

  const [contactos, setContactos] = useState([]);

  const agregarContacto = (nombre, telefono) => {
    const obj = {
      id: uuid(),
      nombre:  nombre ,
      telefono:  telefono ,
    };
    setContactos([...contactos, obj]);
  };

  const eliminaContacto = (id) => {
    const nuevoArray = contactos.filter((elemento) => elemento.id !== id);
    setContactos(nuevoArray);
  };
  return (
    <ContactoContext.Provider
      value={{ contactos, agregarContacto, eliminaContacto }}
    >
      {children}
    </ContactoContext.Provider>
  );
};

ContactoProvider.propTypes = {
    children: Proptypes.element,
    
    };
