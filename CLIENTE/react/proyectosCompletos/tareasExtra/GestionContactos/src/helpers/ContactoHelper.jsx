import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ContactosContext = createContext();

export const ContactosProvider = ({ children }) => {
    const [contactos, setContactos] = useState([]);
    
    const addContact = (nombreDOM, telefonoDOM, emailDOM) => {
        
        const contact = {
            id : Date.now(),
            nombre : nombreDOM,
            telefono : telefonoDOM,
            email : emailDOM

        }
        setContactos([...contactos, contact])
    }
    // aqui se pueden agregar mas estados y funciones

    return (
        <ContactosContext.Provider value={{contactos, setContactos, addContact}}>
            {children}
        </ContactosContext.Provider>
    )
}


ContactosProvider.propTypes = {
 children: PropTypes.node
}
