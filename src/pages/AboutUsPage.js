import React,{useEffect, useState} from 'react'
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
import { partnerbrandsApi } from '../utils/homepageApi'
import { API_URL, Only_Frontend } from '../config'
import axios from 'axios'
const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({once:true});
    
  }, [])
  const [partnerbrandsApifinal,setpartnerbrandsApi] = useState([])
  useEffect(()=>{
    const fetchProducts = async () => {
        
      try {
        if(Only_Frontend){
  
          setpartnerbrandsApi(partnerbrandsApi)
          console.log("frontend")
        }else{
          const partnerbrandsdata = await axios.get(`${API_URL}/partnerbrandsget`);
          setpartnerbrandsApi(partnerbrandsdata.data)
          console.log("backend")
        }
      } catch (error) {
        console.log(error.message || 'Something went wrong');
      } 
    };
   
    fetchProducts();
   },[])
  
  
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <AboutBannerCompmb version="mobile"/>
        
        <AboutFerrytechComp version="mobile"/>
        <ConstructionQuote version="mobile" partnerbrandsdata={partnerbrandsApifinal}/>
        <MeetOurFactory version="mobile"/>
        <MeetOurCertificate version="mobile"/>
        {/* <WhyFerrytechComp version="mobile"/> */}
        <FAQComp version="mobile"/>
        <ReqAquoteComp  version="mobile"/>
        <FooterComp version="mobile"/>
    </div>
    
    <div className="desktop">
        
        <MyNavbarDesk/>
        <AboutBannerComp/>
        <AboutFerrytechComp/>
        <ConstructionQuote partnerbrandsdata={partnerbrandsApifinal}/>
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