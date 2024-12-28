import keycloak from "./keycloak";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

// Creating Auth Context
const AuthContext = createContext();

// Create auth provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keyCloakObject, setKeyCloakObject] = useState(null);

  useEffect(() => {
    // Initialize Keycloak
    keycloak
      .init({
        onLoad: "check-sso", // Ensures the user is logged in immediately on load
        pkceMethod: "S256", // Enable PKCE
        checkLoginIframe: false, // Disable login iframe
      })
      .then((authenticated) => {
        setIsAuthenticated(authenticated); // Update authentication state
        setKeyCloakObject(keycloak);
        console.log(keycloak);
        if (authenticated) {
          toast.success("Logged In Successfully");
        }
      })
      .catch((error) => {
        console.error("Keycloak initialization failed:", error);
        toast.error("Login failed");
      });
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuthenticated, keycloak: keyCloakObject }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
