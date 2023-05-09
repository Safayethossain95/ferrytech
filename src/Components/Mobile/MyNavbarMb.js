import React,{useEffect,useState} from 'react'
import { Navbar,Nav,Accordion } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import  { navbarApidata } from '../../utils/navbarApi';
import { navbarApi } from '../../utils/homepageApi';
import { useNavigate } from 'react-router-dom';
const MyNavbarMb = () => {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
        
    })
  }, [screenSize])
  const navigate = useNavigate()
    const handletoggler=()=>{
        var navtoggler = document.getElementById("nav-icon4");
        navtoggler.classList.toggle('open');

        var togglercollapse = document.getElementById("basic-navbar-nav");
        togglercollapse.classList.toggle("opened")
      }
      const handleLi = (mylink)=>{
        navigate(mylink)
       
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
     

            <Nav className="mainmenu mbContainer">

             {
                        navbarApidata.map((item,key)=>{
                            if(item.childNavbarVm.length!==0){
                                return(
                                  <Accordion className='admissionclass nav-item'>
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header> <span>{item.menuName}</span> </Accordion.Header>
                                    <Accordion.Body>
                                    <ul>
                                    { item.childNavbarVm.map((item2,key2)=>{
                                      return(
                                        <li onClick={()=>handleLi(item2.url)}> 
                                        <div className={window.location.pathname==item2.url?`wr active`:`wr`}>
                                          {item2.menuName}
                                          </div>
                                           </li>
                                      )
                                    })}
          
                                  </ul>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                                )
          
                              }else{
                                return(
                                
                                    <Nav.Item className='admissionclass' key={key}>
                                    <NavLink to={item.url} className={window.location.pathname==item.url?`activei`:``}> {item.menuName}</NavLink>
                                    </Nav.Item>
                                )
                              }
                            
                        })
                    }
            </Nav>
           
     
      <div className="contactpart ">
        <div className="mbContainer">

          <div className="mail">
              <img src="./assets/images/icon/talk.png" alt="" />
              <div className="wrap">
                  <p>call us now</p>
                  <h4>+088 123 456 789</h4>
              </div>
          </div>
          <div className="phone">
              <img src="./assets/images/icon/phone.png" alt="" />
              <div className="wrap">
                  <p>call us now</p>
                  <h4>+088 123 456 789</h4>
              </div>
          </div>
          <div className="downloadbutton">
              <button>Download Brochures <img src="./assets/images/icon/arrsm.png" alt="" /></button>
          </div>
        </div>
      </div>
      </div>
  </div>
    </>
  )
}

export default MyNavbarMb