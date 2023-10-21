import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <div className={toggle ? "sidebar show-menu" : "sidebar"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </>
  );
};

export default Sidebar;
