import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import CommonBannerComp from '../Components/subComponents/CommonBannerComp'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'


const TruckMountedCranePage = () => {
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/truck-mounted-crane.webp" title="Truck Mounted Crane" version="mobile"/>
        <ProductCardsComp version="mobile" data="truckMountedCrane"/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/truck-mounted-crane.webp" title="Truck Mounted Crane" version="desktop"/>
        <ProductCardsComp data="truckMountedCrane"/>
        <FooterComp/>
    </div>
    </>
  )
}

export default TruckMountedCranePage