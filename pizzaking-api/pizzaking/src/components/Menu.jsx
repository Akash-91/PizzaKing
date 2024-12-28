import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Menu.css";
import keycloak from "../config/keycloak"; // Ensure keycloak is correctly imported
import { getMenuItems } from "../services/api.service";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await getMenuItems();
        setMenu(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setError("Failed to load menu. Please try again later.");
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      {menu.length > 0 ? (
        <div className="menu-grid">
          {menu.map((item) => (
            <div className="menu-card" key={item.product_id}>
              <img
                src={item.image || "/pizza-pizza.png"} // Fallback image
                alt={item.name}
                className="menu-image"
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>₹{item.price.toFixed(2)}</p>
              <button
                className="add-to-cart"
                onClick={() => toast.success(`${item.name} added to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items available in the menu.</p>
      )}
    </div>
  );
};

export default Menu;
