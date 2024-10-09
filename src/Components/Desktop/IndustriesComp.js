/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { indcardApi } from "../../utils/homepageApi";
import SubHeading from "./SubComponents/SubHeading";
const IndustriesComp = (props) => {
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
      <div className="industriescomp">
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
          <SubHeading
            version={props.version == "mobile" ? "mobile" : ""}
            subheading="Industries we serve"
          />

          <Row className="indcardwrap">
            {indcardApi.map((item, key) => {
              return (
                <Col xs={6} lg={6} key={key}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    whileInView={{
                      scale: 1.01, // Scale up to 1.06
                      opacity: 1,
                      transition: { delay: key * 0.2, duration: 0.5 },
                    }}
                    onAnimationComplete={(definition) => {
                      // Reset the scale back to 1 after zooming in
                      if (definition.scale === 1.02) {
                        definition.scale = 1; // Reset scale to 1
                      }
                    }}
                    viewport={{ once: true }}
                    className="indcard"
                  >
                    <div className="overlay2"></div>
                    <div className="overlay">
                      <h4>{item.heading}</h4>
                    </div>
                    <img src={item.imgurl} alt="" />
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default IndustriesComp;
