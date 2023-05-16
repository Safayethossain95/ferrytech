import React,{useState,useEffect} from 'react'

const ProductBanner = (props) => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
            
        })
      }, [screenSize])
  return (
    <>
        <div className="productbanner">
            <h3>Products</h3>
            <div className="overlay">
                <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>

                <img className='w-100' src="./assets/images/ProductPage/productsbanner.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductBanner