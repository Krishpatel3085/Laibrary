import "./App.css";
import { Routes, Route } from "react-router-dom";
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

import First from "./Admin/Component/First.jsx";
import PrivateRoute from "./component/User/PrivetRoute.jsx"; // Import the PrivateRoute component
import AdminLogin from "./Admin/AdminLogin/AdminLogin.jsx";
import AdminRegistration from "./Admin/AdminLogin/AdminRegistration.jsx";

function App() {
  return (
    <>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:_id" element={<Details />} />

        {/* admin Login Routes */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminRegistration" element={<AdminRegistration />} />

        {/* Protected Routes */}
          <Route path="/first" element={<First />} />
        <Route element={<PrivateRoute />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
