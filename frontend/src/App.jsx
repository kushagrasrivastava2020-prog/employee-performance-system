import Login from "./components/Login";
import Register from "./components/Register";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AIRecommendation from "./components/AIRecommendation";

function App() {

  return (
    <div style={{ padding: 20 }}>

      <h1>Employee Performance System</h1>

      <Register />

      <hr />

      <Login />

      <hr />

      <EmployeeForm />

      <hr />

      <EmployeeList />

      <hr />

      <AIRecommendation />

    </div>
  );
}

export default App;