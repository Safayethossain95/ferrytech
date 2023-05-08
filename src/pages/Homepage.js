import React,{useEffect,useState} from 'react'
import Banner from '../Components/Desktop/Banner'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk';
import IntroComp from '../Components/Desktop/IntroComp';
import IndustriesComp from '../Components/Desktop/IndustriesComp';
import ProductLineComp from '../Components/Desktop/ProductLineComp';
import PartnerBrandsComp from '../Components/Desktop/PartnerBrandsComp';
import WhyFerrytechComp from '../Components/Desktop/WhyFerrytechComp';
import Testimonial from '../Components/Desktop/Testimonial';
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp';
import FooterComp from '../Components/Desktop/FooterComp';
import MyNavbarMb from '../Components/Mobile/MyNavbarMb';




const Homepage = () => {
     
  // useEffect(()=>{
  
    
    // var navbar = document.getElementById("mynavbar");
    // var navbarmini = document.getElementById("mynavbarmini");
    
  //   function myFunction() {
     
  //     if(window.pageYOffset > 99){
  //       navbar.classList.add("sticky");
  //     }else{
  //       navbar.classList.remove("sticky");
  //     }
  //   }
  //   window.onscroll = function() {myFunction()};
    
   
  // },[])
  useEffect(() => {
    AOS.init();
    
  }, [])
 
  const imgurldesk = "./assets/images/Intro/vector.png"
  const imgurlmb = "./assets/images/Mobile/homepage/info/arrodown.png"
  return (
    <>
    <div className="mobile">
        <MyNavbarMb/>
        <Banner />
        <IntroComp imgurl={imgurlmb} version="mobile"/>
        <IndustriesComp version="mobile"/>
        <ProductLineComp/>
        <PartnerBrandsComp version="mobile"/>
        <WhyFerrytechComp version="mobile"/>
        <Testimonial version="mobile"/>
        <ReqAquoteComp version="mobile"/>
        <FooterComp version="mobile"/>
    </div>
    
    <div className="desktop">
        
        <MyNavbarDesk/>
        <Banner />
        <IntroComp imgurl={imgurldesk}/>
        <IndustriesComp/>
        <ProductLineComp/>
        <PartnerBrandsComp/>
        <WhyFerrytechComp/>
        <Testimonial/>
        <ReqAquoteComp/>
        <FooterComp/>
    </div>
    </>
  )
}

export default Homepage