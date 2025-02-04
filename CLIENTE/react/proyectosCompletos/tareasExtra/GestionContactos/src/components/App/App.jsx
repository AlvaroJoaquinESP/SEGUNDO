import { ContactosProvider } from "../../helpers/Contactos";
import FormularioContactos from "../Formulario/FormularioContactos";
import ListaContactos from "../Lista/ListaContactos";

function App() {
  return (
    <ContactosProvider>

      <div className="container">
        <FormularioContactos />
        <ListaContactos />
      </div>

    </ContactosProvider>
  );
}

export default App;
