import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datos: [
    { id: 1, tarea: "Interstellar" },
    { id: 2, tarea: "Harry Potter" },
  ],
};

const datosSlice = createSlice({
  name: "datos",
  initialState,
  reducers: {
    addDatos: (state, action) => {
      const newDatos = {
        id: Date.now(),
        name: action.payload,
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