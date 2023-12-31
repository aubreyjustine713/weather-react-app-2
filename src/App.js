import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded with 🖤 by{" "}
          <a
            href="https://www.linkedin.com/in/aubreyjamison713/"
            target="_blank"
            rel="noreferrer"
          >
            Aubrey Jamison
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aubreyjustine713/weather-react-app-2"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
