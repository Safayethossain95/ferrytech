/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { Power2, TweenMax } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import SubHeading from "./SubComponents/SubHeading";
import AOS from 'aos';
import {motion} from 'framer-motion';
const ProductLineComp = (props) => {

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

    console.log(props.data)

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const [state, setstate] = useState({
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
    slidecount: 0,
  });
  const beforeChangehandler = () => {
    TweenMax.to(".slider2 .slick-current", 0.5, {
      y: 30,
      opacity: 0,
      ease: Power2.easeIn,
    });
  };
  const afterChangehandler = (current) => {
    TweenMax.fromTo(
      ".slider2 .slick-current",
      0.5,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
        delay: 0.2,
      }
    );
    setstate({ activeSlide: current, slidecount: current.slideCount });
  };
  const beforeChangehandler2 = (current, next) => {
    // TweenMax.to(".slider1 .slick-current",0.5, { x: -20, opacity: 1 });
    const activeSlidemain = document.querySelector(
      `.slider1 .slick-slide[data-index="${current}"]`
    );
    if (activeSlidemain) {
      TweenMax.to(".slider1 .slick-current", 0.3, { x: 0, opacity: 1 });
    }
  };
  const afterChangehandler2 = (current) => {
    const activeSlidemain = document.querySelector(
      `.slider1 .slick-slide[data-index="${current}"]`
    );
    if (activeSlidemain) {
      TweenMax.fromTo(
        ".slider1 .slick-current",
        0.5,
        { x: 0, opacity: 1 },
        { x: -20, opacity: 1 }
      );
    }
    setstate({ activeSlide: current, slidecount: current.slideCount });
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    loop: true,
    centerMode: true,

    animate: false,
    fade: false,
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    loop: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    // fade:true,
    whileInView: true,
    // cssEase: 'cubic-bezier(.68,-0.55,.27,1.55)',
    cssEase: "bezier",
  };

  const [totalSlide, settotalSlide] = useState(3);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={state.activeSlide == 0 ? { opacity: "0.3" } : { opacity: "1" }}
        onClick={onClick}
      >
        <img src="./assets/images/productLine/arrowleft.png" alt="" />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={state.activeSlide == 2 ? { opacity: "0.3" } : { opacity: "1" }}
        onClick={onClick}
      >
        <img src="./assets/images/productLine/arrowright.png" alt="" />
      </div>
    );
  }

  // motion.div className="div custom-slide" initial={{ y : 30,opacity:0 }}
  //                       whileInView={{ y:0,opacity:1}}
  //                       transition={{delay:0,duration:2,type: "tween",
  //                       stiffness: 30,
  //                       }}
  useEffect(() => {
    AOS.init({once:false});
    
  }, [])
 
  return (
    <>
      <div className="productlineup">
        <SubHeading subheading="Product Line" />
        <Row>
          <Col
            lg={{ span: 6, offset: 6 }}
           
          >
            <motion.div initial={{ opacity: 0 }} // Initial state (invisible)
            whileInView={{ opacity: 1 }} // whileInView to fully visible
            transition={{ duration: 0.5, delay:0.6 }} className="rightslide">
              <Slider
                className="slider1"
                beforeChange={beforeChangehandler2}
                afterChange={afterChangehandler2}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                {...settings2}
              >
                {
                  props?.data?.map((item,key)=>{
                    return(
                   
                       <div className="div" key={item._id}>
                        <img src={item.img} alt="" />
                      </div>
                    
                    )
                  })
                }
               
                
              </Slider>
            </motion.div>
          </Col>
        </Row>
        <div className="sectionoverlay">
          <div
            className={
              screenSize.dynamicWidth >= 1200 && screenSize.dynamicWidth <= 1399
                ? "myContainerMinimini"
                : screenSize.dynamicWidth >= 992 &&
                  screenSize.dynamicWidth <= 1199
                ? "myContainer896"
                : "myContainerMini"
            }
          >
            <Row>
              <Col
                lg={5}
               
              >
                <motion.div initial={{ opacity: 0 }} // Initial state (invisible)
            whileInView={{ opacity: 1 }} // whileInView to fully visible
            transition={{ duration: 0.5, delay:0.4 }} className="leftslider">
                  {/* <button className='prevbutton' style={state.activeSlide==0?{opacity:"0.3"}:{opacity:"1"}} onClick={() => slider?.current?.slickPrev()}>
                        <img src="./assets/images/productLine/arrowleft.png" alt="" />
                    </button>
                    <button className='nextbutton' onClick={() => slider?.current?.slickNext()}>
                    <img src="./assets/images/productLine/arrowright.png" alt="" /></button>               */}

                  <Slider
                    className="slider2"
                    beforeChange={beforeChangehandler}
                    afterChange={afterChangehandler}
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    {...settings}
                  >
                    {
                      props?.data?.map((item,key)=>{
                        return(
                          <div className="div custom-slide">
                          <h3>{item.productname}</h3>
                          <p>
                           {item.details}
                          </p>
                        </div>
                        )
                      })
                    }
                  
                   
                   
                  </Slider>
                  <div className="downloadbutton">
                  <button style={{width:"200px"}}>
              <a href="./assets/brochure/ferrytech_brochures_compressed.pdf" target="_blank">
              Download Brochures{" "}
              <img src="./assets/images/icon/arrsm.png" alt="" />
              </a>
            </button>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLineComp;
