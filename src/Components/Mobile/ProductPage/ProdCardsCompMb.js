import React from 'react'
import Slider from 'react-slick'
import {motion} from "framer-motion"
const ProdCardsCompMb = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        centerMode:true,
        centerPadding:"50px"
      };
  return (
    <>
        <div className="productcardscomp">
        <div className={`mbContainer2`}>
            <motion.div className="heading mbContainer" initial={{ opacity:0,y:0 }}          // Initial position
                              whileInView={{ opacity:1,y:-20 }} 
                              transition={{
                                  duration: 0.9, 
                                  delay: 0.2,
                                  ease: 'linear'         
                              }}>
                <h5>{props.data.heading}</h5>
                <p>{props.data.para}</p>
            </motion.div>
            <motion.div className="cardsloop"  initial={{ opacity:0,y:0 }}          // Initial position
                              whileInView={{ opacity:1,y:-20 }} 
                              transition={{
                                  duration: 1, 
                                  delay: 0.2,
                                  ease: 'linear'         
                              }}>
                
                    <Slider {...settings}>
                    {
                        props.data.card.map((item,key)=>{

                            return(
                                <div key={key}>
                                <div className="pcard">
                                    <img src={item.imgurl} alt="" />
                                    
                                <div className="pcarddetails">
                                <h5>{item.name}</h5>
                                <p>{item.detail}</p>
                                </div>
        
                                <div className="pcardbutton">
                                    <button>view details <span><img src="./assets/images/ProductPage/cards/arr.png" alt="" /></span></button>
                                </div>
                                </div>
                            </div>
                            )
                        })
                    }

                    </Slider>
                   
                
            </motion.div>

        </div>
        </div>
    </>
  )
}

export default ProdCardsCompMb