import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { ProjectListScreen } from "./screens/project-list/index";
import { LoginScreen } from "screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      {/* <ProjectListScreen></ProjectListScreen> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
