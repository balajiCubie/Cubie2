import React, { useEffect, useCallback } from "react";
import particlesConfig from "config/particle-config";
import particlesBlackConfig from "config/pr-s-black";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Intro4 = ({ sliderRef, blackStar }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#particles-js canvas')?.style.removeProperty('position');
    }, 500);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    document.querySelector('#particles-js canvas')?.style.removeProperty('position');
  }, []);

  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">Creativity</span> is the process of
                having <span className="color-font">original ideas</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Particles
        id="particles-js"
        init={particlesInit}
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />
      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
