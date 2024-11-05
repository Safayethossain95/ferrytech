import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import CommonBannerComp from '../Components/subComponents/CommonBannerComp'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'


const TruckCraneProductsPage = () => {
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/truck-crane.webp" title="Truck Crane" version="desktop"/>
        <ProductCardsComp version="mobile" data="truckCrane"/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/truck-crane.webp" title="Truck Crane" version="desktop"/>
        <ProductCardsComp data="truckCrane"/>
        <FooterComp/>
    </div>
    </>
  )
}

export default TruckCraneProductsPage