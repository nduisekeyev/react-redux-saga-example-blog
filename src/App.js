import React from "react";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Singlepost />} />
      </Routes>
    </div>
  );
}

export default App;
