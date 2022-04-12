import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPerson from "./components/AddPerson";
import DetailPerson from "./components/DetailPerson";
import UpdatePerson from "./components/UpdatePerson";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add_person" element={<AddPerson />} />
          <Route path="detail_person/:id" exact element={<DetailPerson />} />
          <Route path="update_person" element={<UpdatePerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
