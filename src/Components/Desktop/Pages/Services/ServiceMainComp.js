import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
const ServiceMainComp = (props) => {
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
         <div className="servicemaincomp">
         <div className="">

            {
                props.myprops.map((item,key)=>{
                    return(
                        <Row key={key} className={item.flip==true?"flex-row-reverse mx-0":"mx-0"}>
                            <Col lg={6} className="px-0" >
                                <div className="img">
                                    <img className='w-100' src={item.img} alt="" />
                                </div>
                            </Col>
                            <Col lg={6} className="px-0 d-flex align-items-center" >
                                <div className="textblock">
                                    <h5>{item.subheading}</h5>
                                    <h3>{item.heading}</h3>
                                   
                                   
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
         </div>
           
        </div>
    </>
  )
}

export default ServiceMainComp