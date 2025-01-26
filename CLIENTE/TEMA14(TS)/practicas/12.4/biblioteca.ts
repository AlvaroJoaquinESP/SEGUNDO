import { Libro } from "./libro";

let biblioteca: Libro[] = [];
let l1 = new Libro();
let l2 = new Libro();
let l3 = new Libro();

biblioteca.push(l1);
biblioteca.push(l2);
biblioteca.push(l3);

const librosAutor = (autor: string) => {
  for (const element of biblioteca) {
    if (element.autor == autor) {
      element.mostrarLibro();
    }
  }
};

const librosPrestados = () => {
  for (const element of biblioteca) {
    if (element.ejemplaresPrestados > 0) {
      element.mostrarLibro();
    }
  }
};

librosAutor("Juan Ferrer");
librosPrestados();
