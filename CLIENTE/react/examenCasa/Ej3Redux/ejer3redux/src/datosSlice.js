import { createSlice } from "@reduxjs/toolkit";
import { guardarReservas, traerReservas } from "./services/localService";

const initialState = {
  datos: traerReservas()
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
      guardarReservas()
    },
    removeDatos: (state, action) => {
      state.datos = state.datos.filter((datos) => datos.id != action.payload);
      guardarReservas();
    },
  },
});

export const { addDatos, removeDatos } = datosSlice.actions;
export default datosSlice.reducer;
