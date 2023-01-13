import servicesNavOptions from "../../data/services-options.json";
import healthNavOptions from "../../data/health-options.json";
import "./_dropdown_nav_bar_menu.scss";
import { NavbarMenuProps } from "../../pages/Home";

const DropdownNavbarMenu = ({
  showOrCollapseDropNav,
  servicesDropdown,
  healthAndWellnessDropdown,
}: NavbarMenuProps) => {
  const servicesDropdownItens = () => {
    return servicesNavOptions.map((singleOption) => (
      <li style={{ textAlign: "center" }}>
        <img src={singleOption.img_file_name} className="dropdownIcons"></img>
        <h1>{singleOption.main_text}</h1>
        <h2>{singleOption.secondary_test}</h2>
      </li>
    ));
  };

  const healthDropdownItens = () => {
    return healthNavOptions.map((singleOption) => (
      <li style={{ textAlign: "center" }}>
        <img src={singleOption.img_file_name} className="dropdownIcons"></img>
        <h1>{singleOption.main_text}</h1>
        <h2>{singleOption.secondary_test}</h2>
      </li>
    ));
  };

  return (
      <ul
        role="dropdown-nav"
        className="dropdown--nav"
        onMouseEnter={() => servicesDropdown ? showOrCollapseDropNav(true, false) : showOrCollapseDropNav(false, true)}
        onMouseLeave={() => showOrCollapseDropNav(false, false)}
      >
        {servicesDropdown ? servicesDropdownItens() : healthDropdownItens()}
      </ul>
  );
};

export default DropdownNavbarMenu;
