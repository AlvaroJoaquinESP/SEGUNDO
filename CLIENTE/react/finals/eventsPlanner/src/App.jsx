import { Navigate, Route, Routes } from "react-router-dom";
import { EventsProvider } from "./helper/Events";
import EventsList from "./components/EventsList";
import AddEvent from "./components/AddEvent";
import Home from "./components/Home";
import EditEvent from "./components/EditEvent";

function App() {
  return (
    <EventsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/list" element={<EventsList />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/list/edit/:id" element={<EditEvent/>} />
      </Routes>
    </EventsProvider>
  );
}

export default App;
