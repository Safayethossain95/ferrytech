import React,{useState,useEffect,useRef} from 'react'
import SubHeading from './SubComponents/SubHeading';
import {Row,Col} from "react-bootstrap"
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { TweenMax, Power2 } from "gsap";
const ProductLineComp = () => {

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
            
        })
      }, [screenSize])
      const [state,setstate] = useState({
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0,
        slidecount:0
      })
      const beforeChangehandler = () => {
        TweenMax.to(".slider2 .slick-current",0.5, {
          y: 30,
          opacity: 0,
          ease: Power2.easeIn
        },
        
        );
        
      };
      const afterChangehandler = (current) =>{
        TweenMax.fromTo(
          ".slider2 .slick-current",
          0.5,
          {
            y: 30,
            opacity: 0.1
          },
          {
            y: 0,
            opacity: 1,
            ease: Power2.easeIn
          },
        
        );
        setstate({ activeSlide: current, slidecount: current.slideCount })
      }
      const beforeChangehandler2 = () => {
        TweenMax.to(".slider1 .slick-current",1, {
          x: -20,
          opacity: 1,
          ease: Power2.easeOut
        });
        
      };
      const afterChangehandler2 = (current) =>{
        TweenMax.fromTo(
          ".slider1 .slick-current",
          1,
          {
            x: -20,
            opacity: 1
          },
          {
            x: 0,
            opacity: 1,
            ease: Power2.easeOut
          }
        );
        setstate({ activeSlide: current, slidecount: current.slideCount })
      }
      const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        loop:true,
        centerMode: true,
        centerPadding:"15%",
        aminate:false,
        fade:false
      };
      const settings = {
        dots: false,
        infinite: false,
        speed:300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: false,
        loop:true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        // fade:true,
        animate:true,
        // cssEase: 'cubic-bezier(.68,-0.55,.27,1.55)',
        cssEase: "bezier"
        
      };

      const [totalSlide,settotalSlide] = useState(3)
      const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
      const slider1 = useRef(null);
      const slider2 = useRef(null);
      
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={state.activeSlide==0?{opacity:"0.3"}:{opacity:"1"}}
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
            style={state.activeSlide==2?{opacity:"0.3"}:{opacity:"1"}}
            onClick={onClick}
          >
            <img src="./assets/images/productLine/arrowright.png" alt="" />
          </div>
        );
      }
  return (
    <>
        <div className="productlineup">
        <SubHeading subheading="Product Line"/>
        <Row>
          <Col lg={{span:6,offset:6}}>
          <div className="rightslide">

          <Slider className='slider1' beforeChange={beforeChangehandler2} 
      afterChange={afterChangehandler2} asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings2}>

            <div className="div">
              <img src="./assets/images/productLine/img1.png" alt="" />
            </div>
            <div className="div">
              <img src="./assets/images/productLine/img2.png" alt="" />
            </div>
            <div className="div">
              <img src="./assets/images/productLine/img1.png" alt="" />
            </div>
          </Slider>
          </div>
          </Col>
        </Row>
        <div className="sectionoverlay">

        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

            


            <Row>
              <Col lg={5}>
                <div className="leftslider">
                {/* <button className='prevbutton' style={state.activeSlide==0?{opacity:"0.3"}:{opacity:"1"}} onClick={() => slider?.current?.slickPrev()}>
                        <img src="./assets/images/productLine/arrowleft.png" alt="" />
                    </button>
                    <button className='nextbutton' onClick={() => slider?.current?.slickNext()}>
                    <img src="./assets/images/productLine/arrowright.png" alt="" /></button>               */}
                    
              <Slider className='slider2' beforeChange={beforeChangehandler} 
      afterChange={afterChangehandler} asNavFor={nav1} ref={(slider2) => setNav2(slider2)} {...settings}>

                <motion.div className="div custom-slide" initial={{ y : 30,opacity:0 }}
                            whileInView={{ y:0,opacity:1}}
                            transition={{delay:0,duration:2,type: "tween",
                            stiffness: 30,
                            }}>
                    <h3>MANTSINEN 140</h3>
                    <p>Mantsinen 140 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.</p>
                  <div className="downloadbutton">
                    <button>Download Brochures <img style={{display:"inline-block"}} src="./assets/images/icon/arrsm.png" alt="" /></button>
                  </div>
                  </motion.div>
                {/* <div className="div"> */}
                  
                  <div className="div custom-slide">

                    <h3>MANTSINEN 540</h3>
                    <p>Mantsinen 140 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.</p>
                  <div className="downloadbutton">
                    <button>Download Brochures <img style={{display:"inline-block"}} src="./assets/images/icon/arrsm.png" alt="" /></button>
                  </div>
                            </div>
                  
                  {/* </div> */}
                  <div className="div custom-slide">
                    <h3>MANTSINEN 140</h3>
                    <p>Mantsinen 140 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.</p>
                  <div className="downloadbutton">
                    <button>Download Brochures <img style={{display:"inline-block"}} src="./assets/images/icon/arrsm.png" alt="" /></button>
                  </div>
                  </div>
              </Slider>
              
                </div>
                  
              </Col>
            </Row>

        </div>
        </div>
        </div>
    </>
  )
}

export default ProductLineComp