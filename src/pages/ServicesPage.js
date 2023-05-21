import React,{useEffect} from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import ServiceMainComp from '../Components/Desktop/Pages/Services/ServiceMainComp'
import { servicesmainAPI } from '../utils/servicesApi'
import '../sass/sassFiles/desktop/servicespage.scss'
import '../sass/sassFiles/mobile/servicespagemb.scss'
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServicesPage = () => {
  useEffect(() => {
    AOS.init({once:true});
    
  }, [])
  return (
    <>
        <div className="desktop">
            <MyNavbarDesk/>
            <ServiceMainComp myprops={servicesmainAPI} />
            <ReqAquoteComp/>
            <FooterComp/>
        </div>
        <div className="mobile">
            <MyNavbarMb/>
            <ServiceMainComp version="mobile" myprops={servicesmainAPI} />
            <ReqAquoteComp version="mobile"/>
            <FooterComp version="mobile"/>
        </div>
    </>
  )
}

export default ServicesPage