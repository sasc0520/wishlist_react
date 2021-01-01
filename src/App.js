import Navbar from "../src/app/components/navBar/NavBar"
import './App.css';
import DataFetching from "./app/components/dataFetching/DataFetching";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataFetching />
    </div>
  );
}

export default App;
