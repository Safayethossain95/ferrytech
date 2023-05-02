import React,{useState,useEffect} from 'react'

const IntroComp = () => {
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
    <div className="introsection">

        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
        
        <div className="headingofsubsection">
            <h3>We are one of the largest <br/> trading company in bangladesh</h3>
        </div>

        <div className="paraofsubsection">
            <p>
            Ferrytech is the leading machinery trading company in Bangladesh. We provide a wide range of machinery trading services including hydraulic material handlers, variable reach trucks, heavy lifting machines, pumps, monitors and turrets, hose reels, hand nozzles, CAFS, air ambulances, airport vehicles, aerials, and industrial vehicles. <br/>

            Our goal is to provide reliable and efficient services to meet all your trading needs. We offer a wide range of services including supply, installation, and maintenance, to ensure our clients' satisfaction.
            </p>
        </div>

        <div className="introimgparts">
            <div className="introimgsdiv">
                <div className="wrap">
                    <img src="./assets/images/Intro/carbon_delivery.png" alt="" />
                    <h5>Supply</h5>
                </div>
            </div>
            <div className="arrowright">
                <img src="./assets/images/Intro/vector.png" alt="" />
            </div>
            <div className="introimgsdiv">
                <div className="wrap">
                <img src="./assets/images/Intro/solar_settings.png" alt="" />
                <h5>installation</h5>
                </div>
            </div>
            <div className="arrowright">
                <img src="./assets/images/Intro/vector.png" alt="" />
            </div>
            <div className="introimgsdiv">
                <div className="wrap">
                <img src="./assets/images/Intro/gear_icon_settings.png" alt="" />
                <h5>maintenance</h5>
                </div>
            </div>
        </div>
        
        
        </div>
    </div>
    </>
  )
}

export default IntroComp