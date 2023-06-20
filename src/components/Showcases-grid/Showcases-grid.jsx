import React, { useState, useEffect, useRef } from "react";
import { navigate } from 'gatsby';
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "data/showcases-full-screen-slider.json";
import tooltipEffect from "common/tooltipEffect";
import SwiperCore, { Navigation, Pagination, Parallax, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const ShowcasesGrid = () => {
  const [load, setLoad] = useState(true);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      tooltipEffect();
    }, 1000);
  }, []);

  const goToPage = () => {
    navigate(`/project-details2/project-details2-dark`);
  }

  return (
    <header className="slider showcase-grid">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        {
          !load ? (
            <Swiper
              className="swiper-wrapper"
              slidesPerView={4}
              speed={1000}
              mousewheel={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={30}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                  }

                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {
                ShowcassesFullScreenData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div
                      className="bg-img"
                      style={{ backgroundImage: `url(${slide.image})` }}
                      data-tooltip-tit={slide.title.first + " " + slide.title.second}
                      data-tooltip-sub={slide.sub}
                      onClick={goToPage}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          )
            :
            null
        }
      </div>
      <div className="txt-botm">
        <div ref={navigationNextRef} className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div ref={navigationPrevRef} className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>

        <div className="swiper-pagination dots" ref={paginationRef}></div>
      </div>
    </header>
  );
};

export default ShowcasesGrid;
