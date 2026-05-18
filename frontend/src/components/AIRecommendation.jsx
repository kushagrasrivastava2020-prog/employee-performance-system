import { useEffect, useState } from "react";
import API from "../api";

export default function AIRecommendation() {

  const [employees, setEmployees] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {

    try {

      const res = await API.get("/api/employees");

      console.log(res.data);

      setEmployees(res.data);

    } catch (err) {

      console.log(err);

      alert("Error fetching employees");
    }
  };

  const analyze = async (employee) => {

    try {

      const res = await API.post(
        "/api/ai/recommend",
        employee
      );

      setResult(res.data.recommendation);

    } catch (err) {

      console.log(err);

      alert("AI Error");
    }
  };

  return (
    <div>

      <h2>AI Recommendation</h2>

      {
        employees.length === 0
        ?
        <p>No Employees Found</p>
        :
        employees.map((emp) => (

          <div
            key={emp._id}
            style={{
              border: "1px solid black",
              margin: 10,
              padding: 10
            }}
          >

            <h3>{emp.name}</h3>

            <button onClick={() => analyze(emp)}>
              Generate AI Feedback
            </button>

          </div>
        ))
      }

      <pre>{result}</pre>

    </div>
  );
}