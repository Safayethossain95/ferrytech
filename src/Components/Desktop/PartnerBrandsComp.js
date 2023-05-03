import React,{useState,useEffect} from 'react'
import SubHeading from './SubComponents/SubHeading';
const PartnerBrandsComp = () => {
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
        <div className="partnerbrandscomp">
        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

            <SubHeading subheading="Partner Brands"/>

            <div className="cardwrap">
            <div className="brandcard">
                <img src="./assets/images/PartnerBrands/1.png" alt="" />
            </div>
            <div className="brandcard">
                <img src="./assets/images/PartnerBrands/2.png" alt="" />
            </div>
            <div className="brandcard">
                <img src="./assets/images/PartnerBrands/3.png" alt="" />
            </div>
            <div className="brandcard">
                <img src="./assets/images/PartnerBrands/4.png" alt="" />
            </div>
            <div className="brandcard">
                <img src="./assets/images/PartnerBrands/5.png" alt="" />
            </div>
            <div className="brandcard">
                <img src="./assets/images/PartnerBrands/6.png" alt="" />
            </div>

            </div>

        </div>
        </div>
    </>
  )
}

export default PartnerBrandsComp