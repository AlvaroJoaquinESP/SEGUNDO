import { Route, Routes } from "react-router-dom"
import { useReducer } from "react"
import AddTarea from "./components/AddTarea"
import ListarTareas from "./components/ListarTareas"

// datos inciales
const initialState={
    datos:[],

}

function reducer(state,action){
switch(action.type){
    
case 'eliminar':
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
    <Route path="/" element={<ListarTareas state={state} dispatch={dispatch}/>}/>
    <Route path="/nuevo" element={<AddTarea state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;