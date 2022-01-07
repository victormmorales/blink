import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components:
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import JavaScript from './components/JavaScript';
import ReactJS from './components/ReactJS';
import BotonCss from './components/BotonCss';
import Backend from './components/Backend';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route exact path='/javascript'>
          <NavBar />
          <JavaScript />
          <Footer />
        </Route>
        <Route exact path='/react'>
          <NavBar />
          <ReactJS />
          <Footer />
        </Route>
        <Route exact path='/boton-css'>
          <NavBar />
          <BotonCss />
          <Footer />
        </Route>
        <Route exact path='/backend'>
          <NavBar />
          <Backend />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
