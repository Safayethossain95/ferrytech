/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const AboutFerrytechComp = (props) => {
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
  return (
    <>
      <div className="aboutferrytech">
        {/* <SubHeading version={props.version=="mobile"?"mobile":""} subheading="About Ferrytech"/> */}
        <div
          className={
            props.version == "mobile"
              ? "mbContainer"
              : screenSize.dynamicWidth >= 1200 &&
                screenSize.dynamicWidth <= 1399
              ? "myContainerMinimini"
              : screenSize.dynamicWidth >= 992 &&
                screenSize.dynamicWidth <= 1199
              ? "myContainer896"
              : "myContainerMini"
          }
        >
          <div className="para">
            <Row>
              <Col lg={6}>
                <div className="leftside">
                  <motion.h6
                    initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 1 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}
                  >
                    ABOUT US
                  </motion.h6>

                  <motion.h2  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 2 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>
                    Get the Job Done <span>Right</span> with our Cranes and
                    Heavy Equipment!
                  </motion.h2>
                  <motion.p  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 3 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>
                    With advanced manufacturing technology and resource
                    advantages in industrial clusters, ACEDO has generated 3
                    major business division - cranes, construction parts,
                    customized structures, and ACEDO team is always capable to
                    supply you all kinds of quality machinery products no matter
                    you are brands owners, dealers or end users.
                  </motion.p>
                  <motion.p  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 4 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>
                    Since the establishment of the company, our equipment has
                    been exported to India, Türkiye, Nigeria, Uganda, Indonesia
                    and other countries and regions, and is highly trusted and
                    praised.
                  </motion.p>

                  <div className="mt-4 listitems d-flex gap-4">
                    <motion.ul  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 5 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        25years+ Experience
                      </li>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Advanced Technology
                      </li>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Excellent Quality
                      </li>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Diversified Product Line
                      </li>
                    </motion.ul>
                    <motion.ul  initial={{ opacity: 0 , y:-5}}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 5 * 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false }}>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Professional Services
                      </li>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Innovation and R&D
                      </li>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Environment Protection
                      </li>
                      <li>
                        <MdOutlineKeyboardDoubleArrowRight fill="#005DBA" />
                        Energy Conservation
                      </li>
                    </motion.ul>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <img
                  className="w-100"
                  src="./assets/images/AboutPage/manstein.webp"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFerrytechComp;
