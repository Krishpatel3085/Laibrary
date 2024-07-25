import "./App.css";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2  p-0 aside  w-20 ">
          <Aside />
        </div>
        <div className="col-md-10  Main w-80">
          <Main />
        </div>
      </div>
    </div>


  );
}

export default App;
