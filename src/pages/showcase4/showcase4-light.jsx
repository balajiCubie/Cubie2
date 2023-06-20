import React from "react";
import NavbarFullMenu from "components/Navbar-full-menu/navbar.full-menu";
import ShowcasesGrid from "components/Showcases-grid/Showcases-grid";
import Lightheme from "layouts/Light";

const Showcase4Light = () => {
  return (
    <Lightheme>
      <NavbarFullMenu theme="light" />
      <ShowcasesGrid />
    </Lightheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Showcase 4 Light</title>
    </>
  )
}

export default Showcase4Light;
