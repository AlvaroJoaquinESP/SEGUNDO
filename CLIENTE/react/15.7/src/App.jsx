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

  const n = useRef();
  const resultado = useRef();
  const generar = () => {
    let n2 = n.current.value;
    let contrasenia = "";
    if (n2 < 4) {
      resultado.current.value = "La longitud debe de ser mayor a 4";
      n.current.value = "";
    } else {
      for (let i = 0; i < n2; i++) {
        // devuelve la posición del array.
        let pass = Math.round(Math.random() * arr.length - 1);
        // le da el valor de esa posición.
        contrasenia += arr[pass];
      }

      resultado.current.value = contrasenia;
      n.current.value = "";
    }
  };

  return (
    <div className="container mt-5">
      <h1>Generador de contraseñas</h1>
      <label className="form-label mt-3">Longitud de la contraseña</label>
      <input type="number" className="form-control" min={4} ref={n} />

      <button className="btn btn-danger mt-5" onClick={generar}>
        Generar
      </button>

      <input
        type="text"
        className="form-control mt-5 "
        readOnly
        ref={resultado}
      />
    </div>
  );
}

export default App;
