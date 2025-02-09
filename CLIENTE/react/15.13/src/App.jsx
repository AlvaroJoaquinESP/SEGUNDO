import { useRef } from "react";
import { useState } from "react";

function App() {
  const [datos, setDatos] = useState([]);

  const term = useRef(null);

  const search = () => {
    let url =
      "https://api.github.com/search/repositories?q=" + term.current.value;
    try {
      fetch(url)
        .then((datatype) => datatype.json())
        .then((response) => {
          console.log(response)
          setDatos(response.items)
        });
    } catch (error) {
      console.log(error.message);
      
    }
  };

  return (
    <div>
      <h1>Search Repositorys on GitHub</h1>
      <label htmlFor="term">Repository: </label>
      <input type="text" name="term" id="term" ref={term} />
      <hr />
      <button onClick={search}>Search</button>

      <div className="contenedor">
          { datos.map((elemento) => {
              return (
                  <div key={elemento.id}>
                  <h2>{elemento.name}</h2>
                  <p>{elemento.description}</p>
                  <h3>{elemento.stargazers_count}</h3>
                  <a href={elemento.html_url}>Repository</a>
                  </div>
              )
          }) }


      </div>
        
   
    </div>

  );
}

export default App;
