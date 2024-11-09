/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ContactBannerMb = (props) => {
  return (
    <>
      <div className="contactbanner">
        <img
          className="bg w-100"
          src="./assets/images/Mobile/Banner/bannermb.png"
          alt=""
        />

        <div className="overlay d-flex align-items-end justify-content-center">
          <div className={`mbContainer`}>
            <Row>
              <Col lg={4} xs={12}>
                <motion.div
                  className="contactbarcard"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    duration: 2,
                    type: "tween",
                    stiffness: 30,
                  }}
                >
                <div className="wrap">
                    <div className="upperpart">
                      <div className="contentup">
                        <h4>
                          <MdLocationOn style={{ fontSize: "25px" }} /> Location
                        </h4>
                      </div>
                    </div>
                    <div className="lowerpart">
                      <div className="contentdown">
                        <h4>Corporate Office</h4>
                        <p>
                          {" "}
                          <a
                            target="_blank"
                            href="https://goo.gl/maps/A6DVWbZTkcA6qMvp6"
                          >
                            House# 79, Flat# 2B, Road# 12/A, Dhanmondi, Dhaka,
                            Bangladesh.
                          </a>{" "} <br/> <a>Fax: +88 02 9142822</a>
                        </p>
                      </div>
                      <div className="contentdown">
                        <h4>Chittagong Office</h4>
                        <p>
                          {" "}
                          <a
                            target="_blank"
                            href="https://maps.app.goo.gl/ZdwvJfXuP8Dy2uGz8"
                          >
                            Lokman Tower (4th Floor),1646 Sheikh Mujib Road
                            Chowmuhani, Chittagong, Bangladesh.
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={4} xs={12}>
                <motion.div
                  className="contactbarcard"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    duration: 2,
                    type: "tween",
                    stiffness: 30,
                  }}
                >
                  <div className="wrap">
                    <div className="upperpart">
                      <div className="contentup">
                        <h4>
                          <FaPhone
                            style={{
                              transform: "rotate(90deg)",
                              fontSize: "20px",
                            }}
                          />{" "}
                          Phone Number
                        </h4>
                      </div>
                    </div>
                    <div className="lowerpart">
                      <div className="contentdown">
                        <p>
                          <a href="tel:+8802333312349">+8802333312349</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={4} xs={12}>
                <motion.div
                  className="contactbarcard"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    duration: 2,
                    type: "tween",
                    stiffness: 30,
                  }}
                >
                  <div className="wrap">
                    <div className="upperpart">
                      <div className="contentup">
                        <h4>
                          <AiOutlineMail style={{ fontSize: "25px" }} /> Email
                          Us
                        </h4>
                      </div>
                    </div>
                    <div className="lowerpart">
                      <div className="contentdown">
                        <p>
                          <a href="mailto:hq@ferrytech.net">hq@ferrytech.net</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBannerMb;
