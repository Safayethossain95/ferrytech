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
               
                
                <div className="img">
                <div className="overlay2">
                <div className={props.version=="mobile"?"mbaboutcontainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                    <Row style={{height:"100%"}}>
                        <Col lg={3} className='coldiv d-flex justify-content-center align-items-center'>
                        <motion.div initial={{ opacity:0  }}
                    whileInView={{
                      opacity:1,
                      transition: { delay: 1 * 0.2, duration: 0.5 },
                    }}
                    
                    viewport={{ once: false }} className="div">
                            <h3>30,000m<sup>2</sup></h3>
                            <p>workshop</p>
                        </motion.div>
                        </Col>
                        <Col lg={3} className='coldiv d-flex justify-content-center align-items-center'>
                        <motion.div initial={{ opacity:0  }}
                    whileInView={{
                      opacity:1,
                      transition: { delay: 2 * 0.2, duration: 0.5 },
                    }}
                    
                    viewport={{ once: false }} className="div">
                            <h3>540+</h3>
                            <p>Projects</p>
                        </motion.div>
                        </Col>
                        <Col lg={3} className='coldiv d-flex justify-content-center align-items-center'>
                        <motion.div initial={{ opacity:0  }}
                    whileInView={{
                      opacity:1,
                      transition: { delay: 3 * 0.2, duration: 0.5 },
                    }}
                    
                    viewport={{ once: false }} className="div">
                            <h3>15+</h3>
                            <p>Dealer</p>
                        </motion.div>
                        </Col>
                        <Col lg={3} className='coldiv d-flex justify-content-center align-items-center'>
                        <motion.div initial={{ opacity:0  }}
                    whileInView={{
                      opacity:1,
                      transition: { delay: 4 * 0.2, duration: 0.5 },
                    }}
                    
                    viewport={{ once: false }} className="div">
                            <h3>20+</h3>
                            <p>Years of experience</p>
                        </motion.div>
                        </Col>
                        
                    </Row>
                </div>
                   
                </div>
                <div className="overlay">

                <div className={props.version=="mobile"?"mbaboutcontainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainerMinimini":"myContainerMini"}>
                     {/* <Row>
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
                     </Row> */}
                     <motion.div className="div text-center" initial={{ opacity: 0, y:-10 }} animate={{opacity:1,y:0,transition: { delay: 1 * 0.2, duration: 0.5 }}} >
                        <h3>About Ferrytech</h3>
                        <p>
                        Ferrytech is a leading construction machinery supplier company dedicated to providing high-quality equipment and solutions for the construction industry. With a diverse range of products, including excavators, loaders, and cranes, Ferrytech caters to the needs of both large-scale projects and smaller construction tasks. Their user-friendly website features detailed product descriptions, specifications, and an easy-to-navigate interface, making it simple for customers to find the right machinery for their projects.
                        </p>
                     </motion.div>
                </div>
                </div>
                    <img className='w-100' src={aboutusbannerApi.bg} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutBannerComp