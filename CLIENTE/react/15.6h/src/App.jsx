import { useRef } from "react";

function App() {
  const n1 = useRef(0);
  const n2 = useRef(0);
  const res = useRef(0);

  const sumar = () => {
    let num1 = Number(n1.current.value)
    let num2 = Number(n2.current.value)
    let resultado = num1 + num2

    res.current.value = resultado
    n1.current.value = ""
    n2.current.value = ""
  }

  
  const restar = () => {
    let num1 = Number(n1.current.value)
    let num2 = Number(n2.current.value)
    let resultado = num1 - num2

    res.current.value = resultado
    n1.current.value = ""
    n2.current.value = ""
  }
  
  const multiplicar = () => {
    let num1 = Number(n1.current.value)
    let num2 = Number(n2.current.value)
    let resultado = num1 * num2

    res.current.value = resultado
    n1.current.value = ""
    n2.current.value = ""
  }
  
  const dividir = () => {
    let num1 = Number(n1.current.value)
    let num2 = Number(n2.current.value)
    let resultado = num1 / num2

    res.current.value = resultado
    n1.current.value = ""
    n2.current.value = ""
  }

  const clean = ()=> {
    res.current.value = ""
  }





  return (
    <div className="container mt-5">
      <h1>Aplicación calculadora</h1>
      <label className="form-label" htmlFor="opA">
        Operando A
      </label>
      <input className="form-control" type="number" id="opA" ref={n1} />

      <label className="form-label" htmlFor="opB">
        Operando B
      </label>
      <input className="form-control" type="number" id="opB" ref={n2} />

      <button className="btn btn-primary" onClick={sumar}>+</button>
      <button className="btn btn-secondary" onClick={restar}>-</button>
      <button className="btn btn-danger" onClick={multiplicar}>*</button>
      <button className="btn btn-success" onClick={dividir}>/</button>
      <button className="btn btn-warning" onClick={clean}>C</button>
      <br />

      <label htmlFor="res" className="form-label">
        Resultado
      </label>
      <br />
      <input type="number" id="res" readOnly ref={res} />
    </div>
  );
}

export default App;
