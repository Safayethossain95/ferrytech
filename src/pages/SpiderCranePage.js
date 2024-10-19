import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import CommonBannerComp from '../Components/subComponents/CommonBannerComp'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'
import { productApi } from '../utils/productsApi'

const SpiderCranePage = () => {
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/spider-crane.webp" title="Spider Crane" version="desktop"/>
        <ProductCardsComp version="mobile" data={productApi.spiderCrane}/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <CommonBannerComp img="./assets/images/ProductPage/categories/spider-crane.webp" title="Spider Crane" version="desktop"/>
        <ProductCardsComp data={productApi.spiderCrane}/>
        <FooterComp/>
    </div>
    </>
  )
}

export default SpiderCranePage