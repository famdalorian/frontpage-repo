import React, { useState } from "react";
import {
  FaBars,
  FaTh,
  FaUser,
  FaTshirt,
  FaBitcoin,
  FaPen,
  FaAccessibleIcon,
  FaCode,
  FaVoicemail,
  FaPaintBrush,
  FaFighterJet,
  FaAdversal,
  FaThermometerThreeQuarters,
  FaRunning,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUser />,
    },
    {
      path: "/art",
      name: "Art",
      icon: <FaPaintBrush />,
    },
    {
      path: "/combatsports",
      name: "Combat Sports",
      icon: <FaRunning />,
    },
    {
      path: "/merch",
      name: "Merch",
      icon: <FaTshirt />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <FaCode />,
    },
    {
      path: "/web3",
      name: "Web3",
      icon: <FaBitcoin />,
    },
    {
      path: "/writing",
      name: "Writing",
      icon: <FaPen />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaVoicemail />,
    },
  ];

  return (
    <div className={`container ${isOpen ? "sidebar-open" : ""}`}>
      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className={`top_section ${isOpen ? "top_section-open" : ""}`}>
          <h1 className={`logo ${isOpen ? "logo-open" : ""}`}>xxisp.eth</h1>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className={`link_text ${isOpen ? "link_text-open" : ""}`}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
