import { useEffect, useState } from "react";
import API from "../api";

export default function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {

    const res = await API.get("/api/employees");

    setEmployees(res.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>

      <h2>Employees</h2>

      {
        employees.map((emp) => (

          <div key={emp._id}
            style={{
              border: "1px solid black",
              margin: 10,
              padding: 10
            }}
          >

            <h3>{emp.name}</h3>

            <p>{emp.email}</p>

            <p>{emp.department}</p>

            <p>{emp.skills.join(", ")}</p>

            <p>Score: {emp.performanceScore}</p>

          </div>
        ))
      }

    </div>
  );
}