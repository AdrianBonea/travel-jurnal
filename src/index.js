import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppComponent from "./App";

function App() {
  return (
    <div>
      <AppComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
