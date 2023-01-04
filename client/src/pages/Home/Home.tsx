import React, { useState } from 'react'
import DropdownNavbarMenu from "../../components/DropdownNavbarMenu";
import SecondNavbar from "../../components/MainNav";
import HomeForm from "../../components/ContactSection";
import waveBackground from "../../../public/wave.svg"
import "./_home.scss"
import WhySection from '../../components/WhySection';
import ContactForm from '../../components/ContactForm';

const Home = () => {

  const [isDropdownNavActive, setIsDropdownNavActive] = useState<{
    servicesDropdown: boolean;
    healthAndWellnessDropdown: boolean;
  }>({
    servicesDropdown: false,
    healthAndWellnessDropdown: false,
  });

  function showOrCollapseDropNav(isServActive: boolean, isHealthActive: boolean): void {
    setIsDropdownNavActive({
      healthAndWellnessDropdown: isHealthActive,
      servicesDropdown: isServActive,
    })
  }

  return (
    <React.Fragment>
        {/* <SecondNavbar showOrCollapseDropNav={showOrCollapseDropNav}/> */}
        {/* {isDropdownNavActive.servicesDropdown||isDropdownNavActive.healthAndWellnessDropdown ? 
        <DropdownNavbarMenu servicesDropdown={isDropdownNavActive.servicesDropdown} healthAndWellnessDropdown={isDropdownNavActive.healthAndWellnessDropdown} showOrCollapseDropNav={showOrCollapseDropNav}/>
        : ""} */}
        {/* <HomeForm/> */}
        {/* <img src={waveBackground} className={"wave-form"}/> */}
        {/* <WhySection/> */}
        <ContactForm/>
    </React.Fragment>
  );
};

export default Home;