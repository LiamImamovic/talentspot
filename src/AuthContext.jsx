import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const login = (user) => {
    setAuthState({ isAuthenticated: true, user });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
