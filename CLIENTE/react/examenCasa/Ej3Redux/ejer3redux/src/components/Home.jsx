import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="container text-center mt-1">
        <h1 className="text-center">Reservas</h1>
        <hr />
        <Link to="/reservas" className="btn btn-success">Ver Reservas</Link>
    </div>
  )
}

