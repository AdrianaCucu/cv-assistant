import React, { useState, useEffect } from "react";
import "./App.css";

import { server } from "./config";

// App is a function component
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${server}/banana`)
      // TODO: types? res: Response?
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="container mx-auto">
      <header className="text-3xl font-bold">
        Hello there
      </header>
      <p className="text-lg">
          {!data ? "Loading..." : data}
        </p>
    </div>
  );
}

export default App;
