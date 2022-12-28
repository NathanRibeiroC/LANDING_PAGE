import MainNavbar from "../../components/Navbar";
import React, { useState } from 'react'
import DropdownNavbarMenu from "../../components/DropdownNavbarMenu";
import Abc from "../../components/Abc";
import SecondNavbar from "../../components/SecondNav";

const Home = () => {

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

  // console.log(typeof(showOrCollapseDropNav))

  return (
    <React.Fragment>
        <SecondNavbar showOrCollapseDropNav={showOrCollapseDropNav}></SecondNavbar>
        {isDropdownNavActive.servicesDropdown ? <DropdownNavbarMenu showOrCollapseDropNav={showOrCollapseDropNav}></DropdownNavbarMenu> : ""}
    </React.Fragment>
  );
};

export default Home;