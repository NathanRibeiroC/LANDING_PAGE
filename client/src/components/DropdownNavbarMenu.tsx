import menuOptions from '../data/services-options.json';
import '../components/_dropdown_nav_bar_menu.scss';
import React from "react";

interface DropdownNavbarMenuProps {
    (isServActive: boolean, isHealthActive: boolean): void;
}

const DropdownNavbarMenu: React.FC<{showOrCollapseDropNav: DropdownNavbarMenuProps}> = (props) => {

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
        <ul className="dropdown--nav" 
        onMouseEnter={() => props.showOrCollapseDropNav(true,false)}
        onMouseLeave={() => props.showOrCollapseDropNav(false,false)}
        >
            {dropdownItens()}
        </ul>
    );
  };
  
  export default DropdownNavbarMenu;