import { Link } from "react-router-dom"

const Home = ({state, dispatch}) => {
    // console.log(state.productos)
  return (
    <div>Home
        { state.productos.map((elemento, indice) => {
            return (
                <div className="border" key={indice}>
                <h2>{elemento.nombre}</h2>
                <h2>{elemento.pvp}</h2>
                <Link to={`/detalle/${elemento.id}`} className="btn btn-warning" >Detalle</Link>
                </div>
            )
        }) }
    </div>
  )
}

export default Home