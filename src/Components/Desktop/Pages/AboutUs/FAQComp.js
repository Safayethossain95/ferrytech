import React,{useEffect,useState} from 'react'
import { faqApi } from '../../../../utils/aboutUsApi'
import SubHeading from '../../SubComponents/SubHeading'
import { Accordion } from 'react-bootstrap'
const FAQComp = (props) => {
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
        <div className="faqcomp">
        <SubHeading version={props.version=="mobile"?"mobile":""} subheading="Frequently Asked questions"/>
         
        <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
            {
                faqApi.map((item,key)=>{
                    return(
                        <Accordion className='myaccordion' defaultActiveKey="2" key={key}>
                        <Accordion.Item eventKey={item.id}>
                            <Accordion.Header>
                                <div className="myacchead">
                                    <h4>{item.heading}</h4>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='accbody'>
                            <p>{item.details}</p>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    )
                })
            }

        </div>
           
        </div>
    </>
  )
}

export default FAQComp