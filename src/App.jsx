
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Delete from "./pages/Delete";
import Update from "./pages/Update";



function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5 pt-5">
        <Routes>
          <Route path="/" element={<h1 class="bg-danger text-white p-3">Student Management System</h1>} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
);
}

export default App;
