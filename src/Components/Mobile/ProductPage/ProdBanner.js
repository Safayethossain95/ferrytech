import React from 'react'

const ProdBanner = () => {
  return (
    <>
        <div className="productbanner">
            <h3>Products</h3>
            <div className="overlay">
                <div className={`mbContainer`}>

                <img className='w-100' src="./assets/images/Mobile/productpage/prodbannerimg.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProdBanner