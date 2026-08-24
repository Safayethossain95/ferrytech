/* eslint-disable eqeqeq */
import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = (props) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const textTimerRef = useRef(null);

  const total = props.bannerapi?.length || 0;
  const isMobile = props.version === "mobile";

  const showText = useCallback(() => {
    setTextVisible(false);
    clearTimeout(textTimerRef.current);
    textTimerRef.current = setTimeout(() => setTextVisible(true), 200);
  }, []);

  useEffect(() => {
    showText();
    return () => clearTimeout(textTimerRef.current);
  }, [activeIndex, showText]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  if (!props.bannerapi || total === 0) return null;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const currentItem = props.bannerapi[activeIndex];

  return (
    <div className={`bm-banner-section ${isMobile ? "bm-banner-mobile" : ""}`}>
      <Swiper
        ref={swiperRef}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop={total > 1}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={
          !isMobile
            ? {
                clickable: true,
                el: ".bm-swiper-pagination",
              }
            : false
        }
        navigation={
          !isMobile
            ? {
                prevEl: ".bm-swiper-prev",
                nextEl: ".bm-swiper-next",
              }
            : false
        }
        onSlideChange={handleSlideChange}
        className="bm-swiper"
      >
        {props.bannerapi.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bm-slide-wrapper">
              {/* Ken Burns zoom-in background */}
              <div
                className={`bm-ken-burns ${activeIndex === index ? "bm-ken-active" : ""}`}
                style={{ backgroundImage: `url(${item?.imgurl})` }}
              />
              {/* Dark overlay */}
              {/* <div className="bm-overlay" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered text content */}
      <div
        className={`bm-content-layer ${textVisible ? "bm-content-visible" : ""}`}
      >
        <div className="bm-content-inner">
          {/* <span className="bm-tag">{currentItem?.smtext}</span> */}

          <h1 className="bm-heading" key={activeIndex}>
            {currentItem?.bigtext}
          </h1>

          <div className="bm-buttons">
            {/* <a href="/aboutus" className="bm-btn bm-btn-primary">
              About Us
            </a> */}
            <a
              href="./assets/brochure/ferrytech_brochures_compressed.pdf"
              target="_blank"
              rel="noreferrer"
              className="bm-btn bm-btn-outline"
            >
              <span className="bm-btn-icon">&#8595;</span>
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {!isMobile && (
        <>
          <button
            className="bm-swiper-prev bm-arrow"
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="bm-swiper-next bm-arrow" aria-label="Next slide">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination dots */}
      {!isMobile && <div className="bm-swiper-pagination" />}

      {/* Progress bar */}
      <div className="bm-progress-bar">
        <div key={activeIndex} className="bm-progress-fill" />
      </div>
    </div>
  );
};

export default Banner;
