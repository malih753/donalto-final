import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const userLoggedIn = (data) => setUser(data);

  useEffect(() => {
    const loggedinUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    setUser(loggedinUser);
  }, []);

  const userLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, userLoggedIn, setUser, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
