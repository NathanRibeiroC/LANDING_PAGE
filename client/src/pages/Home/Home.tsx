import MainNavbar from "../../components/Navbar";
import React, { useState } from 'react'
import DropdownNavbarMenu from "../../components/DropdownNavbarMenu";
import Abc from "../../components/Abc";
import SecondNavbar from "../../components/SecondNav";

const Home: React.FC = () => {

  return (
    <React.Fragment>
        {/* <MainNavbar></MainNavbar>  */}
        {/* <Abc></Abc> */}
        <SecondNavbar></SecondNavbar>
    </React.Fragment>
  );
};

export default Home;