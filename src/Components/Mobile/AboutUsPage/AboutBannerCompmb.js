import React from 'react'
import { aboutusbannerApi } from '../../../utils/aboutUsApi'
import {Row,Col} from 'react-bootstrap'
const AboutBannerCompmb = () => {
  return (
    <>
        <div className="aboutbannercompmb">
        <div className="aboutbanner">
                <div className="overlay">
                <div className="mbContainer">

                     <Row className="columnheightab">
                        <Col xs={6} className="lcommoncol cbten prten">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img1.png" alt="" />
                            <img src="./assets/images/Mobile/aboutuspage/banner/img2.png" alt="" />
                            <img src="./assets/images/Mobile/aboutuspage/banner/img3.png" alt="" />
                        </Col>
                        <Col xs={6} className="rcommoncol cbten plzero">
                            <img src="./assets/images/Mobile/aboutuspage/banner/img4.png" alt="" />
                            <img src="./assets/images/Mobile/aboutuspage/banner/img5.png" alt="" />
                            
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