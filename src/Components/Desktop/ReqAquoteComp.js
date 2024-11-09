/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Element } from "react-scroll";
import SubHeading from "./SubComponents/SubHeading";

const ReqAquoteComp = (props) => {
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

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    messagesubject: "",
    message: "",
  });

  const [namelabel, setnamelabel] = useState("");
  const [emaillabel, setemaillabel] = useState("");
  const [phonelabel, setphonelabel] = useState("");
  const [messagesublabel, setmessagesubjectlabel] = useState("");
  const [messagelabel, setmessagelabel] = useState("");

  const [bordername, setbordername] = useState("");
  const [borderemail, setborderemail] = useState("");
  const [borderphone, setborderphone] = useState("");
  const [bordermesgsub, setbordermsgsub] = useState("");
  const [bordermesg, setbordermsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.name.length > 20) {
      setnamelabel("less than 50 characters required");
      setbordername(true);
    } else if (formdata.name.length < 3) {
      setnamelabel("minimum 3 characters required");
      setbordername(true);
    } else if (formdata.name.length == 0) {
      setnamelabel("First Name Required");
      setbordername(true);
    } else {
      setnamelabel("");
      setbordername(false);
    }

    if (formdata.email.length == 0) {
      setemaillabel("Email is required");
      setborderemail(true);
    } else if (formdata.email && !/\S+@\S+\.\S+/.test(formdata.email)) {
      setemaillabel("Email format is incorrect");
      setborderemail(true);
    } else {
      setemaillabel("");
      setborderemail(false);
    }

    if (formdata.phone.length == 0) {
      setphonelabel("Phone is required");
      setborderphone(true);
    } else if (formdata.phone.length < 11) {
      setphonelabel("Phone should be 11 numbers");
      setborderphone(true);
    } else {
      setphonelabel("");
      setborderphone(false);
    }
    if (formdata.messagesubject.length == 0) {
      setmessagesubjectlabel("subject is required");
      setbordermsgsub(true);
    } else if (formdata.messagesubject.length < 20) {
      setmessagesubjectlabel("subject shoult be more than 20 characters");
      setbordermsgsub(true);
    } else {
      setmessagesubjectlabel("");
      setbordermsgsub(false);
    }
    if (formdata.message.length == 0) {
      setmessagelabel("message is required");
      setbordermsg(true);
    } else if (formdata.message.length < 50) {
      setmessagelabel("message shoult be more than 50 characters");
      setbordermsg(true);
    } else {
      setmessagelabel("");
      setbordermsg(false);
    }

    if (
      namelabel == "" &&
      emaillabel == "" &&
      phonelabel == "" &&
      messagesublabel == "" &&
      messagelabel == ""
    ) {
      console.log("Done");
    }
  };

  const handleInput = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Element name="reqaquote" className="reqaquote" id="reqaquote">
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
          <SubHeading
            version={props.version == "mobile" ? "mobile" : ""}
            subheading="Request a quote"
          />

          <Row>
            <Col lg={8}>
              <div className="para">
                <p>
                  Fill all your information we will reach to you with budget
                  planning and best deal. You can also download our brochures
                  for get budget ideas.
                  <a
                    href="./assets/brochure/ferrytech_brochures_compressed.pdf"
                    target="_blank"
                  >
                    <span>
                      Download Brochures{" "}
                      <img src="./assets/images/reqaquote/Arrow.png" alt="  " />
                    </span>
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <div>
              <Row className="Form">
                <Col lg={7}>
                  <Row>
                    <Col lg={6}>
                      <div className="basicinput">
                        <div className="inputgap">
                          <input
                            style={
                              bordername
                                ? { borderColor: "rgb(237, 28, 36)" }
                                : { borderColor: "rgba(0,0,0,1)" }
                            }
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formdata.name}
                            onChange={handleInput}
                          />
                          <label>{namelabel}</label>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="basicinput">
                        <div className="inputgap">
                          <input
                            style={
                              borderemail
                                ? { borderColor: "rgb(237, 28, 36)" }
                                : { borderColor: "rgba(0,0,0,1)" }
                            }
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formdata.email}
                            onChange={handleInput}
                          />
                          <label>{emaillabel}</label>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="basicinput">
                        <div className="inputgap">
                          <input
                            style={
                              borderphone
                                ? { borderColor: "rgb(237, 28, 36)" }
                                : { borderColor: "rgba(0,0,0,1)" }
                            }
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={formdata.phone}
                            onChange={handleInput}
                            maxLength={11}
                          />
                          <label>{phonelabel}</label>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="basicinput">
                        <div className="inputgap">
                          <input
                            style={
                              bordermesgsub
                                ? { borderColor: "rgb(237, 28, 36)" }
                                : { borderColor: "rgba(0,0,0,1)" }
                            }
                            type="text"
                            placeholder="Message Subject"
                            name="messagesubject"
                            value={formdata.messagesubject}
                            onChange={handleInput}
                          />
                          <label>{messagesublabel}</label>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="basicinput marginremove">
                        <div className="inputgap">
                          <textarea
                            style={
                              bordermesg
                                ? { borderColor: "rgb(237, 28, 36)" }
                                : { borderColor: "rgba(0,0,0,1)" }
                            }
                            type="text"
                            placeholder="Message Subject"
                            name="message"
                            value={formdata.message}
                            onChange={handleInput}
                          ></textarea>
                          <label>{messagelabel}</label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={5} className="desktop">
                  <div className="contactcard">
                  <div className="item">
                    <div className="wrap">
                    <div className="upperpart">
                      <div className="contentup">
                        <h4>
                        Location
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
                          </a>{" "} <a>Fax: +88 02 9142822</a>
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
                    </div>
                    <div className="item">
                      <h4>Contact Number</h4>
                      <a href="tel:+8802333312349">+8802333312349</a>
                    </div>
                    <div className="item d-flex flex-column">
                      <h4>Email</h4>
                      <a href="mailto:hq@ferrytech.net">hq@ferrytech.net</a>
                    </div>
                    
                  </div>
                </Col>
                <Col lg={12} className="desktop">
                  <div className="submitbutton text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </Col>
                <Col lg={12} className="mobile">
                  <div className="submitbutton text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </Col>
                <Col lg={5} xs={12} className="mobile">
                  <div className="contactcard">
                  <div className="item">
                    <div className="wrap">
                    <div className="upperpart">
                      <div className="contentup">
                        <h4>
                        Location
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
                          </a>{" "}
                          <a>Fax: +88 02 9142822</a>
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
                    </div>
                    <div className="item">
                      <h4>Contact Number</h4>
                      <a href="tel:+8802333312349">+8802333312349</a>
                    </div>
                    <div className="item d-flex flex-column">
                      <h4>Email</h4>
                      <a href="mailto:hq@ferrytech.net">hq@ferrytech.net</a>
                    </div>
                
                  </div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Element>
    </>
  );
};

export default ReqAquoteComp;
