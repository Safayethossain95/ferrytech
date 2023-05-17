import React,{useState,useEffect,useRef} from 'react'
import SubHeading from './SubComponents/SubHeading'
import {Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { TweenMax, Power2 } from "gsap";
const Testimonial = (props) => {
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
        infinite: false,
        speed: 500,
        loop:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
       animate:true,
        // cssEase: 'cubic-bezier(.68,-0.55,.27,1.55)',
        cssEase: "bezier"
        
      };
      const settingsmobi = {
        dots: true,
        infinite: true,
        loop:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        centerPadding:"23px",
        centerMode: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="ft-slick__dots--custom"></div>
        
      };
     
      const slider = useRef(null);

      const beforeChangehandler = (current) => {
        const activeSlidemain = document.querySelector(`.slidertesimoniald .slick-slide[data-index="${current}"]`);
        if(activeSlidemain){
          activeSlidemain.style.visibility = "hidden";
          TweenMax.to(".slidertesimoniald .slick-current",0.5, {
            y: 0,
            opacity: 0,
            ease: Power2.easeIn
          },
          );

        }
        
        
      };
      const afterChangehandler = (current) =>{
        const activeSlidemain = document.querySelector(`.slidertesimoniald .slick-slide[data-index="${current}"]`);
        if(activeSlidemain){
          activeSlidemain.style.visibility = "visible";
          TweenMax.fromTo(
            ".slidertesimoniald .slick-current",
            0.5,
            {
              y: -30,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power2.easeOut,
              
            },
          
          );
          
        }
        
      }
      
  return (
    <>
        <div className="testimonial" data-aos-delay="500" data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="center-center">
            <div className="overlay">
                <SubHeading version={props.version=="mobile"?"mobile":""} subheading="Happy Customer"/>


                <div className={props.version=="mobile"?"myContainer2":screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>
                
                <div className="slider">
                    <button className={props.version=="mobile"?"d-none":'prevbutton'} onClick={() => slider?.current?.slickPrev()}>
                        <img src="./assets/images/testimonial/slickprev.png" alt="" />
                    </button>
                    <button className={props.version=="mobile"?"d-none":'nextbutton'} onClick={() => slider?.current?.slickNext()}>
                    <img src="./assets/images/testimonial/slicknext.png" alt="" /></button>              
                    <div className="mbslider mobile" >

                      <Slider className='slidertesimonial' {...settingsmobi}>
                        
                        <div className="div">
                        <div className="slider_item">
                            <p>"We l have been using Mantsinen machines for several years now, and we couldn't be happier with their reliability and efficiency. Their after-sales service is also exceptional, with prompt and efficient support whenever we need it. I highly recommend Mantsinen machines to anyone in the industry."</p>
                            <h4> - John Smith, Operations Manager at ABC Company.</h4>
                        </div>
                        </div>
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
                      
                      <Slider beforeChange={beforeChangehandler} 
      afterChange={afterChangehandler} className='slidertesimoniald desktop' ref={slider} {...settings}>
                        
                        <div className="div">
                        <div className="slider_item">
                            <p>"We have been using Mantsinen machines for several years now, and we couldn't be happier with their reliability and efficiency. Their after-sales service is also exceptional, with prompt and efficient support whenever we need it. I highly recommend Mantsinen machines to anyone in the industry."</p>
                            <h4> - John Smith, Operations Manager at ABC Company.</h4>
                        </div>
                        </div>
                        <div className="div">
                        <div className="slider_item">
                            <p>"We 2 have been using Mantsinen machines for several years now, and we couldn't be happier with their reliability and efficiency. Their after-sales service is also exceptional, with prompt and efficient support whenever we need it. I highly recommend Mantsinen machines to anyone in the industry."</p>
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