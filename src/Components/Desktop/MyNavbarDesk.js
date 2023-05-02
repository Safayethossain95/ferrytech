import React from 'react'
import { navbarApidata } from '../../utils/navbarApi';
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
const MyNavbarDesk = () => {
  return (
    <>
       
            
       <Navbar className="mynavbardesk" bg="light" expand="lg">
      
        <Navbar.Brand href="#home">
        <div className="img">
                    <img src="./assets/images/Logo/logo.png" alt="" />
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                {navbarApidata.map((element, index) => {
                  const isChildValue = element.childNavbarVm;
                  return (
                    <NavLink
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
                                    <NavLink
                                      
                                      to={item.url}
                                      
                                    >
                                      {item.menuName}
                                      
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>{element.menuName}</>
                      )}
                    </NavLink>
                  );
                })}
              </Nav>
        </Navbar.Collapse>
        <div className="contactpart">
            <div className="phone">
                <img src="./assets/images/icon/phone.png" alt="" />
                <div className="wrap">
                    <p>call us now</p>
                    <h4>+088 123 456 789</h4>
                </div>
            </div>
            <div className="mail">
                <img src="./assets/images/icon/talk.png" alt="" />
                <div className="wrap">
                    <p>call us now</p>
                    <h4>+088 123 456 789</h4>
                </div>
            </div>
            <div className="downloadbutton">
                <button>Download Brochures <img src="./assets/images/icon/arrsm.png" alt="" /></button>
            </div>
        </div>
    </Navbar>
           
            {/* <Navbar expand="lg">
        <div className="myContainer">
          <div className="headerwrapper">
            <Navbar.Brand href="#" className="smallbrandv">
            <div className="img">
                    <img src="./assets/images/Logo/logo.png" alt="" />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navbarApidata.map((element, index) => {
                  const isChildValue = element.childNavbarVm;
                  return (
                    <NavLink
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
                                    <NavLink
                                      
                                      to={item.url}
                                      
                                    >
                                      {item.menuName}
                                      
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>{element.menuName}</>
                      )}
                    </NavLink>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
            <Link to ="/applyonline" className="appplybutton">
              Apply Online{" "}
              <img src="./assets/images/icons/arrowright.png" alt="" />{" "}
            </Link>
          </div>
        </div>
      </Navbar> */}
         
        
    </>
  )
}

export default MyNavbarDesk