export const traerEventos = () => {
    let datos = localStorage.getItem("eventos");
    
    if(datos) {
        return JSON.parse(datos);
    } else {
        return [];
    }
};

export const guardarEventos = (arrEventos) => {
    const eventoJSON = JSON.stringify(arrEventos);
    localStorage.setItem("eventos", eventoJSON);
};

/*

      *add- state.datos.push(newDatos);
      guardarLibros(state.datos);

      *remove-
      guardarLibros(state.datos);

*/