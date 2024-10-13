import React from 'react'
import FooterComp from "../Components/Desktop/FooterComp";
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import MyNavbarMb from "../Components/Mobile/MyNavbarMb";
import CookiesInfoComp from '../Components/Desktop/Pages/CookiesInfo/CookiesInfoComp';
const CookiesInfoPage = () => {
  return (
    <>
     <div className="mobile">
        <MyNavbarMb />
        <CookiesInfoComp version="mobile"/>
        
        <FooterComp version="mobile" />
      </div>
      <div className="desktop">
        <MyNavbarDesk />
        <CookiesInfoComp version="desktop"/>
        
        <FooterComp />
      </div>
    </>
  )
}

export default CookiesInfoPage