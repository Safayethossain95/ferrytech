/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow prev-arrow" onClick={onClick}>
        &#10094; {/* or any custom icon */}
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow next-arrow" onClick={onClick}>
        &#10095; {/* or any custom icon */}
      </button>
    );
  };
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
    console.log(window.innerHeight)
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: props.version!=="mobile" ? true : false,
    fade: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
  };
  return (
    <div className={window.innerHeight > 1080 ? "bannersection heightOverride mx-0" : "bannersection mx-0"}>
      {props.version == "mobile" && <div style={{ height: "60px" }}></div>}
      <div className="sliderWrapper">

      <Slider {...settings}>
        {props.bannerapi.map((item, key) => {
          return (
            <div className="div" key={key}>
              <motion.div
              className={window.innerHeight > 1080 ? "inneritem heightOverride" : "inneritem"}
                initial={{ scale: 1 }} // Initial state
                animate={{ scale: activeSlide === key ? 1 : 1 }} // Zoom only if it's the active slide
                transition={{
                  duration: 3, // Duration of the zoom effect (2 seconds)
                  ease: "easeInOut", // Easing function
                }}
              >
                {/* <img src={item.imgurl} alt="" /> */}
             
                <div
                  className={
                    props.version == "mobile"
                      ? "myContainer"
                      : screenSize.dynamicWidth >= 1200 &&
                        screenSize.dynamicWidth <= 1399
                      ? "myContainerMinimini"
                      : screenSize.dynamicWidth >= 992 &&
                        screenSize.dynamicWidth <= 1199
                      ? "myContainer896"
                      : "myContainerMini"
                  }
                >
                  <Row className={`align-items-center ${key%2==0?"flex-row-reverse":""}`}>
                    <Col lg={5}>
                      <motion.h3
                        initial={{ y: -20, opacity: 0 }} // Initial position and opacity
                        animate={{
                          y: activeSlide === key ? 0 : -20,
                          opacity: activeSlide === key ? 1 : 0,
                        }} // Slide up effect
                        transition={{ duration: 0.5 }} // Duration of the slide effect
                      >
                        {item.smtext}
                      </motion.h3>
                      <h2>
                        {/* Animate each word in bigtext */}
                        {item?.bigtext.split(" ").map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ y: 0, opacity: 0 }} // Use translateY for upward movement
                            animate={{
                              y: activeSlide === key ? 20 : 0,
                              opacity: activeSlide === key ? 1 : 0,
                            }} // Slide up effect
                            transition={{ duration: 0.8, delay: index * 0.2 }} // Delay of 0.2 seconds based on index
                          >
                            {word + " "}
                          </motion.span>
                        ))}
                      </h2>

                      <div className="downloadbutton d-flex">
                        <motion.button
                          initial={{ opacity: 0 }} // Initial position and opacity
                          animate={{ opacity: activeSlide === key ? 1 : 0 }} // Slide up effect
                          transition={{ duration: 0.5, delay: 0.5 }}
                          style={{ width: "120px" }}
                        >
                          <Link
                            to="/aboutus"
                          >
                            About Us
                          </Link>
                        </motion.button>
                        <motion.button
                        className="bannerbutton"
                          initial={{ opacity: 0 }} // Initial position and opacity
                          animate={{ opacity: activeSlide === key ? 1 : 0 }} // Slide up effect
                          transition={{ duration: 0.5, delay: 0.7 }}
                          
                        >
                          <a
                           
                            href="./assets/brochure/ferrytech_brochures_compressed.pdf"
                            target="_blank"
                          >
                            Download Brochures
                          </a>
                        </motion.button>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <motion.div className="theimage"
                        initial={{ scale: 0.8, opacity: 0 }} // Start slightly smaller and fully transparent
                        animate={{
                          scale: activeSlide === key ? 1 : 0.8, // Zoom in if active slide, else stay slightly smaller
                          opacity: activeSlide === key ? 1 : 0, // Fade in if active slide, else fade out
                        }}
                        transition={{ ease: "easeInOut",duration: 0.6 ,delay:0.2}} // Duration for both animations
                      >
                        <img src={item?.imgurl} alt="" />
                      </motion.div>
                    </Col>
                  </Row>
                </div>
                
              </motion.div>
            </div>
          );
        })}
      </Slider>
      </div>

      {/* <div className="cimg">
        <img src="./assets/images/Banner/cicon.png" alt="" />
      </div> */}
    </div>
  );
};

export default Banner;
