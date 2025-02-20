import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container mt-1">
        <h1 className="text-bg-success text-center" >Welcome to Alvaro Events</h1>
        <h2 className="text-center">Would you like to make an event with us?</h2>
        <hr />
        <nav className="nav-link">
            <ul className="text-center">
                <Link to="/add">
                <button className="btn btn-primary m-2">Add</button>
                </Link>
                <Link to="/list">
                <button className="btn btn-primary m-2">Ver Eventos</button>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Home