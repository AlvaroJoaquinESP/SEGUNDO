import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { isbn: 1, name: "Interstellar", pages: 200, author: "Juan"},
    { isbn: 2, name: "Harry Potter", pages: 532, author: "J.K.Rowling"},
    { isbn: 3, name: "Lord of the Rings", pages: 432, author: "Tolkien"}
  ]
};

const datosSlice = createSlice({
  name: "datos",
  initialState,
  reducers: {
    addDatos: (state, action) => {

      /**
       * Cojo la variable name, pages y author de action.payload (DESESTRUCTURACIÓN).
       */
      const {name, pages, author} = action.payload

      const newDatos = {
        isbn: Date.now(),
        /* MAL, ASIGNO EL OBJETO ENTERO (ACTION.PAYLOAD)
        Lo podría hacer con action.payload.parametro, pero como somos unos PROS DE REACT lo vamos a
        desestructurar
         name: action.payload,
         pages: action.payload,
         author: action.payload, */
         name: name,
         pages: pages,
         author: author
      };
      state.books.push(newDatos);
    },
    removeDatos: (state, action) => {
      state.books = state.books.filter(
        (books) => books.isbn != action.payload
      );
    },
  },
});

export const { addDatos, removeDatos } = datosSlice.actions;
export default datosSlice.reducer;