/* eslint-disable eqeqeq */
import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import {motion} from 'framer-motion'
import { API_URL, Only_Frontend } from '../../../../config';
import axios from 'axios';
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

      const fronendmaintext = "Ensuring optimum uptime for your equipments is your top most priority at site. Ferrytech works to help you achieve it through its integrated service capability. Our in-depth understanding of technology & equipments, expert technicians & engineers, infrastructure readiness, and quick turnaround time keep your equipments up & live. Ferrytech is a young and energetic organization providing end-to-end services for equipments. Our aim is not to reduce your downtime only but to improve your efficiency, life of the equipment and maintain your operative costs. Ferrytech understanding of engineering equipments and experience of completing variety of critical problems on site is available to you. Ferrytech is an access to end-to-end service portfolio for your valued customers. Ferrytech believes that the days of 24 x 7 Service are passed. You as a customer deserve much more to keep your business up and running. Therefore, we promise 24 x 7 Uptime through our Rapid Service Force. frontend."
      const [maintext, setmaintext] = useState("")
      useEffect(()=>{
        async function callme(){
            const res = await axios.get(`${API_URL}/serviceMaintextget`)
            if(res && !Only_Frontend){

                setmaintext(res.data.data[0]?.mainText)
            }else{
                setmaintext(fronendmaintext)
            }
        }
        callme()
      })
  return (
    <>
         <div className="servicemaincomp">
         <div className="servicesbanner">
         <div className={props.version=="mobile"?"mbaboutcontainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
         <h4>
                    Services
                </h4>
                <p>
                {maintext}
                </p>
        
         </div>
               
            </div>
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
                                    {
                                        item.heading!=="" ?

                                        <h3>{item.heading}</h3>
                                        :
                                        <ul>
                                        {item.mylist.map((my,key4)=>{
                                            return(
                                                <>
                                                <li>{my}</li>
                                                </>
                                            )
                                        })}
                                                </ul>
                                    }
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