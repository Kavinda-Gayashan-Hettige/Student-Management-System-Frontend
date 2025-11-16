
import axios from "axios";
import { useEffect, useState} from "react";

function Read() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/student/all")
.then(res => setStudents(res.data))
.catch(err => console.error(err));
}, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student List</h2>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.length> 0? (
            students.map((student) => (
              <tr key={student.studentID}>
                <td>{student.studentID}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.dob}</td>
                <td>{student.address}</td>
              </tr>
))
): (
            <tr>
              <td colSpan="6" className="text-center">No students found</td>
            </tr>
)}
        </tbody>
      </table>
    </div>
);
}

export default Read;







