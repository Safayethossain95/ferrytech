/* eslint-disable eqeqeq */
import React from 'react'
import {motion} from 'framer-motion'
const SubHeading = (props) => {
  return (
    <motion.div style={props.mb?{marginBottom:props.mb}:{}} initial={{ opacity:0}} 
    whileInView={{opacity:1 }} 
    viewport={{ once: true }}
    transition={{
        duration: 0.3, 
        delay: 0.2,
        ease: 'linear'         
    }} className={props.version=="mobile"?"headingofsubsectioncomp mobile":"headingofsubsectioncomp desktop"}>
            <h3 style={props.hm=="true"?{marginTop:"10px"}:{}}>{props.subheading}</h3>
    </motion.div>
  )
}

export default SubHeading