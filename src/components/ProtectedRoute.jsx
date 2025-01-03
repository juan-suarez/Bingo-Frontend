// src/components/ProtectedRoute.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { isAuthenticated } from '../gateway/auth'; 

const ProtectedRoute = ({ children }) => {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await isAuthenticated();
      setIsAuthenticatedState(authStatus);
    };

    checkAuth();
  }, []);

  if (isAuthenticatedState === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticatedState) {
    navigate('/login')
    return;
  }

  return children;
};

export default ProtectedRoute;
