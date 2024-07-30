import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // 페이지 로드 시 세션 체크
    fetch('http://localhost:3000/profile', { credentials: 'include' })
        .then(response => response.json())
        .then(data => {
          if (data.userId) {
            setIsLoggedIn(true);
            setUserId(data.userId);
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUserId(null);
        });
  }, []);

  const login = (userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  };

  const logout = () => {
    fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include'
    })
        .then(() => {
          setIsLoggedIn(false);
          setUserId(null);
        })
        .catch(err => console.error('Failed to log out:', err));
  };

  return (
      <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
        {children}
      </AuthContext.Provider>
  );
};
