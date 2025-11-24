import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ user: "", password: "" });

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
      console.log(res);
      if (res.status === 200 || res.data.success) {
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
            name="name"
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
