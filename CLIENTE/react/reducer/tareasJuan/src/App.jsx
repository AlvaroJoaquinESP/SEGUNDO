import { Route, Routes } from "react-router-dom"
import { useReducer } from "react"
import ListarTareas from "./components/ListarTareas"
import AddTarea from "./components/AddTarea"

// datos inciales
const initialState={
    tareas: [{id:1, tarea:"Limpiar la casa", limite: "mañana", prioridad:"baja"}, {id:2, tarea:"Ensuciar la casa", limite: "pasado", prioridad:"alta"}],
}

function reducer(state,action){
switch(action.type){
    
case 'eliminar':
    return {tareas: state.tareas.filter(p => p.id != action.payload)}

    default:
        return state
}

}


function App() {
const [state,dispatch]=useReducer(reducer,initialState)

return (
<Routes>
    <Route path="/" element={<ListarTareas state={state} dispatch={dispatch}/>}/>
    <Route path="/nuevo" element={<AddTarea state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;