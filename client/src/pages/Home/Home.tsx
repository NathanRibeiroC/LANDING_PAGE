import React, { useState } from 'react'
import DropdownNavbarMenu from "../../components/Navbar/DropdownNavbarMenu";
import SecondNavbar from "../../components/Navbar/MainNav";
import HomeForm from "../../components/HomePageSections/ContactSection";
import "./_home.scss"
import WhySection from '../../components/HomePageSections/WhySection';

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
        <SecondNavbar showOrCollapseDropNav={showOrCollapseDropNav}/>
        {isDropdownNavActive.servicesDropdown||isDropdownNavActive.healthAndWellnessDropdown ? 
        <DropdownNavbarMenu servicesDropdown={isDropdownNavActive.servicesDropdown} healthAndWellnessDropdown={isDropdownNavActive.healthAndWellnessDropdown} showOrCollapseDropNav={showOrCollapseDropNav}/>
        : ""}
        <HomeForm/>
        <WhySection/>
    </React.Fragment>
  );
};

export default Home;