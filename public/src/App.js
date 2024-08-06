import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/User/Login.jsx";
import About from "./component/About/About.jsx";
import Event from "./component/Event/Event.jsx";
import Details from "./component/FullBook/Details.jsx";
import Home from "./component/Home/Home.jsx";
import Contact from "./component/Contact/Contact.jsx";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/details/:_id" element={<Details />} />
    </Routes>

  );
}

export default App;
