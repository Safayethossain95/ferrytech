/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
const IntroComp = (props) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  let supplyref = useRef(null);
  let settingsref = useRef(null);
  let solarref = useRef(null);
  useEffect(() => {}, []);
  return (
    <>
      <div className="introsection">
        <div
          className={
            props.version == "mobile"
              ? "mbContainer":
              screenSize.dynamicWidth >= 1200 &&
                screenSize.dynamicWidth <= 1399
              ? "myContainerMinimini"
              : screenSize.dynamicWidth >= 992 &&
                screenSize.dynamicWidth <= 1199
              ? "myContainer896"
              : "myContainerMinimini" 
          }
        >
          <motion.div
            initial={{ opacity: 0 }} // Initial state (invisible)
            whileInView={{ opacity: 1 }} // whileInView to fully visible
            transition={{ duration: 0.5 }}
            className="headingofsubsection"
          >
            <h3>
              We are one of the largest <br /> trading company in bangladesh
            </h3>
          </motion.div>

          <motion.div
           initial={{ opacity: 0 }} // Initial state (invisible)
           whileInView={{ opacity: 1 }} // whileInView to fully visible
           transition={{ duration: 0.5 }}
            className="paraofsubsection"
          >
            <p>
              Ferrytech is the leading machinery trading company in Bangladesh.
              We provide a wide range of machinery trading services including
              hydraulic material handlers, variable reach trucks, heavy lifting
              machines, pumps, monitors and turrets, hose reels, hand nozzles,
              CAFS, air ambulances, airport vehicles, aerials, and industrial
              vehicles. <br />
              <br />
              Our goal is to provide reliable and efficient services to meet all
              your trading needs. We offer a wide range of services including
              supply, installation, and maintenance, to ensure our clients'
              satisfaction.
            </p>
          </motion.div>
          <div className="desktop">
            <motion.div
              className="introimgparts "
              initial={{ opacity: 0 }} // Initial state (invisible)
            whileInView={{ opacity: 1 }} // whileInView to fully visible
            transition={{ duration: 0.5 }}
            >
              <div className="introimgsdiv">
                <div className="overlay1">
                <div className="wrap">
                  <motion.div
                    className="imgdiv"
                    initial={{ x: -10 }} // Initial position
                    whileInView={{ x: 10 }} // Final position
                    transition={{
                      duration: 4,
                      repeat: Infinity, // Repeat infinitely
                      repeatType: "mirror", // Smooth reverse back and forth
                      ease: "linear", // Easing function for constant smooth movement
                    }}
                  >
                    <img
                      src="./assets/images/Intro/carbon_delivery.png"
                      alt=""
                    />
                  </motion.div>
                  <h5>Supply</h5>
                </div>

                </div>
                <div className="overlay3"></div>
                <div className="overlay5"></div>
              </div>
              <div className="arrowright">
                <img src={props.imgurl} alt="" />
              </div>
              <div className="introimgsdiv">
                <div className="overlay1">

                <div className="wrap">
                  <motion.div
                    className="imgdiv"
                    initial={{ rotate: 0 }} // Initial rotation angle
                    whileInView={{ rotate: 360 }} // Final rotation angle for each loop
                    transition={{
                      repeat: Infinity, // Infinite repetition
                      duration: 6, // Duration of each rotation
                      ease: "linear", // Easing function for smooth rotation
                    }}
                  >
                    <img
                      src="./assets/images/Intro/solar_settings.png"
                      alt=""
                    />
                  </motion.div>
                  <h5>installation</h5>
                </div>
                </div>
                <div className="overlay3"></div>
                <div className="overlay5"></div>
              </div>
              <div className="arrowright">
                <img src={props.imgurl} alt="" />
              </div>
              <div className="introimgsdiv">
                <div className="overlay1">

                <div className="wrap">
                  <motion.div
                    className="imgdiv"
                    initial={{ rotate: -10 }} // Initial position
                    whileInView={{ rotate: 10 }} // Final position
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      repeatType: "mirror", // Duration of each animation
                      // Delay between each repetition
                      ease: "linear", // Easing function
                    }}
                  >
                    <img
                      src="./assets/images/Intro/gear_icon_settings.png"
                      alt=""
                    />
                  </motion.div>
                  <h5>maintenance</h5>
                </div>
                </div>
                <div className="overlay3"></div>
                <div className="overlay5"></div>
              </div>
            </motion.div>
          </div>
          <div className="mobile">
            <motion.div
              className="introimgparts"
              initial={{ opacity: 0 }} // Initial state (invisible)
              whileInView={{ opacity: 1 }} // whileInView to fully visible
              transition={{ duration: 0.5 }}
            >
              <div className="grid-cols-2">

              <div className="introimgsdiv">
                <div className="overlay1">

                <div className="wrap">
                <motion.div
                    className="imgdiv"
                    initial={{ x: -10 }} // Initial position
                    whileInView={{ x: 10 }} // Final position
                    transition={{
                      duration: 4,
                      repeat: Infinity, // Repeat infinitely
                      repeatType: "mirror", // Smooth reverse back and forth
                      ease: "linear", // Easing function for constant smooth movement
                    }}
                  >
                    <img
                      src="./assets/images/Intro/carbon_delivery.png"
                      alt=""
                    />
                  </motion.div>
                  <h5>Supply</h5>
                </div>
                </div>
                <div className="overlay3"></div>
                <div className="overlay5"></div>
              </div>
            
              <div className="introimgsdiv">
                <div className="overlay1">

                <div className="wrap">
                <motion.div
                    className="imgdiv"
                    initial={{ rotate: 0 }} // Initial rotation angle
                    whileInView={{ rotate: 360 }} // Final rotation angle for each loop
                    transition={{
                      repeat: Infinity, // Infinite repetition
                      duration: 6, // Duration of each rotation
                      ease: "linear", // Easing function for smooth rotation
                    }}
                  >
                    <img
                      src="./assets/images/Intro/solar_settings.png"
                      alt=""
                    />
                  </motion.div>
                  <h5>installation</h5>
                </div>
                </div>
                <div className="overlay3"></div>
                <div className="overlay5">

                </div>
              </div>
              </div>
             
              <div className="introimgsdiv">
                <div className="overlay1">

                <div className="wrap">
                <motion.div
                    className="imgdiv"
                    initial={{ rotate: -10 }} // Initial position
                    whileInView={{ rotate: 10 }} // Final position
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      repeatType: "mirror", // Duration of each animation
                      // Delay between each repetition
                      ease: "linear", // Easing function
                    }}
                  >
                    <img
                      src="./assets/images/Intro/gear_icon_settings.png"
                      alt=""
                    />
                  </motion.div>
                  <h5>maintenance</h5>
                </div>
                </div>
                <div className="overlay3"></div>
                <div className="overlay5">

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroComp;
