/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import { partnerbrandsApi } from "../../../../utils/homepageApi";
import { Link } from "react-scroll";
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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
                    <motion.div initial={{ opacity:0  }}
                    whileInView={{
                      opacity:1,
                      transition: { delay: key * 0.1, duration: 0.5 },
                    }}
                    
                    viewport={{ once: false }} className="brandcard px-4">
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
              <motion.h6  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 1 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>GET A QUOTE FOR CONSTRUCTION USE</motion.h6>
              <motion.h2  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 1 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>
                Are you prepared to get <span>Started?</span>
              </motion.h2>
              <motion.h2  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 1 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>Get a Quote Right Now</motion.h2>
              <motion.button  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 1 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }} onClick={handlenavigate} className="custom-button">
                <span className="icon">➤</span>
                <span ><Link to="reqaquote" smooth={true} duration={500} >Get Started</Link></span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionQuote;
