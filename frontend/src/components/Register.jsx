import { useState } from "react";
import API from "../api";

export default function Register() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const signup = async () => {

    await API.post("/api/auth/signup", data);

    alert("Signup Success");
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) =>
          setData({
            ...data,
            email: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({
            ...data,
            password: e.target.value
          })
        }
      />

      <button onClick={signup}>
        Register
      </button>
    </div>
  );
}