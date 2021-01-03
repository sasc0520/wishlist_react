import React from "react";
import Navbar from "../src/app/components/navBar/NavBar"
import DataFetching from "./app/components/dataFetching/DataFetching";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataFetching />
    </div>
  );
}

export default App;
