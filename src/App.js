import React from "react";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/pages/Portfolio";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Portfolio />
    </div>
  );
};

export default App;
