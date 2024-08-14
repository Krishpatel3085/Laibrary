import "./App.css";
import {   Routes, Route,  } from "react-router-dom";
import Login from "./component/User/Login.jsx";
import About from "./component/About/About.jsx";
import Event from "./component/Event/Event.jsx";
import Details from "./component/FullBook/Details.jsx";
import Home from "./component/Home/Home.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Checkout from "./component/Checkout/Checkout.jsx";
import Blog from "./component/blog/Blog.jsx";
import Team from "./component/Team/Team.jsx";
import Shop from "./component/Shop/Shop.jsx";
import Registration from "./component/User/Registration.jsx";


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/details/:_id" element={<Details />} />
    </Routes>

  );
}

export default App;
