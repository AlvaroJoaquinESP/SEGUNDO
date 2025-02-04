import { useContext } from "react"
import { ContactosContext } from "../../helpers/Contactos"

const FormularioContactos = () => {

    const {addContact} = useContext(ContactosContext)

    const createContact = e => {
        e.preventDefault()

        addContact(e.target.nombre.value, e.target.tel.value, e.target.email.value)
    }

  return (
    <div className="container m-5 form-control bg-light p-3">
        <form onSubmit={createContact}>
            <h2>Introduce a new contact</h2>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" name="nombre" id="nombre" className="form-control mb-2" />
            
            <label htmlFor="tel" className="form-label">Teléfono</label>
            <input type="tel" name="tel" id="tel" className="form-control mb-2" />
            
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className="form-control mb-2" />

            <button className="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

export default FormularioContactos