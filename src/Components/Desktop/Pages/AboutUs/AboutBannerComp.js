/* eslint-disable eqeqeq */
import React,{useState,useEffect} from 'react'
import { aboutusbannerApi } from '../../../../utils/aboutUsApi'
import {motion} from "framer-motion"
import {Row,Col} from 'react-bootstrap'
const AboutBannerComp = (props) => {
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
        <div className="aboutbannercomp">
            <div className="aboutbanner">
                <div className="overlay">
                <div className={props.version=="mobile"?"mbaboutcontainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                     <Row>
                        <Col lg={6} className="coltwenty rowgaptwenty">
                            <motion.div className="div" initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.2,ease: 'easeInOut' }}>

                            <img className="w-100" src="./assets/images/AboutPage/img1.png" alt="" />
                            </motion.div>
                        </Col>
                        <Col lg={6} className="coltwenty rowgaptwenty">
                           <motion.div className="div" initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.4,ease: 'easeInOut' }}>

                            <img className="w-100" src="./assets/images/AboutPage/img2.png" alt="" />
                            </motion.div>
                        </Col>
                        <Col lg={4} className="coltwenty">
                           <motion.div className="div" initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.6,ease: 'easeInOut' }}>

                            <img className="w-100" src="./assets/images/AboutPage/img3.png" alt="" />
                            </motion.div>
                        </Col>
                        <Col lg={4} className="coltwenty">
                           <motion.div className="div" initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.8,ease: 'easeInOut' }}>

                            <img className="w-100" src="./assets/images/AboutPage/img4.png" alt="" />
                            </motion.div>
                        </Col>
                        <Col lg={4} className="coltwenty">
                           <motion.div className="div" initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 1,ease: 'easeInOut' }}>

                            <img className="w-100" src="./assets/images/AboutPage/img5.png" alt="" />
                            </motion.div>
                        </Col>
                     </Row>
                </div>
                </div>
                <div className="img">
                    <img className='w-100' src={aboutusbannerApi.bg} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutBannerComp