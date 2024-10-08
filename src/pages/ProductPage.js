import React,{useEffect} from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import '../sass/sassFiles/desktop/productpage.scss'
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import ProductBanner from '../Components/Desktop/Pages/Product/ProductBanner'
import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'
import { productApi } from '../utils/productsApi'
import ProdBanner from '../Components/Mobile/ProductPage/ProdBanner'
import ProdCardsCompMb from '../Components/Mobile/ProductPage/ProdCardsCompMb'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductPage = () => {
  useEffect(() => {
    AOS.init({once:true});
    
  }, [])
  return (
    <>
        

        <div className="mobile">
            <MyNavbarMb/>
            <ProdBanner/>
            <ProdCardsCompMb data={productApi.latest}/>
            <ProdCardsCompMb data={productApi.featured}/>
            <ProdCardsCompMb data={productApi.best}/>
            <ReqAquoteComp version="mobile"/>
            <FooterComp version="mobile"/>
        </div>
        <div className="desktop">
            <MyNavbarDesk />
            <ProductBanner/>
            <ProductCardsComp data={productApi.latest}/>
            <ProductCardsComp data={productApi.featured}/>
            <ProductCardsComp data={productApi.best}/>
            <ReqAquoteComp/>
            
            <FooterComp/>
        </div>
    </>
  )
}

export default ProductPage