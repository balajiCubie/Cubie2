import React from "react";
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Works2 = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <section className="work-carousel section-padding caroul position-re pb-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Latest Work
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container ">
                  {!load ? (
                    <Swiper
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/1.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link to={`/works2/works2-dark`}
                              >
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link to={`/project-details2/project-details2-dark`}
                              >
                                Innovation and Crafts.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link to={`/works2/works2-dark`}
                              >
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link to={`/project-details2/project-details2-dark`}
                              >
                                Inspiring new space.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/3.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link to={`/works2/works2-dark`}
                              >
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link to={`/project-details2/project-details2-dark`}
                              >
                                Natural plus modern.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/4.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link to={`/works2/works2-dark`}
                              >
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link to={`/project-details2/project-details2-dark`}
                              >
                                Innovation and Crafts.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/5.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link to={`/works2/works2-dark`}
                              >
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link to={`/project-details2/project-details2-dark`}
                              >
                                Inspiring new space.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  ) : null}

                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2;
