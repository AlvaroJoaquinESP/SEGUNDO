import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datos: [
    { id: 1, name: "Interstellar", autor:"Nolan", year:2014, pages:200 },
    { id: 2, name: "Harry Potter", autor:"Nolan", year:1000, pages:203 }
  ],
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
    },
    removeDatos: (state, action) => {
      state.datos = state.datos.filter(
        (datos) => datos.id != action.payload
      );
    },

    
  },
});

export const { addDatos, removeDatos } = datosSlice.actions;
export default datosSlice.reducer;