import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";

function Students() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    setLoading(true);

    const response = await getStudents();

    setStudents(response.data);

    setLoading(false);
  };

  const handleDelete = async (id) => {

    await deleteStudent(id);

    loadStudents();
  };

  if (loading) {
    return <h3>Loading students...</h3>;
  }

  return (
    <div>

      <h2>Student List</h2>

      <button onClick={loadStudents}>
        Refresh
      </button>

      {students.map((s) => (
        <div key={s._id}>
          {s.name} - {s.email}

          <button onClick={() => handleDelete(s._id)}>
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default Students;