import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import SubHeading from './SubComponents/SubHeading';
import { whyferrytechApi } from '../../utils/homepageApi';
const WhyFerrytechComp = (props) => {
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
        <div className="whyferrytech ">
        <SubHeading version="mobile" subheading="Why FerryTech?"/>
        <Row className="align-items-center mobile">
                <Col xs={12} lg={6}>
                    <div className="imgwgy">
                        <img className='w-100' src="./assets/images/Mobile/homepage/whyferrytech/main.png" alt="" />
                    </div>
                </Col>
                </Row>
        <div className={props.version=="mobile"?"myContainer":screenSize.dynamicWidth>=1200 && screenSize.dynamicWidth <=1399?"myContainerMinimini": screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

              <Row className="align-items-center">
                <Col xs={12} lg={6} className='desktop'>
                    <div className="imgwgy">
                        <img className='w-100' src="./assets/images/whyferrytech/1.png" alt="" />
                    </div>
                </Col>
                <Col xs={12} lg={6} style={props.version=="mobile"?{paddingLeft:"0px"}:{paddingLeft:"60px"}}>
                    <SubHeading version="desktop" subheading="Why FerryTech?"/>
                    <Row>
                    {
                        whyferrytechApi.map((item,key)=>{
                            return(
                            
                              props.version=="mobile"?
                                <Col xs={6}>
                                <div className="smcard" key={key}>
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="text">
                                    <h4>{item.heading}</h4>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                                </Col>
                              :
                              
                              <div className="smcard" key={key}>
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="text">
                                    <h4>{item.heading}</h4>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>

)
})
}
</Row>
                 
                </Col>
              </Row>

        </div>
        </div>
    </>
  )
}

export default WhyFerrytechComp