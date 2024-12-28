import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Menu from "./Menu";

const MenuPage = ({ onLogout }) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <Menu />
    </div>
  );
};

export default MenuPage;
