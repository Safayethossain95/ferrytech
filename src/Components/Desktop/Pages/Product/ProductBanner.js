import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion"
const ProductBanner = (props) => {
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
  return (
    <>
        <div className="productbanner">
            <h3>Products</h3>
            <motion.div className="overlay"  initial={{ opacity:0 }}          // Initial position
                              whileInView={{ opacity:1 }} 
                              transition={{
                                  duration: 1, 
                                  delay: 0.2,
                                  ease: 'linear'         
                              }}>
                <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>

                <img className='w-100' src="./assets/images/ProductPage/productsbanner.png" alt="" />
                </div>
            </motion.div>
        </div>
    </>
  )
}

export default ProductBanner