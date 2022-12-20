import companyLogo from '../assets/company-logo.svg';
import dropdownArrowImg from '../assets/dropdown-nav-icon.svg';
import test from '../assets/test.svg';
import '../components/_navbar.scss';

const Home: React.FC = () => {
  
  return (
    <nav className="nav">
            <ul className="left-nav-content">
                <img src={companyLogo} className="company-logo"></img>
                <li>
                    <span>Services</span>
                </li>
                    <img src={dropdownArrowImg} className="dropdown-arrow"></img>
                <li>
                    <span>Health & Wellness</span>
                </li>
                    <img src={dropdownArrowImg} className="dropdown-arrow"></img>
                <li>
                    <span>Resources</span>
                </li>
                    <img src={dropdownArrowImg} className="dropdown-arrow"></img>
                <li>
                    <span>Help Center & Safety</span>
                </li>
                    <img src={dropdownArrowImg} className="dropdown-arrow"></img>
            </ul>

        <section className="right-nav-content">
            <img src={companyLogo}></img>
            <section>
                <span>Become a Caregiver</span>
                <img></img>
            </section>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>

            <img src={companyLogo}></img>
            <section>
                <span>My account</span>
                <img></img>
            </section>
            <img src={dropdownArrowImg} className="dropdown-arrow"></img>
        </section>
    </nav>
  );
};

export default Home;