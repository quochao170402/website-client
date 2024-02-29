import "./App.css";
import Getter from "./components/Getter";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <h1>Check CICD</h1>
      <Getter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=ahRxhAzyMWI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click vào đây để xem Táo quân 2016
        </a>
      </header>
    </div>
  );
}

export default App;
