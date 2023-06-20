import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import ProjectDetails2Header from "components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "components/Project-introduction/project-introduction";
import ProjectGallery from "components/Project-gallery/project-gallery";
import ProjectDescription from "components/Project-description/project-description";
import ProjectVideo from "components/Project-video/project-video";
import NextProject from "components/Next-project/next-project";
import ProjectDate from "data/project-details2.json";
import DarkTheme from "layouts/Dark";

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
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
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Project Details Dark</title>
    </>
  )
}

export default ProjectDetails2Dark;
