import { createSlice } from "@reduxjs/toolkit";
import { guardarEventos, traerEventos } from "./service/localService";

const initialState = {
  datos: traerEventos()
};

const datosSlice = createSlice({
  name: "datos",
  initialState,
  reducers: {
    addDatos: (state, action) => {
        const {id, name, lugar, asistentes} = action.payload

      const newDatos = {
        id: id,
        name: name,
        lugar: lugar,
        asistentes: asistentes
      };
      state.datos.push(newDatos);
      guardarEventos(state.datos)
    },
    removeDatos: (state, action) => {
      state.datos = state.datos.filter(
        (datos) => datos.id != action.payload
      );
      guardarEventos(state.datos)
    },
  },
});

export const { addDatos, removeDatos } = datosSlice.actions;
export default datosSlice.reducer;