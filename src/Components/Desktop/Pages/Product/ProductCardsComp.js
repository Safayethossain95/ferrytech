/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
const ProductCardsComp = (props) => {
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
      <div className="productcardscomp">
        <div
          className={
            props.version == "mobile"
              ? "mbContainer"
              : screenSize.dynamicWidth >= 992 &&
                screenSize.dynamicWidth <= 1199
              ? "myContainer896"
              : screenSize.dynamicWidth >= 1200 &&
                screenSize.dynamicWidth <= 1399
              ? "myContainerMinimini"
              : "myContainerMini"
          }
        >
          <motion.div
            className="heading"
            initial={{ opacity: 0, y: 0 }} // Initial position
            whileInView={{ opacity: 1, y: -20 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "linear",
            }}
          >
            <h5>{props.data.heading}</h5>
            <p>{props.data.para}</p>
          </motion.div>
          <div className="cardsloop">
            <Row>
              {props.data.card.map((item, key) => {
                return (
                  <Col lg={4} key={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        y: -20,
                        transition: { delay: 0.3 },
                      }}
                      transition={{
                        duration: 2,
                        delay: key * 0.5,
                        ease: "easeInOut",
                      }}
                      className="pcard"
                    >
                      <img src={item.imgurl} alt="" />

                      <div className="pcarddetails">
                        <h5>{item.name}</h5>
                        <p>{item.detail}</p>
                      </div>

                      <div className="pcardbutton">
                        <button className="w-75 mx-2">
                          view details{" "}
                          <span>
                            <img
                              src="./assets/images/ProductPage/cards/arr.png"
                              alt=""
                            />
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardsComp;
