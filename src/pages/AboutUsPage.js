import React,{useEffect} from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import AboutBannerComp from '../Components/Desktop/Pages/AboutUs/AboutBannerComp'
import '../sass/sassFiles/desktop/aboutuspage.scss'
import '../sass/sassFiles/mobile/aboutuspagemb.scss'
import AboutFerrytechComp from '../Components/Desktop/Pages/AboutUs/AboutFerrytechComp'

import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp'
import FAQComp from '../Components/Desktop/Pages/AboutUs/FAQComp'
import AboutBannerCompmb from '../Components/Mobile/AboutUsPage/AboutBannerCompmb'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ConstructionQuote from '../Components/Desktop/Pages/AboutUs/ConstructionQuote'
import MeetOurFactory from '../Components/Desktop/Pages/AboutUs/MeetOurFactory'
import MeetOurCertificate from '../Components/Desktop/Pages/AboutUs/MeetOurCertificate'
const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({once:true});
    
  }, [])
  
  
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <AboutBannerCompmb version="mobile"/>
        
        <AboutFerrytechComp version="mobile"/>
        <ConstructionQuote version="mobile"/>
        <MeetOurFactory version="mobile"/>
        <MeetOurCertificate version="mobile"/>
        {/* <WhyFerrytechComp version="mobile"/> */}
        <FAQComp version="mobile"/>
        <FooterComp version="mobile"/>
    </div>
    
    <div className="desktop">
        
        <MyNavbarDesk/>
        <AboutBannerComp/>
        <AboutFerrytechComp/>
        <ConstructionQuote/>
        <MeetOurFactory/>
        <MeetOurCertificate/>
        {/* <WhyFerrytechComp/> */}
        <FAQComp/>
        <ReqAquoteComp />
        <FooterComp/>
    </div>
    </>
  )
}

export default AboutUsPage