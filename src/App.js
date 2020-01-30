import React from "react";
import "./styles/App.css";
import ProjectList from "./components/ProjectList";
// import NavBar from "./components/NavBar";
// import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <ProjectList />
    </div>
  );
}

export default App;
