import React,{useEffect} from 'react'
import Banner from '../Components/Desktop/Banner'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk';
import IntroComp from '../Components/Desktop/IntroComp';
import IndustriesComp from '../Components/Desktop/IndustriesComp';
import ProductLineComp from '../Components/Desktop/ProductLineComp';

import WhyFerrytechComp from '../Components/Desktop/WhyFerrytechComp';
import Testimonial from '../Components/Desktop/Testimonial';
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp';
import FooterComp from '../Components/Desktop/FooterComp';
import MyNavbarMb from '../Components/Mobile/MyNavbarMb';
import ProdLineMbComMp from '../Components/Mobile/ProdLineMbComMp';
import { bannerApi } from '../utils/homepageApi';
import ConstructionQuote from '../Components/Desktop/Pages/AboutUs/ConstructionQuote';
import SubHeading from '../Components/Desktop/SubComponents/SubHeading';

const Homepage = () => {
  useEffect(() => {
    AOS.init({});
    
  }, [])


 
 
  const imgurldesk = "./assets/images/Intro/vector.png"
  const imgurlmb = "./assets/images/Mobile/homepage/info/arrodown.png"
  return (
    <>
   

    <div className="mobile">

        <MyNavbarMb/>
        <Banner version="mobile" bannerapi={bannerApi.mobile} />
        <IntroComp imgurl={imgurlmb} version="mobile"/>
        <IndustriesComp version="mobile"/>
        <ProdLineMbComMp/>
        <SubHeading
            version="mobile"
            subheading="Partner Brands"
            mb="120px"
          />
        <ConstructionQuote version="mobile"/>
        <WhyFerrytechComp version="mobile"/>
        <Testimonial version="mobile"/>
        <ReqAquoteComp version="mobile"/>        
        <FooterComp version="mobile"/>
        
    </div>
    
    <div className="desktop">
        <MyNavbarDesk/>
        <Banner version="desktop" bannerapi={bannerApi.desktop}/>
        <IntroComp imgurl={imgurldesk}/>
        <IndustriesComp/>
        <ProductLineComp/>
        <SubHeading
            version="desktop"
            subheading="Partner Brands"
            mb="140px"
          />
        <ConstructionQuote/>
        <WhyFerrytechComp/>
        <Testimonial/>
        <ReqAquoteComp/>  
        <FooterComp/>
    </div>

    </>
  )
}

export default Homepage