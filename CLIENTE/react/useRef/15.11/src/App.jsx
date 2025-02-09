import { useState, useRef } from "react";
import "./bg.css";

function App() {
  const nombreDOM = useRef();
  const dniDOM = useRef();
  const fechaVacunaDOM = useRef();
  const fechaSintomaDOM = useRef();
  const sintomasDOM = useRef();

  const [listaEspera, setListaEspera] = useState([]);

  const insertar = () => {
    const paciente = {
      nombre: nombreDOM.current.value,
      dni: dniDOM.current.value,
      fechaVacuna: fechaVacunaDOM.current.value,
      fechaSintoma: fechaSintomaDOM.current.value,
      sintomas: sintomasDOM.current.value,
    };

    setListaEspera([...listaEspera, paciente]);
  };

  return (
    <div className="bg">
      <div className="container m-5 form-control">
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          ref={nombreDOM}
        />

        <label htmlFor="dni" className="form-label">
          DNI:
        </label>
        <input type="text" name="dni" className="form-control" ref={dniDOM} />

        <label htmlFor="fVacuna" className="form-label">
          Fecha Vacuna:
        </label>
        <input
          type="date"
          name="fVacuna"
          className="form-control"
          ref={fechaVacunaDOM}
        />

        <label htmlFor="fSintoma" className="form-label">
          Fecha Síntoma:
        </label>
        <input
          type="date"
          name="fSintoma"
          className="form-control"
          ref={fechaSintomaDOM}
        />

        <br />
        <label htmlFor="fSintoma" className="form-label">
          Síntomas:
        </label>
        <br />
        <textarea
          name="sintomas"
          className="text-bg-light"
          ref={sintomasDOM}
        ></textarea>
        <br />
        <button className="btn btn-info" onClick={insertar}>
          Hola
        </button>
      </div>

      <div className="m-5 bg-bg-light form-control">
        {listaEspera.map((elemento, indice) => {
          return (
            <div key={indice}>
              Nombre: {elemento.nombre} <br />
              DNI: {elemento.dni} <br />
              Fecha Vacunación: {elemento.fechaVacuna} <br />
              Fecha Síntomas: {elemento.fechaSintoma} <br />
              Síntomas: {elemento.sintomas} <hr/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
