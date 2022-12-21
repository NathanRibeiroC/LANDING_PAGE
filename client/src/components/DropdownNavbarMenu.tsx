import menuOptions from '../data/services-options.json';
import '../components/_dropdown_nav_bar_menu.scss';
import criptoIcon from '../assets/cripto-icon.png';
import require from browserify;
// import criptoIcon from '../assets/cripto-icon.png';
// import criptoIcon from '../assets/cripto-icon.png';
// import criptoIcon from '../assets/cripto-icon.png';
// import criptoIcon from '../assets/cripto-icon.png';

const DropdownNavbarMenu: React.FC = () => {

    const logoPath = "../assets/";
    console.log(typeof(criptoIcon));
    const dropdownItens = () => {
        return(menuOptions.map((singleOption) => (
            <li>
                <img src={logoPath+singleOption.img_file_name}></img>
                <h1 style={{textAlign:"center"}}>{singleOption.main_text}</h1>
                <h2 style={{textAlign:"center"}}>{singleOption.secondary_test}</h2>
            </li>
        )))
    };
    
    return (
        <ul>
            {dropdownItens()}
        </ul>
    );
  };
  
  export default DropdownNavbarMenu;