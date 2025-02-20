import { Route, Routes } from "react-router-dom"
import { EventsProvider } from "./helper/Events"

function App() {

  return (

    <EventsProvider>
    <Routes>
      <Route path="/listado" />
    </Routes>
    </EventsProvider>
  )
}

export default App
