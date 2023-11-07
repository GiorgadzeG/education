import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: Giorgi Giorgadze
        </p>
        <p>
          Skills: ewerything, but need time
        </p>
        <a
          className="App-link"
          href="https://github.com/GiorgadzeG/education"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
