import React from "react";
import "./Header.css";
import keycloak from "../config/keycloak"; // Adjust the path as per your folder structure

const Header = ({ onLogout }) => {
  const userName = keycloak.tokenParsed?.name || "User";

  return (
    <header className="header">
      {/* Left Section: Logo */}
      <div className="logo">
        <img
          src="/pizzaKingLogo.jpg" // Path to your logo image in the public folder
          alt="Pizza King Logo"
          className="logo-image"
        />
        <span>Pizza King</span>
      </div>

      {/* Right Section: User Info and Logout */}
      <div className="user-actions">
        <span className="user-name">Hi, {userName}</span>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
