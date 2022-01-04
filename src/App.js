import './App.css';
import JavaScript from './components/JavaScript';
import logo from './assets/img/logo.png';

function App() {
  return (
    <div className="prueba-container">
      <div className='logo'>
        <h1>Prueba técnica</h1>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <JavaScript />
      </div>
    </div>
  );
}

export default App;
