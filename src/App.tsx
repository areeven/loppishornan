import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing/Routing";
import NavBar from "./components/navigation/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routing />
      </Router>
    </div>
  );
};

export default App;
