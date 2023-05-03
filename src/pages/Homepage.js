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
 

  return (
    <>
    <div className="mobile">
    
    
    </div>
    
    <div className="desktop">
        
        <MyNavbarDesk/>
        <Banner />
        <IntroComp/>
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