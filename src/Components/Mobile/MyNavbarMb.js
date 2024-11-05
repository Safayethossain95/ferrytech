/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Accordion, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navbarApidata } from "../../utils/navbarApi";
const MyNavbarMb = () => {
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
  const navigate = useNavigate();
  const handletoggler = () => {
    var navtoggler = document.getElementById("nav-icon4");
    navtoggler.classList.toggle("open");

    var togglercollapse = document.getElementById("basic-navbar-nav");
    togglercollapse.classList.toggle("opened");
  };
  const handleLi = (mylink) => {
    navigate(mylink);
  };

  useEffect(() => {
    const navbar2 = document.getElementById("mynavbarmobi");
    function myFunction() {
      if (window.pageYOffset > 65) {
        navbar2.classList.add("stickymb");
        navbar2.classList.add("stickyit2");
      } else {
        navbar2.classList.remove("stickymb");
        navbar2.classList.remove("stickyit2");
      }
    }
    window.addEventListener("scroll", myFunction);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", myFunction);
    };
    // window.onscroll = function() {myFunction()};
  }, []);

  return (
    <>
      <div className="mynavbarmobi" id="mynavbarmobi" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <div className="img">
            <Link to="/">
              <img src="./assets/images/icon/favicon.jpg" alt="" />
            </Link>
          </div>
        </Navbar.Brand>

        <div className="navbar-toggler">
          <div className="nav-icon4-wrap" onClick={handletoggler}>
            <div id="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div id="basic-navbar-nav" className="opened">
          <Nav className="mainmenu mbContainer">
            <div className="wrapperlimit">
              {navbarApidata.map((item, key) => {
                if (item.childNavbarVm.length !== 0) {
                  return (
                    <Accordion className="admissionclass nav-item">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {" "}
                          <span>{item.menuName}</span>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {item.childNavbarVm.map((item2, key2) => {
                              return (
                                <li onClick={() => handleLi(item2.url)}>
                                  <div
                                    className={
                                      window.location.pathname == item2.url
                                        ? `wr active`
                                        : `wr`
                                    }
                                  >
                                    {item2.menuName}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                } else {
                  return (
                    <Nav.Item className="admissionclass" key={key}>
                      <NavLink
                        to={item.url}
                        className={
                          window.location.pathname == item.url ? `activei` : ``
                        }
                      >
                        {" "}
                        {item.menuName}
                      </NavLink>
                    </Nav.Item>
                  );
                }
              })}
            </div>
            <motion.div className="contactpart" initial={{ opacity:0  }}
                    whileInView={{
                      opacity:1,
                      transition: { delay:  0.4, duration: 0.3 },
                    }}>
              <div className="mbContainer">
                <div className="mail">
                  <a href="mailto:info@ferrytech.net">
                    <img src="./assets/images/icon/talk.png" alt="" />
                  </a>

                  <div className="wrap">
                    <p>talk to us</p>
                    <h4>
                      <p>
                        <a href="mailto:info@ferrytech.net">
                          info@ferrytech.net
                        </a>
                      </p>
                    </h4>
                  </div>
                </div>
                <div className="phone">
                  <a style={{ cursor: "pointer" }} href="tel:+8802333312349">
                    <img src="./assets/images/icon/phone.png" alt="" />
                  </a>
                  <div className="wrap">
                    <a
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "unset",
                      }}
                      href="tel:+8802333312349"
                    >
                      <p>call us now</p>
                      <h4>+8802333312349</h4>
                    </a>
                  </div>
                </div>
                <div className="downloadbutton">
                  <button>
                    <Link
                      to="/login"
                    >
                      Login
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default MyNavbarMb;
