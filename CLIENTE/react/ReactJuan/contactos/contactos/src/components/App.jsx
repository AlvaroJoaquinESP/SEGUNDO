import { ContactoProvider } from "../helpers/ContactoHelper";
import FormularioConctacto from "./FormularioConctacto";
import ListaContactos from "./ListaContactos";

function App() {

  return (
    <ContactoProvider>
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          <ListaContactos/>
        </div>

        <div className="col-4 bg-light">
          <FormularioConctacto />
        </div>
      </div>
    </div>
    </ContactoProvider>
  );
}

export default App;
