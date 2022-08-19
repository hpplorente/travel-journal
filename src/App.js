import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./data";

import "./App.css";

function App() {
  const card = data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      {card}
    </div>
  );
}

export default App;
