import React, {useState} from "react";
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

function Sidebar({ children }) {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle =  () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "about",
      icon: <FaUser />,
    },
    {
      path: "/art",
      name: "art",
      icon: <FaPaintBrush />,
    },
    {
      path: "/combatsports",
      name: "combatsports",
      icon: <FaRunning />,
    },
   

    {
      path: "/merch",
      name: "merch",
      icon: <FaTshirt />,
    },
    {
      path: "/projects",
      name: "projects",
      icon: <FaCode />,
    },
    {
      path: "/web3",
      name: "Crypto",
      icon: <FaBitcoin />,
    },
    {
      path: "/writing",
      name: "Writing",
      icon: <FaPen />,
    }, {
      path: "/contact",
      name: "contact",
      icon: <FaVoicemail />,
    },
  ];
  return (
    <div className="container">
      <div style={{width: isOpen ? '200px': '50px'}} className="sidebar">
        <div style={{width: isOpen ? '300px': '50px'}} className="top_section">
          <h1 style={{display: isOpen ? 'block': 'none'}} className="logo">xxisp.eth</h1>
          <div style={{marginLeft: isOpen ? '50px': '0px'}}className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{display: isOpen ? 'block': 'none'}}  className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
