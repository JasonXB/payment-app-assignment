import logo from "./logo.svg";
import { useCustomContext } from "./state-management/context";
import "./App.css";

function App() {
  const a = useCustomContext();
  console.log(a);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo hidden" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
