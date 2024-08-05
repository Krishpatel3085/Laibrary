import './App.css';
import Aside from './Component/Aside';
import Main from './Component/Main';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row p-0 ">
          <div className="col-md-2 p-0">
            <Aside />
          </div>
          <div className="col-md-10">
            <Main />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
