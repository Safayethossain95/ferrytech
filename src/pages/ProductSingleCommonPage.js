import React from 'react'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'

import ProductCardsComp from '../Components/Desktop/Pages/Product/ProductCardsComp'
import { useParams } from 'react-router-dom'
import CommonBannerComp from '../Components/subComponents/CommonBannerComp'


const ProductSingleCommonPage = () => {
  const {prodname} = useParams()
  function camelCaseToTitle(str) {
    return str
      .replace(/([A-Z])/g, ' $1') // Insert a space before each uppercase letter
      .replace(/^./, (match) => match.toUpperCase()); // Capitalize the first character
  }
  
  // Example usage
  const resulttitle = camelCaseToTitle(prodname);

  function camelCaseToKebabCase(str) {
    return str
      .replace(/([A-Z])/g, '-$1') // Insert a hyphen before each uppercase letter
      .toLowerCase(); // Convert the entire string to lowercase
  }
  
  // Example usage
  const resultkabab = camelCaseToKebabCase(prodname);
  
  return (
    <>
        <div className="mobile">
        <MyNavbarMb/>
        <CommonBannerComp
          img={`/assets/images/ProductPage/categories/${resultkabab}.webp`}
          title={resulttitle}
          version="mobile"
        />
        <ProductCardsComp version="mobile" data={prodname}/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <CommonBannerComp
          img={`/assets/images/ProductPage/categories/${resultkabab}.webp`}
          title={resulttitle}
          version="desktop"
        />
        <ProductCardsComp data={prodname}/>
        <FooterComp/>
    </div>
    </>
  )
}

export default ProductSingleCommonPage