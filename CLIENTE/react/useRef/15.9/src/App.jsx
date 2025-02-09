import { useRef, useState } from "react";

function App() {
  const [vinos, setVinos] = useState([]);

  const nameP = useRef("");
  const pvpP = useRef(0);

  const addWine = () => {
    const obj = {
      name: nameP.current.value,
      pvp: pvpP.current.value,
    };

    setVinos([...vinos, obj]);
    console.log(obj);

    nameP.current.value = ""
    pvpP.current.value = ""
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <h2>Formulario para insertar vinos</h2>
        <br />
        <label htmlFor="name" className="form-label">
          Nombre del vino
        </label>
        <input type="text" className="form-control" id="name" ref={nameP} />

        <label htmlFor="pvp" className="form-label">
          PVP
        </label>
        <input type="number" className="form-control" id="pvp" ref={pvpP} />
        <br />
        <button className="btn btn-info" onClick={addWine}>
          Agregar
        </button>
      </div>
      <div className="mt-4">
        <h3>Vinoteca</h3>

        <ul>
          {vinos.map((elemento, indice) => {
              return <li key={indice}>Nombre: {elemento.name} Precio: {elemento.pvp}</li>
          })}



        </ul>




      </div>


    </div>
  );
}

export default App;
