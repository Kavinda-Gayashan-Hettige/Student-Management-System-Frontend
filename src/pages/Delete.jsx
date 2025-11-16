import axios from "axios";
import { useState } from "react";

function Delete() {
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8080/student/delete/${id}`)
      .then(() => alert("Student Deleted Successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button type="submit" className="btn btn-danger">Delete</button>
    </form>
  );
}

export default Delete;
