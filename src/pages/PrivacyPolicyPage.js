import React from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import PrivacyPolicyBannerComp from '../Components/Desktop/Pages/PrivacyPolicy/PrivacyPolicyBannerComp'
import PrivacyBodyComp from '../Components/Desktop/Pages/PrivacyPolicy/PrivacyBodyComp'
import FooterComp from '../Components/Desktop/FooterComp'
const PrivacyPolicyPage = () => {
  return (
    <>
    <div className="mobile">
    <MyNavbarMb/>
    <PrivacyPolicyBannerComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk />
        <PrivacyPolicyBannerComp version="desktop"/>
        <PrivacyBodyComp/>
        <FooterComp version="mobile"/>
    </div>
    </>
  )
}

export default PrivacyPolicyPage