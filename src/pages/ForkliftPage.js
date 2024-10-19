import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import CommonBannerComp from '../Components/subComponents/CommonBannerComp'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'
import { productApi } from '../utils/productsApi'

const ForkliftPage = () => {
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/forklift.webp" title="Forklifts" version="desktop"/>
        <ProductCardsComp version="mobile" data={productApi.forklift}/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/forklift.webp" title="Forklifts" version="desktop"/>
        <ProductCardsComp data={productApi.forklift}/>
        <FooterComp/>
    </div>
    </>
  )
}

export default ForkliftPage