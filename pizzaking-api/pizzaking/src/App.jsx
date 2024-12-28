import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./config/authcontext";
import keycloak from "./config/keycloak";
import MenuPage from "./components/MenuPage";
import LoginPage from "./components/LoginPage";

function App() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  const handleLogout = () => {
    keycloak.logout();
    toast.success("Logged out, See you soon..!!");
  };

  return (
    <>
      <Toaster />
      {isAuthenticated ? (
        <div>
          <MenuPage onLogout={handleLogout} />
          {/* Add Header here */}
        </div>
      ) : (
        <div>
          <LoginPage />
        </div>
      )}
    </>
  );
}

export default App;
