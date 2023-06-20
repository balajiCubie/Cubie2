import React, { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "config/particle-config";
import particlesBlackConfig from "config/pr-s-black";
import ContentHeaderDate from "data/sections/contact-header.json";

const ContactHeader = ({ sliderRef, blackStar }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#particles-js canvas')?.style.removeProperty('position');
    }, 0);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <header
      ref={sliderRef}
      className="pages-header circle-bg valign position-re"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font mb-10 fw-700">
                  {ContentHeaderDate.title.first} <br />
                  {ContentHeaderDate.title.second}
                </h1>
                <p>{ContentHeaderDate.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        id="particles-js"
        init={particlesInit}
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
};

export default ContactHeader;
