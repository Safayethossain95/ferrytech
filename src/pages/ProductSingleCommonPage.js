import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'

import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'
import { useParams } from 'react-router-dom'


const ProductSingleCommonPage = () => {
  const {prodname} = useParams()
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        
        <ProductCardsComp version="mobile" data={prodname}/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        
        <ProductCardsComp data={prodname}/>
        <FooterComp/>
    </div>
    </>
  )
}

export default ProductSingleCommonPage