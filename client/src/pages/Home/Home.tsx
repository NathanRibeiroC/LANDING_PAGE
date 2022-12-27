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

  return (
    <React.Fragment>
        <SecondNavbar setIsDropdownNavActive={setIsDropdownNavActive}></SecondNavbar>
        {isDropdownNavActive.servicesDropdown ? <DropdownNavbarMenu setIsDropdownNavActive={setIsDropdownNavActive}></DropdownNavbarMenu> : ""}
    </React.Fragment>
  );
};

export default Home;