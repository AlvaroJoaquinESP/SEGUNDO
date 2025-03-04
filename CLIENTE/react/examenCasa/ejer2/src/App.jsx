import { Route, Routes } from "react-router-dom"
import { useReducer } from "react"
import Home from "./components/Home"
import Detalle from "./components/Detalle"

// datos inciales
const initialState = {
    datos : [],
    productos: [{id:1, nombre:"placa base", pvp: 213, descripcion:"ASDFasdf"},
      {id:2, nombre:"procesador", pvp: 213, descripcion:"ASDFasdf"},{id:3, nombre:"micro", pvp: 213, descripcion:"ASDFasdf"}
    ]
}

function reducer(state,action){
switch(action.type){
    
case '':
    return {

    }

    default:
        return state
}

}


function App() {
const [state,dispatch]=useReducer(reducer,initialState)

return (
<Routes>
    <Route path="/" element={<Home state={state} dispatch={dispatch}/>}/>
    <Route path="/detalle/:id" element={<Detalle state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;