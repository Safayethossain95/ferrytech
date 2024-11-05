import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import CommonBannerComp from '../Components/subComponents/CommonBannerComp'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'


const SelfErectingCranePage = () => {
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/self-erecting-crane.webp" title="Self Erecting Crane" version="desktop"/>
        <ProductCardsComp version="mobile" data="selfErectingCrane"/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/self-erecting-crane.webp" title="Self Erecting Crane" version="desktop"/>
        <ProductCardsComp data="selfErectingCrane"/>
        <FooterComp/>
    </div>
    </>
  )
}

export default SelfErectingCranePage