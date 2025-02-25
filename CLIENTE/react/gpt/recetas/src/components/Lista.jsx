import { useContext } from "react"
import { RecetasContext } from "../helper/Recetas"

const Lista = () => {

    const {datos} = useContext(RecetasContext)

  return (
    <div>
        { datos.map((elemento, indice) => {
            return (
                <div key={indice}>
                <h1>{elemento.id}</h1>
                <h2>{elemento.}</h2>
                </div>
            )
        }) }
    </div>
  )
}

export default Lista