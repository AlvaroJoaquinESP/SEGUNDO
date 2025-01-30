function App() {
  return (
    <div className="container mb-5 form-control">
      <label htmlFor="nombre" className="form-label">
        Nombre:
      </label>
      <input type="text" id="nombre" className="form-control" />

      <label htmlFor="dni" className="form-label">
        DNI:
      </label>
      <input type="text" id="dni" className="form-control" />

      <label htmlFor="fVacuna" className="form-label">
        Fecha Vacuna:
      </label>
      <input type="date" id="fVacuna" className="form-control" />

      <label htmlFor="fSintoma" className="form-label">
        Fecha Síntoma:
      </label>
      <input type="date" id="fSintoma" className="form-control" />

      <br />
      <label htmlFor="fSintoma" className="form-label">
        Síntomas:
      </label>
      <br />
      <textarea id="" className="text-bg-light"></textarea>
      <br />
      <button className="btn btn-info">Hola</button>
    </div>
  );
}

export default App;
