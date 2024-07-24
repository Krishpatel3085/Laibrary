import "./App.css";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2  p-0 aside ">
          <Aside />
        </div>
        <div className="col-md-10  Main">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
