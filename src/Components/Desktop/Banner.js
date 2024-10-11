/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
const Banner = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
  };
  return (
    <div className="bannersection mx-0">
      {props.version=="mobile"&& <div style={{height:"60px"}}></div>}
      <Slider {...settings}>
        {props.bannerapi.map((item, key) => {
          return (
            <div className="div" key={key}>
              <motion.div

                className="inneritem"
                initial={{ scale: 1 }} // Initial state
                animate={{ scale: activeSlide === key ? 1 : 1 }} // Zoom only if it's the active slide
                transition={{
                  duration: 3, // Duration of the zoom effect (2 seconds)
                  ease: "easeInOut", // Easing function
                }}
              >
                <img src={item.imgurl} alt="" />
              </motion.div>
            </div>
          );
        })}
      </Slider>

      <div className="cimg">
        <img src="./assets/images/Banner/cicon.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
