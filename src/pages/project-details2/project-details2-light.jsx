import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import ProjectDetails2Header from "components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "components/Project-introduction/project-introduction";
import ProjectGallery from "components/Project-gallery/project-gallery";
import ProjectDescription from "components/Project-description/project-description";
import ProjectVideo from "components/Project-video/project-video";
import NextProject from "components/Next-project/next-project";
import LightTheme from "layouts/Light";
import ProjectDate from "data/project-details2.json";
import appData from 'data/app.json'

const ProjectDetails2Light = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    var logo = logoRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <ProjectVideo projectVideoDate={ProjectDate} />
        <NextProject />
        <Footer />
      </div>
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Project Details Light</title>
    </>
  )
}

export default ProjectDetails2Light;
