/* eslint-disable eqeqeq */

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
const MeetOurFactory = (props) => {
  const slider = useRef(null);
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
  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // When the screen width is 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // When the screen width is 768px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // When the screen width is 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className="divcontent">
      <motion.h6
        initial={{ opacity: 0, y: -5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1 * 0.2, duration: 0.5 },
        }}
        viewport={{ once: false }}
      >
        Our Factory
      </motion.h6>
      <motion.h2
        initial={{ opacity: 0, y: -5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 2 * 0.2, duration: 0.5 },
        }}
        viewport={{ once: false }}
        style={{ color: "#000", marginBottom: "30px" }}
      >
        Meet <span>Our</span> Factory
      </motion.h2>
      <div
        className={
          props.version == "mobile"
            ? "mbContainer"
            : screenSize.dynamicWidth >= 1200 && screenSize.dynamicWidth <= 1399
            ? "myContainerMinimini"
            : screenSize.dynamicWidth >= 992 && screenSize.dynamicWidth <= 1199
            ? "myContainer896"
            : "myContainerMini"
        }
      >
        <Slider className="slidermeetourfactory" ref={slider} {...settings4}>
          <div>
            <img
              className="w-100"
              src="./assets/images/AboutPage/meetourfactory1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100"
              src="./assets/images/AboutPage/meetourfactory2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100"
              src="./assets/images/AboutPage/meetourfactory3.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MeetOurFactory;
