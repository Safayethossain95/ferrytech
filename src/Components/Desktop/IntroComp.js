import React,{useState,useEffect, useRef} from 'react'
import { Power3,TweenMax, gsap } from 'gsap';
import {motion} from 'framer-motion'
const IntroComp = (props) => {
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

      let supplyref = useRef(null)
      let settingsref = useRef(null)
      let solarref = useRef(null)
      useEffect(()=>{

        
       
      },[])
  return (
    <>
    <div className="introsection">

        <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>
        
        <div data-aos-delay="300" data-aos="fade-in" data-aos-duration="1000" className="headingofsubsection">
            <h3>We are one of the largest <br/> trading company in bangladesh</h3>
        </div>

        <div data-aos-delay="300" data-aos="fade-in" data-aos-duration="1000"  className="paraofsubsection">
            <p>
            Ferrytech is the leading machinery trading company in Bangladesh. We provide a wide range of machinery trading services including hydraulic material handlers, variable reach trucks, heavy lifting machines, pumps, monitors and turrets, hose reels, hand nozzles, CAFS, air ambulances, airport vehicles, aerials, and industrial vehicles. <br/><br/>

            Our goal is to provide reliable and efficient services to meet all your trading needs. We offer a wide range of services including supply, installation, and maintenance, to ensure our clients' satisfaction.
            </p>
        </div>

        <div className="introimgparts" data-aos-delay="300" data-aos="fade-in" data-aos-duration="1000">
            <div className="introimgsdiv">
                <div className="wrap">
                    <motion.div className="imgdiv"    initial={{ x: -10 }}          // Initial position
                    animate={{ x: 10 }}         // Final position
                    transition={{
                        duration: 4,              // Duration of each animation
                        repeat: Infinity,         // Number of repetitions (Infinity for infinite repetition)
                        repeatType: 'reverse',    // Type of repetition animation
                        repeatDelay: 0,           // Delay between each repetition
                        ease: 'linear'            // Easing function
                    }}>
                    <img  src="./assets/images/Intro/carbon_delivery.png" alt="" />

                    </motion.div>
                    <h5>Supply</h5>
                </div>
            </div>
            <div className="arrowright">
                <img src={props.imgurl} alt="" />
            </div>
            <div className="introimgsdiv">
                <div className="wrap">
                    <motion.div className="imgdiv" initial={{ rotate: 0 }}       // Initial rotation angle
                    animate={{ rotate: 360 }}     // Final rotation angle
                    transition={{
                        duration: 6,                // Duration of each rotation
                        repeat: Infinity,           // Number of repetitions (Infinity for infinite repetition)
                        repeatType: 'loop',         // Type of repetition animation
                        repeatDelay: 0,             // Delay between each repetition
                        ease: 'linear'              // Easing function
                    }}>
                        <img src="./assets/images/Intro/solar_settings.png" alt="" />

                    </motion.div>
                <h5>installation</h5>
                </div>
            </div>
            <div className="arrowright">
                <img src={props.imgurl} alt="" />
            </div>
            <div className="introimgsdiv">
                <div className="wrap">
                    <motion.div className="imgdiv" initial={{ rotate:10 }}          // Initial position
                    animate={{ rotate:-10 }}         // Final position
                    transition={{
                        duration: 4,              // Duration of each animation
                        repeat: Infinity,         // Number of repetitions (Infinity for infinite repetition)
                        repeatType: 'reverse',    // Type of repetition animation
                        repeatDelay: 0,           // Delay between each repetition
                        ease: 'linear'            // Easing function
                    }}>
                        <img src="./assets/images/Intro/gear_icon_settings.png" alt="" />

                    </motion.div>
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