import React from "react";
import MainNavbar from "../../components/Navbar";
import DropdownNavbarMenu from "../../components/DropdownNavbarMenu";

const Home: React.FC = () => {
  return (
    <React.Fragment>
        <MainNavbar></MainNavbar> 
        <DropdownNavbarMenu></DropdownNavbarMenu>
    </React.Fragment>
  );
};

export default Home;