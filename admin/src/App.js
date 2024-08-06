import './App.css';
import Aside from './Component/Aside';
import Main from './Component/Main';

function App() {
  return (
    <div className="App">
      <div className="container-fluid d-flex p-0">
        
          <div >
            <Aside />
          </div>
          <div>
            <Main />
          
        </div>
      </div>


    </div>
  );
}

export default App;
