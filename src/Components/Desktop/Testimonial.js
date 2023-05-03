import React,{useState,useEffect,useRef} from 'react'
import SubHeading from './SubComponents/SubHeading'
import {Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
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
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        
      };
      const slider = useRef(null);
      
  return (
    <>
        <div className="testimonial">
            <div className="overlay">
                <SubHeading subheading="Happy Customer"/>


                <div className={screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>
                
                <div className="slider">
                    <button className='prevbutton' onClick={() => slider?.current?.slickPrev()}>
                        <img src="./assets/images/testimonial/slickprev.png" alt="" />
                    </button>
                    <button className='nextbutton' onClick={() => slider?.current?.slickNext()}>
                    <img src="./assets/images/testimonial/slicknext.png" alt="" /></button>              
                    <Slider ref={slider} {...settings}>
                        
                        <div className="div">
                        <div className="slider_item">
                            <p>"We have been using Mantsinen machines for several years now, and we couldn't be happier with their reliability and efficiency. Their after-sales service is also exceptional, with prompt and efficient support whenever we need it. I highly recommend Mantsinen machines to anyone in the industry."</p>
                            <h4> - John Smith, Operations Manager at ABC Company.</h4>
                        </div>
                        </div>
                        <div className="div">
                        <div className="slider_item">
                            <p>"We have been using Mantsinen machines for several years now, and we couldn't be happier with their reliability and efficiency. Their after-sales service is also exceptional, with prompt and efficient support whenever we need it. I highly recommend Mantsinen machines to anyone in the industry."</p>
                            <h4> - John Smith, Operations Manager at ABC Company.</h4>
                        </div>
                        </div>
                        
                    </Slider>
                       
                </div>
          
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Testimonial