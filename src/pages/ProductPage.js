import React from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import ContactBanner from '../Components/Desktop/Pages/Contact/ContactBanner'
import '../sass/sassFiles/desktop/productpage.scss'
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import ContactBannerMb from '../Components/Mobile/ContactPage/ContactBannerMb'
import ProductBanner from '../Components/Desktop/Pages/Product/ProductBanner'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'
import { productApi } from '../utils/productsApi'
import ProdBanner from '../Components/Mobile/ProductPage/ProdBanner'
import ProdCardsCompMb from '../Components/Mobile/ProductPage/ProdCardsCompMb'
const ProductPage = () => {
  return (
    <>
         <div className="desktop">
            <MyNavbarDesk />
            <ProductBanner/>
            <ProductCardsComp data={productApi.latest}/>
            <ProductCardsComp data={productApi.featured}/>
            <ProductCardsComp data={productApi.best}/>
            <ReqAquoteComp/>
            
            <FooterComp/>
        </div>

        <div className="mobile">
            <MyNavbarMb/>
            <ProdBanner/>
            <ProdCardsCompMb data={productApi.latest}/>
            <ProdCardsCompMb data={productApi.featured}/>
            <ProdCardsCompMb data={productApi.best}/>
            <ReqAquoteComp version="mobile"/>
            <FooterComp version="mobile"/>
        </div>
    </>
  )
}

export default ProductPage