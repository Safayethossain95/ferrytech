/* eslint-disable eqeqeq */

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import { partnerbrandsApi } from "../../../../utils/homepageApi";
const ConstructionQuote = (props) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
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
  const handlenavigate=()=>{
    // alert("dsfaa")
    // navigate("/contact")
  }
  return (
    <>
      <div>
        
        <div className="aboutquotebg">
        <div
        style={{position: "absolute",zIndex:10, left:"50%" , top:"-35%", transform: "translateX(-50%)"}}
          className={
            props.version == "mobile"
              ? "mbContainer"
              : screenSize.dynamicWidth >= 1200 &&
                screenSize.dynamicWidth <= 1399
              ? "myContainerMinimini"
              : screenSize.dynamicWidth >= 992 &&
                screenSize.dynamicWidth <= 1199
              ? "myContainer896"
              : "myContainerMini"
          }
        >
          <div className="marquee-containe ">
            <div className="marque quotemarquee">
              {/* Render the items multiple times for seamless scrolling */}
              <Slider className="slidertesimoniald" ref={slider} {...settings4}>
                {[
                  ...partnerbrandsApi,
                  ...partnerbrandsApi,
                  ...partnerbrandsApi,
                ].map((item, key) => (
                  <div className="cardwrap" key={key}>
                    <motion.div className="brandcard px-4">
                      <div className="overlay3"></div>
                      <div className="overlay5"></div>
                      <div className="overlay4">
                        <img src={item.img} alt="" />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
          <div className="overlay">
            <div className="divcontent">
              <h6>GET A QUOTE FOR CONSTRUCTION USE</h6>
              <h2>
                Are you prepared to get <span>Started?</span>
              </h2>
              <h2>Get a Quote Right Now</h2>
              <button onClick={handlenavigate} className="custom-button">
                <span className="icon">➤</span>
                <span ><a href="#reqaquote">Get Started</a></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionQuote;
