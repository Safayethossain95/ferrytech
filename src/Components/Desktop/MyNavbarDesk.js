/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { navbarApidata } from "../../utils/navbarApi";
const MyNavbarDesk = () => {
  useEffect(() => {
    const navbar = document.getElementById("mynavbardesk");

    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        navbar.classList.add("sticky");
        navbar.classList.add("stickyit");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("stickyit");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Navbar id="mynavbardesk" className="mynavbardesk" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <div className="img">
              <img src="/assets/images/Logo/logo.jpg" alt="" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {navbarApidata.map((element, index) => {
              const isChildValue = element.childNavbarVm;
              return (
                <Link
                  key={element.menuId}
                  className={
                    element.childNavbarVm.some(
                      (child) => window.location.pathname === child.url
                    )
                      ? "admissionclass activei"
                      : "admissionclass"
                  }
                  to={element.url}
                >
                  {element.childNavbarVm.length != 0 ? (
                    <>
                      {element.menuName} <BsChevronDown />
                      <div className="admissionmenu">
                        <ul>
                          {element.childNavbarVm.map((item, key) => {
                            return (
                              <li key={item.menuId}>
                                <Link
                                  className={
                                    window.location.pathname == item.url
                                      ? `activei`
                                      : ``
                                  }
                                  to={item.url}
                                >
                                  {item.menuName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <p
                        className={
                          window.location.pathname == element.url
                            ? `activei`
                            : ``
                        }
                      >
                        {element.menuName}
                      </p>{" "}
                    </>
                  )}
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <div className="contactpart">
          <div className="phone">
            <a style={{ cursor: "pointer" }} href="tel:+8802333312349">
              <img src="/assets/images/icon/phone.png" alt="" />
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
          <div className="mail">
            <a href="mailto:hq@ferrytech.net">
              <img src="/assets/images/icon/talk.png" alt="" />
            </a>

            <div className="wrap">
              <p>talk to us</p>
              <h4>
                <p>
                  <a href="mailto:hq@ferrytech.net">hq@ferrytech.net</a>
                </p>
              </h4>
            </div>
          </div>
          <div className="downloadbutton">
            <button>
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </div>
        </div>
      </Navbar>

      {/* <Navbar expand="lg">
        <div className="myContainer">
          <div className="headerwrapper">
            <Navbar.Brand href="#" className="smallbrandv">
            <div className="img">
                    <img src="/assets/images/Logo/logo.jpg" alt="" />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navbarApidata.map((element, index) => {
                  const isChildValue = element.childNavbarVm;
                  return (
                    <Link
                      key={element.menuId}
                      className="admissionclass"
                      to={element.url}
                      
                    >
                      {element.childNavbarVm.length != 0 ? (
                        <>
                          {element.menuName} <BsChevronDown />
                          <div className="admissionmenu">
                            <ul>
                              {element.childNavbarVm.map((item, key) => {
                                return (
                                  <li key={item.menuId}>
                                    <Link
                                      
                                      to={item.url}
                                      
                                    >
                                      {item.menuName}
                                      
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>{element.menuName}</>
                      )}
                    </Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
            <Link to ="/applyonline" className="appplybutton">
              Apply Online{" "}
              <img src="/assets/images/icons/arrowright.png" alt="" />{" "}
            </Link>
          </div>
        </div>
      </Navbar> */}
    </>
  );
};

export default MyNavbarDesk;
