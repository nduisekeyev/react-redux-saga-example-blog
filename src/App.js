import React from "react";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/:id" exact component={() => <Singlepost />} />
      </Routes>
    </div>
  );
}

export default App;
