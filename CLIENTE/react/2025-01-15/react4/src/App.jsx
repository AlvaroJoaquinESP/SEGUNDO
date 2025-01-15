
function App() {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <>
      {/* <ul> ----FORMA CORTA----
        {arr.map((elemento) => {
          return <li>{elemento}</li>
        })}
      </ul> */}
      <ul>
        {arr.map((elemento, indice) => { /*----FORMA LARGA Y RECOMENDABLE----*/ 
          return <li key={indice}>{elemento}</li>
        })}
      </ul>
    </>
  )
}

export default App
