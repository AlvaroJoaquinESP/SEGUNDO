import { Route, Routes } from 'react-router-dom'
import { EventosProvider } from './helper/Eventos'
import Lista from './components/Lista'

function App() {

  return (
    <EventosProvider>
      <Routes>
        <Route path="/list" element={<Lista />}/>
      </Routes>
      
    </EventosProvider>
  )
}

export default App
