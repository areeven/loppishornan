import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
