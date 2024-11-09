/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import SubHeading from "./SubComponents/SubHeading";
import FAQComp from "./Pages/AboutUs/FAQComp";
const Testimonial = (props) => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
  };
  const settingsmobi = {
    dots: true,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    centerPadding: "23px",
    centerMode: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
  };

  const slider = useRef(null);

  // const beforeChangehandler = (current) => {
  //   const activeSlidemain = document.querySelector(`.slidertesimoniald .slick-slide[data-index="${current}"]`);
  //   if(activeSlidemain){
  //     activeSlidemain.style.visibility = "hidden";
  //     TweenMax.to(".slidertesimoniald .slick-current",0.5, {
  //       y: 0,
  //       opacity: 0,
  //       ease: Power2.easeIn
  //     },
  //     );

  //   }

  // };
  // const afterChangehandler = (current) =>{
  //   const activeSlidemain = document.querySelector(`.slidertesimoniald .slick-slide[data-index="${current}"]`);
  //   if(activeSlidemain){
  //     activeSlidemain.style.visibility = "visible";
  //     TweenMax.fromTo(
  //       ".slidertesimoniald .slick-current",
  //       0.5,
  //       {
  //         y: -30,
  //         opacity: 0
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         ease: Power2.easeOut,

  //       },

  //     );

  //   }

  // }

  return (
    <>
      <div className="testimonial">
        <div className="overlay" data-aos-anchor-placement="center-center">
        

        
           <FAQComp version={props.version} hm="true"/>
          
        </div>
      </div>
    </>
  );
};

export default Testimonial;
