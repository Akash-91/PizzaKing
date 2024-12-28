
import React from "react";
import { useAuth } from "../config/authcontext";
import keycloak from "../config/keycloak";
import toast, { Toaster } from "react-hot-toast";
import "./LoginPage.css";
const LoginPage = () => {
    const { isAuthenticated } = useAuth();
    
    const handleLogin = () => {
      keycloak.login();
    };
  
    return (
      <div className="login-page">
        <Toaster />
        {!isAuthenticated && (
          <div className="login-container">
            <h1>Welcome to Pizza King</h1>
            <p>Please log in to continue your pizza journey!</p>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default LoginPage;