import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { server } from "./config";

// App is a function component
function App() {
  // data is null initially
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${server}/banana`)
      // TODO: types? res: Response?
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
