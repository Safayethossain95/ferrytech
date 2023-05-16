import React,{useEffect} from 'react'
import { navbarApidata } from '../../utils/navbarApi';
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
const MyNavbarDesk = () => {
  
  useEffect(()=>{
    const navbar = document.getElementById("mynavbardesk")
    function myFunction() {
     
      if(window.pageYOffset > 99){
        navbar.classList.add("sticky");
      }else{
        navbar.classList.remove("sticky");
      }
     
    }
    window.onscroll = function() {myFunction()};
  },[])
  
  
 
  return (
    <>
       
            
       <Navbar id="mynavbardesk" className="mynavbardesk" bg="light" expand="lg">
      
        <Navbar.Brand href="#home">
        <div className="img">
                    <img src="./assets/images/Logo/logo.png" alt="" />
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
        <Nav className="me-auto">
                {navbarApidata.map((element, index) => {
                  const isChildValue = element.childNavbarVm;
                  return (
                    <NavLink
                      key={element.menuId}
                      className={window.location.pathname==element.url?"admissionclass activei":"admissionclass"}
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
                                      className={window.location.pathname==item.url?`activei`:``}
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
                        <> <p className={window.location.pathname==element.url?`activei`:``}>{element.menuName}</p> </>
                      )}
                    </NavLink>
                  );
                })}
              </Nav>
        </Navbar.Collapse>
        <div className="contactpart">
            <div className="phone">
                <a href="tel:+088 123 456 789"><img src="./assets/images/icon/phone.png" alt="" /></a>
                <div className="wrap">
                    <p>call us now</p>
                    <h4>+088 123 456 789</h4>
                </div>
            </div>
            <div className="mail">
              <a href="mailto:help@ferrytech.com"><img src="./assets/images/icon/talk.png" alt="" /></a>
                
                <div className="wrap">
                    <p>talk to us</p>
                    <h4>help@ferrytech.com</h4>
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