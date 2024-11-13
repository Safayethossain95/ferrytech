/* eslint-disable eqeqeq */
import React,{useEffect,useState} from 'react'
import { faqApi } from '../../../../utils/aboutUsApi'
import SubHeading from '../../SubComponents/SubHeading'
import { Accordion } from 'react-bootstrap'
import { API_URL, Only_Frontend } from '../../../../config'
import axios from 'axios'
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

      const [dataFinal,setDataFinal] = useState([])
      useEffect(() => {
        const fetchData = async () =>{
          try{
            if(Only_Frontend){
              setDataFinal(faqApi)
            }else{
              const response = await axios.get(`${API_URL}/faqgetall`);
              console.log("faq backend",response.data.data)
              setDataFinal(response.data.data)
            }
          }catch (error) {
            console.log(error.message || 'Something went wrong');
          } 
        }
        fetchData()
      },[])

  return (
    <>
        <div className="faqcomp" style={props.hm=="true"?{paddingTop:"0"}:{}}>
        <SubHeading hm={props.hm} version={props.version=="mobile"?"mobile":""} subheading="Frequently Asked questions"/>
         
        <div  className={
              props.version == "mobile"
                ? "mbContainer"
                : screenSize.dynamicWidth >= 992 &&
                  screenSize.dynamicWidth <= 1199
                ? "myContainer896"
                : screenSize.dynamicWidth >= 1200 &&
                  screenSize.dynamicWidth <= 1399
                ? "myContainerMinimini"
                : "myContainerMini"
            }>
            {
                dataFinal.map((item,key)=>{
                    return(
                        <Accordion data-aos-delay="500" data-aos="fade-up" data-aos-duration="2000" className='myaccordion'  defaultActiveKey={key === 0 ? "0" : null} key={key}>
                        <Accordion.Item eventKey={key.toString()}>
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