import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
    const [datos, setDatos] = useState([{id:1,titulo:"Evento1", fecha:"2022-12-12", hora:"17:00", ubicacion:"La calle",asistentes:200,},{id:2,titulo:"Evento2", fecha:"2022-12-12", hora:"17:00", ubicacion:"La calle",asistentes:200,},{id:3,titulo:"Evento3", fecha:"2022-12-12", hora:"17:00", ubicacion:"La calle",asistentes:200,},{id:4,titulo:"Evento4", fecha:"2022-12-12", hora:"17:00", ubicacion:"La calle",asistentes:250,}]);
    

    // aqui se pueden agregar mas estados y funciones

    const addEvent = (obj) => {
        setDatos([...datos, obj])
    }

    const deleteEvent = (id) => {
        const nuevo = datos.filter(p=>p.id != id)
        setDatos(nuevo)
    }

    return (
        <EventsContext.Provider value={{datos, setDatos, addEvent, deleteEvent}}>
            {children}
        </EventsContext.Provider>
    )
}


EventsProvider.propTypes = {
 children: PropTypes.node
}
