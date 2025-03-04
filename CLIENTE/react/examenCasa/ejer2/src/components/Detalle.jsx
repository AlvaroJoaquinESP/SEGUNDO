import { useParams } from "react-router-dom"

const Detalle = ({state, dispatch}) => {
    const {id} = useParams()
    const detalle = state.productos.find((p)=> p.id == id)
  


    const enviarCarrito =() => {
        const obj = {

        }

        dispatch({type: "addCarrito", payload: id})

    }
    return (
    <div>
        <h1>{detalle.nombre}</h1>
        <h1>{detalle.pvp}</h1>
        <h1>{detalle.descripcion}</h1>
        <button onClick={() => enviarCarrito()}></button>
    
    </div>
  )
}

export default Detalle