import React,{useState,useEffect} from 'react'
import SubHeading from './SubComponents/SubHeading'
import {Row,Col} from 'react-bootstrap'
import { indcardApi } from '../../utils/homepageApi';
import {motion} from 'framer-motion'
const IndustriesComp = (props) => {
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
        <div className="industriescomp">
        <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

            <SubHeading version={props.version=="mobile"?"mobile":""} subheading="Industries we serve"/>

        <Row className='indcardwrap'>
            {
                indcardApi.map((item,key)=>{
                    return(
                        <Col xs={6} lg={6}  key={key}
                        >
                        <motion.div  initial={{ opacity: 0, y:0 }}
                        whileInView={{ opacity: 1,y:-5 , transition: { delay: 0.5 }}} viewport={{ once: true }}
                        transition={{ duration:0.5, delay:key * 0.2,ease: 'easeInOut' }}
                         className="indcard">
                          <div className="overlay2"></div>
                            <div className="overlay">
                                <h4>{item.heading}</h4>
                            </div>
                            <img src={item.imgurl} alt="" />
                        </motion.div>
                    </Col>
                    )
                })
            }
           
        </Row>

        </div>
        </div>
    </>
  )
}

export default IndustriesComp