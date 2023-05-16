import React,{useState,useEffect} from 'react'
import { aboutusbannerApi } from '../../../../utils/aboutUsApi'

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
                <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
                     <Row>
                        <Col lg={6} className="coltwenty rowgaptwenty">
                            <img className="w-100" src="./assets/images/AboutPage/img1.png" alt="" />
                        </Col>
                        <Col lg={6} className="coltwenty rowgaptwenty">
                            <img className="w-100" src="./assets/images/AboutPage/img2.png" alt="" />
                        </Col>
                        <Col lg={4} className="coltwenty">
                            <img className="w-100" src="./assets/images/AboutPage/img3.png" alt="" />
                        </Col>
                        <Col lg={4} className="coltwenty">
                            <img className="w-100" src="./assets/images/AboutPage/img4.png" alt="" />
                        </Col>
                        <Col lg={4} className="coltwenty">
                            <img className="w-100" src="./assets/images/AboutPage/img5.png" alt="" />
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