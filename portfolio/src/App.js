import logo from './logo.svg';
import './App.css';
import { garage } from './Components/garage';
import { house } from './Components/house';
import { kite } from './Components/kite';
import { tree } from './Components/tree';

function App() {
  return (
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
        <p>{garage}</p>
      <p>{house}</p>
      <p>{kite}</p>
      <p>{tree}</p>
      </header>
      
    </div>
  );
}

export default App;
