import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../../../assets/images/icons8-basket-96.png";
import "./Desktop.scss";

const Desktop: React.FC = () => {
  return (
    <>
      <ul className="nav-list">
        <li>Loppishörnan</li>
        <NavLink className="list-item" to="/">
          Hem
        </NavLink>
        <NavLink className="list-item" to="/shop">
          Butik
        </NavLink>
        <NavLink className="list-item" to="/about">
          Om oss
        </NavLink>
        <NavLink className="list-item" to="/cart">
          <img src={Cart} alt="" width="60px" />
        </NavLink>
      </ul>
    </>
  );
};

export default Desktop;
