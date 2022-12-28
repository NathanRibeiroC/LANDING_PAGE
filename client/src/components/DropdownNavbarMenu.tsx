import menuOptions from '../data/services-options.json';
// import { DropdownNavbarMenuProps } from "../pages/Home";
import '../components/_dropdown_nav_bar_menu.scss';
import { DropdownNavbarMenuProps } from "../pages/Home";

const DropdownNavbarMenu = (showOrCollapseDropNav: DropdownNavbarMenuProps) => {

    // function showOrCollapseDropNav(isServActive: boolean, isHealthActive: boolean) {
    //     setIsDropdownNavActive({
    //       healthAndWellnessDropdown: isHealthActive,
    //       servicesDropdown: isServActive,
    //     })
    // }

    console.log(showOrCollapseDropNav)

    const dropdownItens = () => {
        return(menuOptions.map((singleOption) => (
            <li style={{textAlign:"center"}}>
                <img src={singleOption.img_file_name} className="dropdownIcons"></img>
                <h1>{singleOption.main_text}</h1>
                <h2>{singleOption.secondary_test}</h2>
            </li>
        )))
    };
    
    return (
        <ul 
        className="dropdown--nav"
        onMouseEnter={() => showOrCollapseDropNav(true,false)}
        onMouseLeave={() => showOrCollapseDropNav(false,false)}
        >
            {dropdownItens()}
        </ul>
    );
  };
  
  export default DropdownNavbarMenu;