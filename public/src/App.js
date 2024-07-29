import './App.css';
import Footer from './component/footer/Footer';
import FullBook from './component/FullBook/FullBook';
import Home from './component/main/Home';
import NavBar from './component/NavBar/Nav';
// import Login from './component/User/Login';
// import Registration from './component/User/Registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';


function App() {


  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <FullBook />
      {/* <Registration/> */}
      {/* <Login/> */}

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/image-detail" component={FullBook} />
        </Switch>
      </Router>,
    </>
  );
}

export default App;
