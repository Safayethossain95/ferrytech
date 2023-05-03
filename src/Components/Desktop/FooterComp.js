import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom';
const FooterComp = () => {
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

      

  return (
    <>
        <div className="footer">
        <div className={screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>
            <div className="footerflexwrap">


            <div className="item logopart">
                <img  src="./assets/images/footer/footer_logo.png" alt="" />
            </div>
            <div className="item contacts">
                <div className="wrap">
                    <h5>Contact</h5>
                    <ul>
                        <li> <a href="tel:+880 123 456 789">+880 123 456 789</a></li>
                        <li><a href="mailto:exampleinfo@gmail.com 789">exampleinfo@gmail.com</a></li>
                        <li> <a target="_blank" href="https://goo.gl/maps/ipSgQkeAQPZSviu47">123  motijhill, dhaka- 1200</a></li>
                    </ul>
                   
                    
                   
                </div>
            </div>
            <div className="item support">
                <div className="wrap">
                    <h5>Support</h5>
                    <Link to="/">Warranty Info</Link> <br/>
                    <Link to="/">Aftersales service</Link> <br/>
                    <Link to="/">Brochures</Link>
                </div>
            </div>
            <div className="item">
                <div className="wrap">
                    <h5>Legal</h5>
                    <Link to="/">Privacy Policy</Link> <br/>
                    <Link to="/">Cookies Information</Link> <br/>
                    <Link to="/">Terms and Conditions</Link>
                </div>
            </div>
            </div>
        </div>
            <div className="copyright">
                <p>&copy; This website is copyrighted by BSSIT 2023</p>
            </div>
        </div>
    </>
  )
}

export default FooterComp