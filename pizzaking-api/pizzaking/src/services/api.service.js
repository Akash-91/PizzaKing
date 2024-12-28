import axios from "axios";
import keycloak from "../config/keycloak"; // Ensure keycloak is imported

// Create an Axios instance with a base URL
const apiClient = axios.create({
  baseURL: "http://localhost:9090/api/v1/menu/",
});

// Function to get menu items
export const getMenuItems = async () => {
  try {
    const response = await apiClient.get("items", {
      headers: {
        Authorization: `Bearer ${keycloak.token}`, // Correct template literal usage
      },
    });
    console.log(response.data); // Log the actual data
    return response; // Return the data
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error; // Rethrow the error for higher-level handling
  }
};
