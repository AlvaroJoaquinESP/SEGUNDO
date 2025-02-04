import { useContext } from "react"
import { ContactosContext } from "../../helpers/Contactos"

const ListaContactos = () => {

    const {contactos} = useContext(ContactosContext)

  return (
    <div >
        { contactos.map((elemento, indice) => {
            return (
                <div key={indice} className="container form-control bg-primary bg-gradient m-3">
                <h1>Id: {elemento.id}</h1>
                <h2>Nombre: {elemento.nombre}</h2>
                <h3>Teléfono: {elemento.telefono}</h3>
                <h3>Email: {elemento.email}</h3>
                </div>
            )
        }) }
    </div>
  )
}

export default ListaContactos