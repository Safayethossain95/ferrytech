import React,{useState,useEffect,useRef} from 'react'
import SubHeading from './SubComponents/SubHeading';
import {Row,Col} from "react-bootstrap"
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
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

      const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        loop:false,
        centerMode: true,
        centerPadding:"15%"
      };
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        loop:false,

      afterChange: current => setstate({ activeSlide: current, slidecount: current.slideCount })
      };
      const slider = useRef(null);
      
  return (
    <>
        <div className="productlineup">
        <SubHeading subheading="Product Line"/>
        <Row>
          <Col lg={{span:6,offset:6}}>
          <div className="rightslide">

          <Slider  {...settings2}>

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
                <button className='prevbutton' style={state.activeSlide==0?{opacity:"0.3"}:{opacity:"1"}} onClick={() => slider?.current?.slickPrev()}>
                        <img src="./assets/images/productLine/arrowleft.png" alt="" />
                    </button>
                    <button className='nextbutton' onClick={() => slider?.current?.slickNext()}>
                    <img src="./assets/images/productLine/arrowright.png" alt="" /></button>              
                    
              <Slider ref={slider} {...settings}>

                <div className="div">
                    <h3>MANTSINEN 140</h3>
                    <p>Mantsinen 140 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.</p>
                  <div className="downloadbutton">
                    <button>Download Brochures <img style={{display:"inline-block"}} src="./assets/images/icon/arrsm.png" alt="" /></button>
                  </div>
                  </div>
                <div className="div">
                    <h3>MANTSINEN 540</h3>
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