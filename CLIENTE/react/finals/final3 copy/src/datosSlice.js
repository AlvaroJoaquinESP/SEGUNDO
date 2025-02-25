import { createSlice } from "@reduxjs/toolkit";
import { guardarLibros, traerLibros } from "./services/local";

const initialState = {
  datos : traerLibros()
};

const datosSlice = createSlice({
  name: "datos",
  initialState,
  reducers: {
    addDatos: (state, action) => {
        const {name, autor, year, pages} = action.payload

      const newDatos = {
        id: Date.now(),
        name: name,
        autor: autor,
        year: year,
        pages: pages,
      };
      state.datos.push(newDatos);
      guardarLibros(state.datos)
    },
    removeDatos: (state, action) => {
      state.datos = state.datos.filter(
        (datos) => datos.id != action.payload
      );
      guardarLibros(state.datos)
    },

    
  },
});

export const { addDatos, removeDatos } = datosSlice.actions;
export default datosSlice.reducer;