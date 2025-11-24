import { createContext, useContext, useState, useEffect } from "react";

import * as jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); //cannot export the hook directly need to wrap in function

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("user");

    return u ? JSON.parse(u) : null;
  });

  const isAuthenticate = !!token;

  useEffect(() => {
    if (token && !user) {
      try {
        const decode = jwtDecode.jwtDecode(token);
        setUser({ id: decode.id, email: decode.email });

        localStorage.setItem(
          "user",
          JSON.stringify({ id: decode.id, email: decode.email })
        );
      } catch {
        setToken(null);
        localStorage.removeItem("token");
      }
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticate }}
    >
      {children}
    </AuthContext.Provider>
  );
}
