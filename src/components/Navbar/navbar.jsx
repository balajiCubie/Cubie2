import React from "react";
import { Link } from "gatsby";
import appData from "data/app.json";
import { handleDropdown, handleMobileDropdown } from "common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link to="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link to={`/homepage/home1-dark`} className="dropdown-item">
                  Main Home
                </Link>
                {/* <Link to={`/homepage/home2-dark`} className="dropdown-item">
                  Creative Agency
                </Link>
                <Link to={`/homepage/home5-dark`} className="dropdown-item">
                  Digital Agency
                </Link>
                <Link to={`/homepage/home4-dark`} className="dropdown-item">
                  Business One Page
                </Link>
                <Link to={`/homepage/home3-dark`} className="dropdown-item">
                  Corporate Business
                </Link>
                <Link to={`/homepage/home6-dark`} className="dropdown-item">
                  Modern Agency
                </Link>
                <Link to={`/homepage/home7-dark`} className="dropdown-item">
                  Freelancer
                </Link>
                <Link to={`/homepage/home8-dark`} className="dropdown-item">
                  Architecture
                </Link> */}
              </div>
            </li>
            <li className="nav-item">
              <Link to={`/about/about-dark`} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link to={`/showcase/showcase-dark`} className="dropdown-item">
                  Showcase Parallax
                </Link>
                <Link to={`/showcase4/showcase4-dark`} className="dropdown-item">
                  Showcase Carousel
                </Link>
                <Link to={`/showcase3/showcase3-dark`} className="dropdown-item">
                  Showcase Circle
                </Link>
                <Link to={`/works/works-dark`} className="dropdown-item">
                  Portfolio Masonry
                </Link>
                <Link to={`/works2/works2-dark`} className="dropdown-item">
                  Portfolio Filtering
                </Link>
                <Link to={`/works3/works3-dark`} className="dropdown-item">
                  Portfolio Gallery
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link to={`/blog/blog-dark`} className="dropdown-item">
                  Blog Standerd
                </Link>
                <Link to={`/blog-list/blog-list-dark`} className="dropdown-item">
                  Blog List
                </Link>
                <Link to={`/blog-grid/blog-grid-dark`} className="dropdown-item">
                  Blog Grid
                </Link>
                <Link to={`/blog-details/blog-details-dark`} className="dropdown-item">
                  Blog Details
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to={`/contact/contact-dark`} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
