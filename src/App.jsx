
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar";



function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5 pt-5">
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/create" element={<h2>Create Student</h2>} />
          <Route path="/read" element={<h2>Read Students</h2>} />
          <Route path="/update" element={<h2>Update Student</h2>} />
          <Route path="/delete" element={<h2>Delete Student</h2>} />
        </Routes>
      </div>
    </Router>
);
}

export default App;
