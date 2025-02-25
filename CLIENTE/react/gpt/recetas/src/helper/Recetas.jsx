import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const RecetasContext = createContext();

export const RecetasProvider = ({ children }) => {
    const [datos, setDatos] = useState([]);
    
    // aqui se pueden agregar mas estados y funciones

    return (
        <RecetasContext.Provider value={{datos, setDatos}}>
            {children}
        </RecetasContext.Provider>
    )
}


RecetasProvider.propTypes = {
 children: PropTypes.node
}
