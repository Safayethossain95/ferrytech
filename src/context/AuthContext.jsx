import React, { createContext, useState, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Provider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
