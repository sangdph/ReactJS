import logo from './logo.svg';
import './App.css';
// import Car from './Car';
import Xe from './Xe';

function App() {
  const html = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <Xe colorCar='lightgreen' value='Xanh lá cây'/>
        <Xe colorCar='yellow' value='Vàng'/>
        <Xe colorCar='orange' value='Cam' />
      </header>
    </div>
  );
  return html;
}

export default App;
