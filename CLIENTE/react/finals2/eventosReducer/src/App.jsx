import { Route, Routes, Navigate } from "react-router-dom"
import { useReducer } from "react"
import  Lista  from "./components/Lista";
import  Add  from "./components/Add";
import  Editar  from "./components/Editar";
import { guardarEventos, traerEventos } from "./service/localService";
import { useEffect } from "react";

// datos inciales
const initialState = {
    datos : traerEventos()
}


function reducer(state,action){
switch(action.type){
    
case 'add':
    return {
      datos : [...state.datos, action.payload]
    }

    case 'delete':
    return {
      datos : state.datos.filter(p => p.id != action.payload)
    }
    default:
        return state
}

}

function App() {
const [state,dispatch]=useReducer(reducer,initialState)

useEffect(() => {
  guardarEventos(state.datos)
},[state.datos])




return (
<Routes>
    <Route path="/" element={<Navigate to="/add"/>}/>
    <Route path="/add" element={<Add state={state} dispatch={dispatch}/>}/>
    <Route path="/list" element={<Lista state={state} dispatch={dispatch}/>}/>
    <Route path="/edit/:id" element={<Editar state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;