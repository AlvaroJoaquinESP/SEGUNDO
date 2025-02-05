import Contacto from "./Contacto";
import { useContext } from "react";
import { ContactoContext } from "../helpers/ContactoHelper";


function ListaContactos() {
  const { contactos } = useContext(ContactoContext)


  return (
    <div className="row" >
    
      {contactos.map((elemento, indice) => {
        return (
          
            <div className="col-3 mb-3 rounded" key={indice}>
              <Contacto elemento={elemento} />
            </div>
        );
      })}
    </div>
  );
}



export default ListaContactos;
