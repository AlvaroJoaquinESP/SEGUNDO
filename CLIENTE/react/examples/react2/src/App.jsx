import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Fragment } from "react";

function App() {
  let nombre = "Álvaro";
  return (
    <Fragment> (ya lo importa directamente. Tambien se puede poner con fragmentos vacios)
      <h1>Hola Mundo en React!!!</h1>
      <h2>Mi nombre es: {nombre}</h2>
      <button className="btn btn-primary">Click me</button>
    </Fragment>
  );
}

export default App;
