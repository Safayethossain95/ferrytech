/* eslint-disable eqeqeq */

import React, { useRef,useEffect, useState } from "react";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import { partnerbrandsApi } from "../../../../utils/homepageApi";
import { motion } from "framer-motion";;
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
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        loop: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
      };
  return (
    <>
    <div>
    <div
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
                <Slider
                className="slidertesimoniald"
                ref={slider}
                {...settings}
              >
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
        <div className="aboutquotebg">

        </div>
         
        </div>
    </>
  )
}

export default ConstructionQuote