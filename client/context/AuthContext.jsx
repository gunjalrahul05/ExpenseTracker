import { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  console.log("In the authProvider");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  });

  const isAuthenticate = !!token;
  
  useEffect(() => {
    if (!token) {
      setUser(null);
      localStorage.removeItem("user");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      console.log("Decoded:", decoded);

      const userObj = {
        id: decoded.id || decoded._id, // FIX for different JWT formats
        email: decoded.email,
      };
      console.log(`user object = ${userObj}`);

      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj));
    } catch (err) {
      console.error("JWT decode failed:", err);
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    console.log("Login done");
    setUser(userData);
    setToken(jwtToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticate }}
    >
      {children}
    </AuthContext.Provider>
  );
}
