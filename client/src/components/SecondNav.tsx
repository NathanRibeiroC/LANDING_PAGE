import React, { useState }  from "react";
import "../components/_secondnav.scss"
import dropdownArrowImg from "../assets/dropdown-nav-icon.svg";

const SecondNavbar: React.FC = () => {

  return (
    <div className="nav flex">
        <div>
            <span>A</span>
        </div>
        <div>
            <span>B</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
        </div>
        <div>
            <span>C</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
        </div>
    </div>
  );
};

export default SecondNavbar;