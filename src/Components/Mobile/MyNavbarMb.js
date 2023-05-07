import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { navbarApidata } from '../../utils/navbarApi';
const MyNavbarMb = () => {
    const handletoggler=()=>{
        var navtoggler = document.getElementById("nav-icon4");
        navtoggler.classList.toggle('open');

        var togglercollapse = document.getElementById("basic-navbar-nav");
        togglercollapse.classList.toggle("opened")
      }
  return (
    <>
         <div className="mynavbarmobi" bg="light" expand="lg">
      
      <Navbar.Brand href="#home">
      <div className="img">
                  <img src="./assets/images/Logo/logo.png" alt="" />
              </div>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" > */}
      <div className="navbar-toggler">

      <div className="nav-icon4-wrap" onClick={handletoggler}>
        <div id="nav-icon4">
                  <span></span>
                  <span></span>
                  <span></span>

        </div>
      </div>
      </div>
                
      {/* </Navbar.Toggle> */}
      <div id="basic-navbar-nav" className='opened'>
      <Nav className="me-auto mainmenu">
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
      </div>
      {/* <div className="contactpart">
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
      </div> */}
  </div>
    </>
  )
}

export default MyNavbarMb