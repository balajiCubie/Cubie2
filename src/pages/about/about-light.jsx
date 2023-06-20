import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import VideoWithTestimonials from "components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "components/Skills-circle/skills-circle";
import Clients from "components/Clients/clients";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import AboutIntro from "components/About-intro";
import Team from "components/Team/team";
import MinimalArea from "components/Minimal-Area/minimal-area";
import LightTheme from 'layouts/Light'

const About = () => {
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
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
      <VideoWithTestimonials />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      <Clients theme="light" />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - About Light</title>
    </>
  )
}

export default About;
