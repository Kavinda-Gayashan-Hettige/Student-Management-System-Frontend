import axios from "axios";
import { useState} from "react";

function Update() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState({
    studentName: "",
    email: "",
    age: "",
    dob: "",
    address: ""
});

  const handleChange = (e) => {
    setStudent({...student, [e.target.name]: e.target.value});
};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/student/update/${id}`, student)
.then(() => alert("Student updated"))
.catch(err => console.error(err));
};


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Student ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input name="studentName" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="dob" placeholder="Date of Birth" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <div className="text-end">
        <hr></hr>
      <button type="submit" className="btn btn-primary">Update Student</button>
    </div>
    </form>
);
}

export default Update;
