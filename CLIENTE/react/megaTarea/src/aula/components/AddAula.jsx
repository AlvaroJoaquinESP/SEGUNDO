import { useEffect, useState } from "react";

const AddAula = () => {
  const [aula, setAula] = useState([]);

  useEffect(() => {
    let url = "";
    try {
      fetch(url)
        .then((datatype) => datatype.json())
        .then((response) => {
          console.log(response);
          if (response !== null) {
            setAula(response);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const add = (ev) => {
    ev.preventDefault();
    const obj = {
      id: ev.target.id.value,
      denominacion: ev.target.denominacion.value,
      pabellon: ev.target.pabellon.value,
    };

    const datosJSON = JSON.stringify([...aula, obj]);

    fetch(url, {
      method: "POST",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((datatype) => datatype.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container form-control m-4">
      <form onSubmit={add}>
        <label htmlFor="id" className="form-label">
          ID
        </label>
        <input
          type="text"
          name="id"
          id="id"
          className="form-control"
          required
        />

        <label htmlFor="denominacion" className="form-label">
          Denominación
        </label>
        <input
          type="text"
          name="denominacion"
          id="denominacion"
          className="form-control"
          required
        />

        <label htmlFor="Pabellón" className="form-label">
          Pabellón
        </label>
        <input
          type="text"
          name="Pabellón"
          id="Pabellón"
          className="form-control"
          required
        />

        <button className="btn btn-primary mt-2">Guardar</button>
      </form>
    </div>
  );
};

export default AddAula;
