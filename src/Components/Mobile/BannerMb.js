import React from 'react'
import CommonButton from '../Desktop/SubComponents/CommonButton'
import {Row,Col,Button} from 'react-bootstrap'
import {BsFillPlayFill} from 'react-icons/bs'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
const BannerMb = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  };
  return (
    <>
        <div className="bannermb">
          
       
        
            
        </div>
    </>
  )
}

export default BannerMb