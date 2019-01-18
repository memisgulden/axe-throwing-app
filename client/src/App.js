import React  from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Game from "./components/Game";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/game" component={Game} />
      </div>
    </Router>
  );
}
export default App;
