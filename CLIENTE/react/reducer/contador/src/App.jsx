import { useReducer } from "react"

// datos inciales
const initialState = 0

function reducer(state,action){
switch(action.type){
    
case 'suma':
    return state + 1

case 'resta' :
    return  state - 1

default:
        return state
}

}


function App() {
const [state,dispatch]=useReducer(reducer,initialState)

return (
<>
  <h1>{state}</h1>
  <button onClick={() => dispatch({type : 'suma'})}>Sumar</button>
  <button onClick={() => dispatch({type : 'resta'})}>Restar</button>
</>
);

}

export default App;