import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/User/Login.jsx";
import Main from "./Main/main.jsx";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
 
  );
}

export default App;
