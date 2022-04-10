import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPerson from "./components/AddPerson";

function App() {
  return (
    <Router>
      <div className="App">
        <p>Deneme Yazısıdır.</p>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add_person" element={<AddPerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
