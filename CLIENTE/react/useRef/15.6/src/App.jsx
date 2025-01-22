import { useRef } from "react";


function App() {
  const num1 = useRef(0);
  const num2 = useRef(0);
  const resultado = useRef(0);

  const sumar = () => {
    let n1 = Number(num1.current.value)
    let n2 = Number(num2.current.value)
    let res = n1 + n2

    console.log(res)
    resultado.current.value = res

    num1.current.value = ""
    num2.current.value = ""
  }

  const restar = () => {
    let n1 = Number(num1.current.value)
    let n2 = Number(num2.current.value)
    let res = n1 - n2
    
    console.log(res)
    resultado.current.value = res

    num1.current.value = ""
    num2.current.value = ""
  }

  const multiplicar = () => {
    let n1 = Number(num1.current.value)
    let n2 = Number(num2.current.value)
    let res = n1 * n2
    
    console.log(res)
    resultado.current.value = res

    num1.current.value = ""
    num2.current.value = ""
  }

  const dividir = () => {
    let n1 = Number(num1.current.value)
    let n2 = Number(num2.current.value)
    let res = n1 / n2
    
    console.log(res)
    resultado.current.value = res

    num1.current.value = ""
    num2.current.value = ""
  }

  const limpiar = () => {
    resultado.current.value = ""
  }

  return (
    <div className="container mt-5">
      <h1>Calculadora</h1>

      <label className="form-label">Número 1</label>
      <input className="form-control" type="number" ref={num1}/>

      <label className="form-label">Número 2</label>
      <input className="form-control" type="number" ref={num2}/>

      <button className="btn btn-primary m-3" onClick={sumar}>+</button>
      <button className="btn btn-secondary m-3" onClick={restar}>-</button>
      <button className="btn btn-danger m-3" onClick={multiplicar}>*</button>
      <button className="btn btn-success m-3" onClick={dividir}>/</button>
      <button className="btn btn-success m-3" onClick={limpiar}>C</button>
      <br />

    <label className="form-label">Resultado</label>
    <input type="number" className="form-control" readOnly ref={resultado}/>
    </div>
  );
}

export default App;
