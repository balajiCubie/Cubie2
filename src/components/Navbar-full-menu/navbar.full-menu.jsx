import React from "react";
import { Link } from "gatsby";
import appData from "data/app.json";
import initFullNavbarMenu from "common/initFullNavbarMenu";

const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, []);

  return (
    <>
      <div id="navi" className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}>
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {
                theme ? (
                  theme === "light" ? (
                    <img src={appData.darkLogo} alt="logo" />
                  ) : (
                    <img src={appData.lightLogo} alt="logo" />
                  )
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )
              }
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Home
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home1-dark`} className="sub-link">
                              <span className="nm">01.</span>Main Home
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home2-dark`} className="sub-link">
                              <span className="nm">02.</span>Creative Agency
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home5-dark`} className="sub-link">
                              <span className="nm">03.</span>Digital Agency
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home4-dark`} className="sub-link">
                              <span className="nm">04.</span>Business One Page
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home3-dark`} className="sub-link">
                              <span className="nm">05.</span>Corporate
                              Business
                            </Link>
                          </div>
                        </li>

                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home6-dark`} className="sub-link">
                              <span className="nm">06.</span>Modern Agency
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home7-dark`} className="sub-link">
                              <span className="nm">07.</span>Freelancer
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/homepage/home8-dark`} className="sub-link">
                              <span className="nm">08.</span>Architecture
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to={`/about/about-dark`} className="link">
                        <span className="nm">02.</span>About Us
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Works
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/showcase/showcase-dark`} className="sub-link">
                              <span className="nm">01.</span>ShowCase Parallax
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/showcase4/showcase4-dark`} className="sub-link">
                              <span className="nm">02.</span>ShowCase Carousel
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/showcase3/showcase3-dark`} className="sub-link">
                              <span className="nm">03.</span>ShowCase Circle
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/works/works-dark`} className="sub-link">
                              <span className="nm">04.</span>Portfolio Masonry
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/works2/works2-dark`} className="sub-link">
                              <span className="nm">05.</span>Portfolio
                              Filtering
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/works3/works3-dark`} className="sub-link">
                              <span className="nm">06.</span>Portfolio Gallery
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Blogs
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/blog/blog-dark`} className="sub-link">
                              <span className="nm">01.</span>Blog Standerd
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/blog-list/blog-list-dark`} className="sub-link">
                              <span className="nm">02.</span>Blog List
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/blog-grid/blog-grid-dark`} className="sub-link">
                              <span className="nm">03.</span>Blog Grid
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link to={`/blog-details/blog-details-dark`} className="sub-link">
                              <span className="nm">04.</span>Blog Details
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to={`/contact/contact-dark`} className="link">
                        <span className="nm">05.</span>Contact
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>+03 762-2367-723</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">Vie_website@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
