import React,{useState,useEffect} from 'react'
import SubHeading from '../../SubComponents/SubHeading'

const value = [

]

const AboutFerrytechComp = (props) => {
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
        <div className="aboutferrytech">
        <SubHeading version={props.version=="mobile"?"mobile":""} subheading="About Ferrytech"/>
        <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

        <div className="para" data-aos-delay="500" data-aos="fade-in" data-aos-duration="2000">
            <p>Ferrytech is the leading machinery trading company in Bangladesh. We provide a wide range of machinery trading services including hydraulic material handlers, variable reach trucks, heavy lifting machines, pumps, monitors and turrets, hose reels, hand nozzles, CAFS, air ambulances, airport vehicles, aerials, and industrial vehicles.<br/> <br/>

            Our goal is to provide reliable and efficient services to meet all your trading needs. We offer a wide range of services including supply, installation, and maintenance, to ensure our clients' satisfaction.</p>

        </div>
        </div>
        </div>
    </>
  )
}

export default AboutFerrytechComp