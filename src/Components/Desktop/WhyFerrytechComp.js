/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { whyferrytechApi } from "../../utils/homepageApi";
import SubHeading from "./SubComponents/SubHeading";
const WhyFerrytechComp = (props) => {
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
      <div className="whyferrytech ">
        <SubHeading version="mobile" subheading="Why FerryTech?" />
        <Row className="mx-0 align-items-center mobile">
          <Col xs={12} lg={6} className="px-0">
            <div
              className="imgwgymb"
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="w-100"
                src="./assets/images/Mobile/homepage/whyferrytech/main.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <div
          className={
            props.version == "mobile"
              ? "myContainer"
              : screenSize.dynamicWidth >= 1200 &&
                screenSize.dynamicWidth <= 1399
              ? "myContainerMinimini"
              : screenSize.dynamicWidth >= 992 &&
                screenSize.dynamicWidth <= 1199
              ? "myContainer896"
              : "myContainerMini"
          }
        >
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="desktop">
              <motion.div
                initial={{ scale: 0.97,opacity: 0.5}}
                whileInView={{ scale: 1,opacity: 1  }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeIn" }}
                className="imgwgy"
              >
                <img
                  className="w-100"
                  src="./assets/images/whyferrytech/1.png"
                  alt=""
                />
              </motion.div>
            </Col>
            <Col
              xs={12}
              lg={6}
              style={
                props.version == "mobile"
                  ? { paddingLeft: "0px" }
                  : { paddingLeft: "60px" }
              }
            >
              <SubHeading version="desktop" subheading="Why FerryTech?" />
              <Row>
                {whyferrytechApi.map((item, key) => {
                  return props.version == "mobile" ? (
                    <Col
                      xs={6}
                      className="cardd"
                      data-aos-delay="500"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div
                        className="smcard"
                        key={key}
                        style={
                          props.version == "mobile"
                            ? { flexDirection: "column" }
                            : { flexDirection: "row" }
                        }
                      >
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="text">
                          <h4>{item.heading}</h4>
                          <p>{item.paragraph}</p>
                        </div>
                      </div>
                    </Col>
                  ) : (
                    <motion.div
                      className="smcard"
                      initial={{ opacity: 0, x: 20 }} // Initial position
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: key * 0.2,
                        ease: "linear",
                      }}
                      key={key}
                    >
                      <div className="img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="text">
                        <h4>{item.heading}</h4>
                        <p>{item.paragraph}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default WhyFerrytechComp;
