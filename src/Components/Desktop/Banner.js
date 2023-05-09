import React,{useEffect,useState} from 'react'
import {Row,Col,Button} from "react-bootstrap"
import {BsFillPlayFill} from 'react-icons/bs'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Banner = (props) => {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="ft-slick__dots--custom"></div>
      };
  return (
    <div className="bannersection mx-0">



      <Slider {...settings}>
          {
            props.bannerapi.map((item,key)=>{
              return(
                <div className="div">
                  <div className="inneritem">
                  <img src={item.imgurl} alt="" />

                  </div>
                </div>

              )
            })
          }
          
         
      </Slider>
       
        

       <div className="cimg">
        <img src="./assets/images/Banner/cicon.png" alt="" />
       </div>



       
        
    </div>
  )
}

export default Banner