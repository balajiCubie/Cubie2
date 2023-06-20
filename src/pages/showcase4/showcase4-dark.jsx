import React from "react";
import NavbarFullMenu from "components/Navbar-full-menu/navbar.full-menu";
import ShowcasesGrid from "components/Showcases-grid/Showcases-grid";
import DarkTheme from "layouts/Dark";

const Showcase4Dark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesGrid />
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Showcase 4 Dark</title>
    </>
  )
}

export default Showcase4Dark;
