import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const EventosContext = createContext();

export const EventosProvider = ({ children }) => {
    const [datos, setDatos] = useState([{id:1, titulo:"Hacer la cama", fecha: "hoy", hora: 17, asistentes:200},
        {id:2, titulo:"Hacer la cama", fecha: "pasado", hora: 17, asistentes:2},
        {id:3, titulo:"Ya si eso", fecha: "luego", hora: 16, asistentes:220},
        {id:4, titulo:"fregar", fecha: "nunca", hora: 19, asistentes:2330}
    ]);

    const addEvent = (obj) => {
        setDatos([...datos, obj])
    }

    const deleteEvent = (id) => {
        const nuevo = datos.filter(p => p.id != id)
        setDatos(nuevo)
    }

    const editEvent = (obj) => {
        addEvent(obj)
        deleteEvent(obj.id)
    }
    
    // aqui se pueden agregar mas estados y funciones

    return (
        <EventosContext.Provider value={{datos, setDatos, deleteEvent, addEvent, editEvent}}>
            {children}
        </EventosContext.Provider>
    )
}


EventosProvider.propTypes = {
 children: PropTypes.node
}
