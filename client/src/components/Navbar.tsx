import companyLogo from '../assets/company-logo.svg';
import dropdownArrowImg from '../assets/dropdown-nav-icon.png';
import '../components/_navbar.scss';

const Home: React.FC = () => {
  
  return (
    <nav className="nav">
        <section className="left-nav-content">
            <img src={companyLogo} className="company-logo"></img>
            <span>Services</span>
            <span>Health & Wellness</span>
            <span>Resources</span>
            <span>Help Center & Safety</span>
        </section>

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