import React from 'react'
import {motion} from 'framer-motion'
const SubHeading = (props) => {
  return (
    <motion.div initial={{ opacity:0}} 
    whileInView={{opacity:1 }} 
    viewport={{ once: true }}
    transition={{
        duration: 0.3, 
        delay: 0.2,
        ease: 'linear'         
    }} className={props.version=="mobile"?"headingofsubsectioncomp mobile":"headingofsubsectioncomp desktop"}>
            <h3>{props.subheading}</h3>
    </motion.div>
  )
}

export default SubHeading