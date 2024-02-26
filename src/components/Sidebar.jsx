import React, { useState } from "react";
import { FaBars, FaTimes, FaTh, FaUser, FaTshirt, FaBitcoin, FaPen,  FaCode, FaVoicemail, FaPaintBrush,  FaRunning, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../App.css';

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
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
        
         
          <div className="bars" onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
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