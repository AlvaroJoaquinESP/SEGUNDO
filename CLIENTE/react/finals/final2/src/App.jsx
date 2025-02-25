import { Route, Routes, Navigate } from "react-router-dom"
import { useReducer } from "react"
import ListaHabitos from "./components/ListaHabitos"
import Add from "./components/Add"

// datos inciales
const initialState={
    coches:[{id:1, marca:"Toyota", year:2000, color:"Rojo"},{id:2, marca:"Peugeot", year:2001, color:"Verde"},{id:3, marca:"Nissan", year:2003, color:"Azul"}]
}


function reducer(state,action){
switch(action.type){
    
case 'eliminar':
    return {
      coches : state.coches.filter(p=>p.id != action.payload)
    }

case 'add':
    return {
      coches : action.payload
    }

    default:
        return state
}

}


function App() {
const [state,dispatch]=useReducer(reducer,initialState)

return (
<Routes>
    <Route path="/" element={<Navigate to="/list"/>}/>
    <Route path="/list" element={<ListaHabitos state={state} dispatch={dispatch}/>}/>
    <Route path="/add" element={<Add state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;