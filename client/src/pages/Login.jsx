import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", user); // POST not GET

      if (res.status === 201 || res.data.success) {
        login(res.data.user, res.data.token);
        alert("Login Done");
        navigate("/");
      }
    } catch (error) {
      console.log(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <form action="" className="" onSubmit={handOnSubmit}>
        <div class="input-group flex-nowrap m-4">
          <span class="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={handleOnChange}
            name="email"
          />
        </div>

        <div class="input-group flex-nowrap m-4">
          <span class="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="addon-wrapping"
            onChange={handleOnChange}
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
