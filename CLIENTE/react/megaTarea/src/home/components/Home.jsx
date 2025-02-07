const Home = () => {
  return (
    <div className="container mt-2">
      <h1>Inventario Megatarea</h1>

      <div className="row">
        <div className="col-5 m-3">
          <a href="/aula">
            <img
              src="/react/megaTarea/src/assets/aula.png"
              alt="Aula"
              className="img-fluid"
            />
            <h3>Gestión de aulas</h3>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-5 m-3">
          <a href="/dispositivos">
            <img
              src="/react/megaTarea/src/assets/equipo.webp"
              alt="Aula"
              className="img-fluid"
            />
            <h3>Gestión de dispositivos</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home