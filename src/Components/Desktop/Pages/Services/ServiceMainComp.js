import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import {motion} from 'framer-motion'
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
                            <Col lg={6} className={props.version} >
                                <motion.div className="textblock" initial={{ opacity:0}} 
                                    whileInView={{opacity:1 }} 
                                    
                                    transition={{
                                        duration: 0.6, 
                                        delay: 0.3,
                                        ease: 'linear'         
                                    }}>
                                    <h5>{item.subheading}</h5>
                                    <h3>{item.heading}</h3>
                                </motion.div>
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