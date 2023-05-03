import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import SubHeading from './SubComponents/SubHeading';
import { whyferrytechApi } from '../../utils/homepageApi';
const WhyFerrytechComp = () => {
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
        <div className="whyferrytech">

        <div className={screenSize.dynamicWidth>=1200 && screenSize.dynamicWidth <=1399?"myContainerMinimini": screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

              <Row>
                <Col lg={6}>
                    <div className="imgwgy">
                        <img className='w-100' src="./assets/images/whyferrytech/1.png" alt="" />
                    </div>
                </Col>
                <Col lg={6}>
                    <SubHeading subheading="Why FerryTech?"/>
                    {
                        whyferrytechApi.map((item,key)=>{
                            return(

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
                 
                </Col>
              </Row>

        </div>
        </div>
    </>
  )
}

export default WhyFerrytechComp