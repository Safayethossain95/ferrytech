/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
const FooterComp = (props) => {
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
      <div className="footer">
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
          <div className="desktop">
            <div className="footerflexwrap ">
              <div className="item logopart">
                <div className="wrapper">
                  <div className="ftlogowrap">
                    <img
                      style={{ width: "200px" }}
                      src="./assets/images/Logo/footer-logo.jpg"
                      alt=""
                    />
                  </div>

                  <p>
                    we are committed to providing top quality heavy equipment
                    that empowers construction professionals to tackle projects
                    of any size with confidence and efficiency.
                  </p>
                </div>
              </div>
             
              <div className="item support">
                <div className="wrap">
                  <h5>Legal</h5>
                  <ul>
                    <Link to="/privacy-policy">Privacy Policy</Link> <br />
                    <Link to="/cookies-information">
                      Cookies Information
                    </Link>{" "}
                    <br />
                    <Link to="/terms-conditions">Terms and Conditions</Link>
                  </ul>
                </div>
              </div>
              <div className="item ">
                <div className="wrap">
                  <h5>Documents</h5>
                  <ul>
                    <a
                      href="./assets/brochure/ferrytech_brochures_compressed.pdf"
                      target="_blank"
                      style={{ marginBottom: "10px" }}
                    >
                      Brochures
                    </a>{" "}
                    <br />
                  </ul>
                </div>
                <div className="wrap">
                  <h5>Contact</h5>
                  <ul>
                    <div className="icons">
                    <li>
                      {" "}
                      <a href="tel:+8802333312349">+8802333312349</a>
                    </li>
                    <li>
                      <a href="mailto:hq@ferrytech.net">hq@ferrytech.net</a>
                    </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="item contacts">
                <div className="wrap">
                  <h5>Location</h5>
                  <ul>
                    
                    <li>
                      {" "}
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/qHrUDGWx5JT6GPXt6"
                        rel="noreferrer"
                      >
                        Corporate Office: House# 79, Flat# 2B, Road# 12/A, Dhanmondi, Dhaka,
                        Bangladesh. Fax: +88 02 9142822
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/qHrUDGWx5JT6GPXt6"
                        rel="noreferrer"
                      >
                       Chittagong Office: Lokman Tower (4th Floor),1646 Sheikh Mujib Road Chowmuhani, Chittagong, Bangladesh.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="item ">
                {/* <div className="wrap">
                    <h5>Support</h5>
                    <Link to="/">Warranty Info</Link> <br/>
                    <Link to="/">Aftersales service</Link> <br/>
                    <Link to="/">Brochures</Link>
                </div> */}
              {/* </div>  */}
            </div>
          </div>
          <div className="mobile">
            <div className="footerflexwrap">
              <div className="item logopart">
                <div className="wrapper">
                  <div className="ftlogowrap">
                    <img
                      style={{ width: "200px" }}
                      src="./assets/images/Logo/footer-logo.jpg"
                      alt=""
                    />
                  </div>

                  <p>
                    we are committed to providing top quality heavy equipment
                    that empowers construction professionals to tackle projects
                    of any size with confidence and efficiency.
                  </p>
                </div>
              </div>
              <Row>
                <Col xs={12}>
                <div className="item contacts">
                <div className="wrap">
                  <h5>Location</h5>
                  <ul>
                   
                    <li>
                      {" "}
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/qHrUDGWx5JT6GPXt6"
                        rel="noreferrer"
                      >
                        Corporate Office: House# 79, Flat# 2B, Road# 12/A, Dhanmondi, Dhaka,
                        Bangladesh.  Fax: +88 02 9142822
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/qHrUDGWx5JT6GPXt6"
                        rel="noreferrer"
                      >
                       Chittagong Office: Lokman Tower (4th Floor),1646 Sheikh Mujib Road Chowmuhani, Chittagong, Bangladesh.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
                </Col>
                <Col xs={6}>
                  <div className="item ">
                    <div className="wrap">
                      <h5>Documents</h5>
                      <ul>
                        <a
                          href="./assets/brochure/ferrytech_brochures_compressed.pdf"
                          target="_blank"
                          style={{ marginBottom: "10px" }}
                        >
                          Brochures
                        </a>{" "}
                        <br />
                      </ul>
                    </div>
                    <div className="wrap">
                      <h5>Contact</h5>

                      <ul>
                      <li>
                      {" "}
                      <a href="tel:+8802333312349">+8802333312349</a>
                    </li>
                    <li>
                      <a href="mailto:hq@ferrytech.net">hq@ferrytech.net</a>
                    </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="item">
                    <div className="wrap">
                      <h5>Legal</h5>
                      <ul>
                        <Link to="/privacy-policy">Privacy Policy</Link> <br />
                        <Link to="/cookies-information">
                          Cookies Information
                        </Link>{" "}
                        <br />
                        <Link to="/terms-conditions">Terms and Conditions</Link>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Website copyright &copy; BSSIT 2024</p>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
