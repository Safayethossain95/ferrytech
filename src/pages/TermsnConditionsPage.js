import React from 'react'
import FooterComp from "../Components/Desktop/FooterComp";
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import MyNavbarMb from "../Components/Mobile/MyNavbarMb";
import TermsnConditionsComp from '../Components/Desktop/Pages/TermsnConditionsComp/TermsnConditionsComp';
const TermsnConditionsPage = () => {
  return (
    <>
     <div className="mobile">
        <MyNavbarMb />
        
        <TermsnConditionsComp version="mobile"/>
        
        <FooterComp version="mobile" />
      </div>
      <div className="desktop">
        <MyNavbarDesk />
        <TermsnConditionsComp version="desktop"/>
        
        <FooterComp />
      </div>
    </>
  )
}

export default TermsnConditionsPage