import React from 'react'
import {motion} from "framer-motion"
const ProdBanner = () => {
  return (
    <>
        <div className="productbanner">
            <h3>Products</h3>
            <motion.div className="overlay" initial={{ opacity:0 }}          // Initial position
                              whileInView={{ opacity:1 }} 
                              viewport={{ once: true }}
                              transition={{
                                  duration: 1, 
                                  delay: 0.2,
                                  ease: 'linear'         
                              }}>
                <div className={`mbContainer`}>

                <img className='w-100' src="./assets/images/Mobile/productpage/prodbannerimg.png" alt="" />
                </div>
            </motion.div>
        </div>
    </>
  )
}

export default ProdBanner