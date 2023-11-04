import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from feature branch!</h1>
        <a href="https://main.d346ryumzun9ji.amplifyapp.com/">go to main</a>
        <a href="https://develop.d346ryumzun9ji.amplifyapp.com/">
          go to develop
        </a>
        <a href="https://release.d346ryumzun9ji.amplifyapp.com/">
          go to release
        </a>
      </header>
    </div>
  );
}

export default App;
