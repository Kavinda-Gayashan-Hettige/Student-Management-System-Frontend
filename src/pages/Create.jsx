import axios from "axios";
import { useState} from "react";

function Create() {
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
    axios.post("http://localhost:8080/add", student)
.then(() => alert("Student added successfully"))
.catch(err => console.error(err));
};

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentName" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="dob" placeholder="Date of Birth" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <div className="text-end">
        <hr></hr>
      <button type="submit" className="btn btn-success mt-3">Add Student's Details</button>
      </div>
    </form>
);
}

export default Create;



