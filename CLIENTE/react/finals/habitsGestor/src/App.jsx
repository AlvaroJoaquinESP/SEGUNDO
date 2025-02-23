import { Route, Routes,Navigate } from "react-router-dom"
import { useReducer } from "react"
import { HabitsList } from "./components/HabitsList"
import AddHabit from "./components/AddHabit"



// datos inciales
const initialState={
    datos:[{dia:1, habito:"Lectura", nivel_cumplimiento: 0},{dia:2, habito:"Lectura", nivel_cumplimiento: 0},{dia:3, habito:"Lectura", nivel_cumplimiento: 0},{dia:4, habito:"Hacer ejercicio", nivel_cumplimiento: 2}]

}

function reducer(state,action){
switch(action.type){
    
case 'delete':
    return { 
      datos: state.datos.filter(elemento => elemento.dia != action.payload)
     }

case 'add':
     return {
      datos : action.payload
     }

    default:
        return state
}

}


function App() {
const [state,dispatch]=useReducer(reducer,initialState)

return (
<Routes>
    <Route path="/" element={<Navigate to="/list" />} />
    <Route path="/list" element={<HabitsList state={state} dispatch={dispatch}/>}/>
    <Route path="/add" element={<AddHabit state={state} dispatch={dispatch}/>}/>
</Routes>

);

}


export default App;

