import { useEffect, useState } from 'react'

function App() {
  const [datos, setDatos] = useState([])

  useEffect(() => {
   let url="https://reqres.in/api/users?page=2";
   try {
     fetch(url)
       .then((datatype) => datatype.json())
       .then((response) => {
         console.log(response.data);
         setDatos(response.data);
       });
   } catch (error) {
     console.log(error.message);
   }
   
   

  },[]);

  return (
    <>
   { datos.map((elemento, indice) => {
       return (
           <div key={indice}>
           <h1>{elemento.id}</h1>
           <h2>{elemento.email}</h2>
           </div>
       )
   }) }
    </>
  )
}

export default App
