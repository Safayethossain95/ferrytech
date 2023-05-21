import React from 'react'
import { aboutusbannerApi } from '../../../utils/aboutUsApi'
import {Row,Col} from 'react-bootstrap'
import {motion} from "framer-motion"
const AboutBannerCompmb = () => {
  return (
    <>
        <div className="aboutbannercompmb">
        <div className="aboutbanner">
                <div className="overlay">
                <div className="mbContainer">

                     <Row className="columnheightab">
                        <Col xs={6} className="lcommoncol cbten prten">
                            <motion.div initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.2,ease: 'easeInOut' }} className="div">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img1.png" alt="" />

                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.2,ease: 'easeInOut' }} className="div">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img2.png" alt="" />

                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.2,ease: 'easeInOut' }} className="div">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img3.png" alt="" />

                            </motion.div>
                        </Col>
                        <Col xs={6} className="rcommoncol cbten plzero">
                            <motion.div initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.2,ease: 'easeInOut' }} className="div">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img4.png" alt="" />

                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , }} viewport={{ once: true }}
                        transition={{ duration:0.5, delay: 0.2,ease: 'easeInOut' }} className="div">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img5.png" alt="" />

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

export default AboutBannerCompmb