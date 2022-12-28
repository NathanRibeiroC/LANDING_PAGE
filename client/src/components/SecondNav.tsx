import { DropdownNavbarMenuProps } from "../pages/Home";
import "../components/_secondnav.scss"
import dropdownArrowImg from "../assets/dropdown-nav-icon.svg";
import navLogo from "../assets/company-logo.svg";

const SecondNavbar = (showOrCollapseDropNav: DropdownNavbarMenuProps) => {

  // function showOrCollapseDropNav(isServActive: boolean, isHealthActive: boolean) {
  //     setIsDropdownNavActive({
  //       healthAndWellnessDropdown: isHealthActive,
  //       servicesDropdown: isServActive,
  //     })
  // }

  return (
    <div className="nav"
    onMouseLeave={() => showOrCollapseDropNav(false, false)}
    >
        <div 
        className="company-logo"
        onMouseEnter={() => showOrCollapseDropNav(false, false)}
        >
            <img src={navLogo} className="logo"></img>
        </div>
        <div
          className="service-tab"
          onMouseEnter={() => showOrCollapseDropNav(true, false)}
          // onMouseLeave={() => showOrCollapseDropNav(false, false)}
        >
            <span>Services</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
        </div>
        <div
          onMouseEnter={() => showOrCollapseDropNav(false, true)}
          // onMouseLeave={() => showOrCollapseDropNav(false, false)}
        >
            <span>Health & Wellness</span>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
        </div>
        <div>
            <span>Resources</span>
        </div>
        <div>
            <span>Help Center & Safety</span>
        </div>
        <div>

        </div>
        <div>
            <span>Get in Touch !</span>
        </div>
        <div>
            <span>My Account</span>
        </div>
    </div>
  );
};

export default SecondNavbar;