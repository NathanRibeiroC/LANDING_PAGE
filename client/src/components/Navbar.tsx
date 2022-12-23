import React, { useState }  from "react";
import companyLogo from "../assets/company-logo.svg";
import dropdownArrowImg from "../assets/dropdown-nav-icon.svg";
import "../components/_navbar.scss";
import DropdownNavbarMenu from "../components/DropdownNavbarMenu";

const Navbar: React.FC = () => {

  const [isDropdownNavActive, setIsDropdownNavActive] = useState<{
    servicesDropdown: boolean;
    healthAndWellnessDropdown: boolean;
  }>({
    servicesDropdown: false,
    healthAndWellnessDropdown: false,
  });

  function showOrCollapseDropNav(isServActive: boolean, isHealthActive: boolean) {
      setIsDropdownNavActive({
        healthAndWellnessDropdown: isHealthActive,
        servicesDropdown: isServActive,
      })
  }

  return (
      <nav className="nav">
        <ul className="primary-navigation">
          <img src={companyLogo} className="company-logo"></img>
          <li
            onMouseEnter={() => showOrCollapseDropNav(true, false)}
            onMouseLeave={() => showOrCollapseDropNav(false, false)}
          >
            <span className="services-span">Services</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
          </li>
          <li
            onMouseEnter={() => showOrCollapseDropNav(true, false)}
            onMouseLeave={() => showOrCollapseDropNav(false, false)}
          >
            <span>Health & Wellness</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
          </li>
          <li>
            <span>Resources</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
          </li>
          <li className="half-li">
            <span>Help Center & Safety</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
          </li>
          <img src={companyLogo}></img>
          <li>
          <span>Become a Caregiver</span>
          <img src={dropdownArrowImg} className="dropdown-arrow"></img>
          </li>
          <img src={companyLogo}></img>
          <li>
          <span>My account</span>
          <img src={dropdownArrowImg} className="dropdown-arrow"></img>
          </li>
        </ul>
        {isDropdownNavActive.servicesDropdown ? (
          <DropdownNavbarMenu showOrCollapseDropNav={showOrCollapseDropNav}></DropdownNavbarMenu>) : ("")}
      </nav>

  );
};

export default Navbar;