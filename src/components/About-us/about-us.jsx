import React from "react";
import { Link } from "gatsby";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {AboutUs1Date.title}
              </h3>
              <p>{AboutUs1Date.content}</p>
              <Link to="/about/about-dark" className="butn bord curve mt-30">
                <span>Read More</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={AboutUs1Date.image} alt="" />
            <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
