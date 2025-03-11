import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { guardarEventos, traerEventos } from "../service/local";

export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const eventos = traerEventos()
        setDatos(eventos)
    },[])

    const addEvento = (obj) => {
        
    }
    
    // aqui se pueden agregar mas estados y funciones

    return (
        <EventosContext.Provider value={{datos, setDatos, addEvento}}>
            {children}
        </EventosContext.Provider>
    )
}


EventosProvider.propTypes = {
 children: PropTypes.node
}
