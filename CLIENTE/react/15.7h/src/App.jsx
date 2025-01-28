import { useRef } from "react";

function App() {
  const arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const longitud = useRef();
  const resultado = useRef();
  const generar = () => {
    let long = longitud.current.value;
    let contrasenya = "";
    if (long < 4) {
      resultado.current.value = "Mínimo de 4 dígitos";
      longitud.current.value = "";
    } else {
      for (let i = 0; i < long; i++) {
        // Saco las posiciones del array.
        let posicion = Math.round(Math.random() * arr.length - 1);
        // Asigno las posiciones a contraseña hasta la longitud deseada.
        contrasenya += arr[posicion];
      }

      resultado.current.value = contrasenya
      longitud.current.value = "";
    }
  };
  return (
    <main className="container mt-4">
      <label htmlFor="long" className="form-label">
        Longitud
      </label>
      <input
        type="number"
        className="form-control"
        id="long"
        min={4}
        ref={longitud}
      />

      <button className="btn btn-dark" onClick={generar}>
        Generar
      </button>
      <br />
      <input type="text" readOnly ref={resultado} />
    </main>
  );
}

export default App;
