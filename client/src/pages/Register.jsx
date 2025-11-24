import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    console.log("Calling handleonChange");
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handOnSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await api.post("/registration", user);
      setError("");
     
      console.log(res);
      if (res.status === 201 || res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registation Failed");
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
            placeholder="Gmail"
            aria-label="Gmail"
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
