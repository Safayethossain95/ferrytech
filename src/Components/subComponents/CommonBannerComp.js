/* eslint-disable eqeqeq */
import React from 'react'
import useScreenSize from '../../helpers/Helpers'
import {motion} from "framer-motion"
const CommonBannerComp = ({version,title,img}) => {
    let screenSize = useScreenSize()
  return (
    <div className="bdirectors">
       
            <img src={img} alt="" />
        
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }} // Initial position
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "linear",
            }}
          >
            <div
              className={
                version == "mobile"
                  ? "mbContainer"
                  : screenSize.dynamicWidth >= 992 &&
                    screenSize.dynamicWidth <= 1199
                  ? "myContainer896"
                  : screenSize.dynamicWidth >= 1200 &&
                    screenSize.dynamicWidth <= 1399
                  ? "myContainerMinimini"
                  : "myContainerMini"
              }
            >
              <h3>{title}</h3>
            </div>
          </motion.div>
        </div>
  )
}

export default CommonBannerComp