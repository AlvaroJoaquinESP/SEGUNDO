import { useEffect, useState } from "react";

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    let url = "https://pixabay.com/api/?key=20446055-86e5aac963e9ed03555d0f343";
    try {
      fetch(url)
        .then((datatype) => datatype.json())
        .then((response) => {
          console.log(response.hits);
          setDatos(response.hits)
        });
    } catch (error) {
      console.log(error.message);
    }
  },[]);

  return (
    <div className="contenedor">
      
        { datos.map((elemento) => {
            return (
                <div key={elemento.id}>
                <h1>{elemento.id}</h1>
                <img src={elemento.webformatURL} alt="una foto" />
                <h3>Vistas: {elemento.views}</h3>
                <h3>Descargas: {elemento.downloads}</h3>
                <h4><a href={elemento.pageURL}>Enlace</a></h4>
                </div>
            )
        }) }
      
    </div>
  );
}

export default App;
