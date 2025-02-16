import { Route, Routes } from "react-router-dom"
import { useReducer } from "react"
import ListarTareas from "./components/ListarTareas"

// datos inciales
const initialState={
    tareas: [],
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
    <Route path="/" element={<ListarTareas state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;