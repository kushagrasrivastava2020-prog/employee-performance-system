import { useState } from "react";
import API from "../api";

export default function EmployeeForm() {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: ""
  });

  const submit = async () => {

    const data = {
      ...employee,
      skills: employee.skills.split(",")
    };

    await API.post("/api/employees", data);

    alert("Employee Added");
  };

  return (
    <div>

      <h2>Add Employee</h2>

      <input placeholder="Name"
        onChange={(e) =>
          setEmployee({
            ...employee,
            name: e.target.value
          })
        }
      />

      <input placeholder="Email"
        onChange={(e) =>
          setEmployee({
            ...employee,
            email: e.target.value
          })
        }
      />

      <input placeholder="Department"
        onChange={(e) =>
          setEmployee({
            ...employee,
            department: e.target.value
          })
        }
      />

      <input placeholder="Skills"
        onChange={(e) =>
          setEmployee({
            ...employee,
            skills: e.target.value
          })
        }
      />

      <input placeholder="Performance Score"
        onChange={(e) =>
          setEmployee({
            ...employee,
            performanceScore: e.target.value
          })
        }
      />

      <input placeholder="Experience"
        onChange={(e) =>
          setEmployee({
            ...employee,
            experience: e.target.value
          })
        }
      />

      <button onClick={submit}>
        Submit
      </button>

    </div>
  );
}