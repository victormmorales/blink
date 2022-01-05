import './App.css';
// Components:
import Navbar from './components/Navbar';
import JavaScript from './components/JavaScript';
import ReactJS from './components/ReactJS';
import BotonCss from './components/BotonCss';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <div className="prueba-container">
        <div className='prueba-titulo'>
          <h1>Prueba técnica</h1>
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
