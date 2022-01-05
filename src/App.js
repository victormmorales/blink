import './App.css';
import logo from './assets/img/logo.png';
// Components:
import JavaScript from './components/JavaScript';
import ReactJS from './components/ReactJS';
import BotonCss from './components/BotonCss';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="prueba-container">
        <div className='logo'>
          <h1>Prueba técnica</h1>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <JavaScript />
          <ReactJS />
          <BotonCss />
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
