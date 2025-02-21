import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container mt-1">
        <h1 className="text-bg-success text-center rounded-2" >Welcome to Alvaro Events</h1>
        <h2 className="text-center">Would you like to make an event with us?</h2>
        <hr />
        <nav className="nav-link">
            <ul className="text-center">
                <Link to="/add">
                <button className="btn btn-primary m-2">Add Yours</button>
                </Link>
                <Link to="/list">
                <button className="btn btn-primary m-2">See Our Events</button>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Home