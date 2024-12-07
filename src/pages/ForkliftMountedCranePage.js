import React from "react";
import FooterComp from "../Components/Desktop/FooterComp";
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import ProductCardsComp from "../Components/Desktop/Pages/Product/ProductCardsComp";
import MyNavbarMb from "../Components/Mobile/MyNavbarMb";
import CommonBannerComp from "../Components/subComponents/CommonBannerComp";

const ForkliftMountedCranePage = () => {
  return (
    <>
      <div className="mobile">
        <MyNavbarMb />
        <CommonBannerComp
          img="./assets/images/ProductPage/categories/forklift-mounted-crane.webp"
          title="Forklift Mounted Crane"
          version="mobile"
        />
        <ProductCardsComp version="mobile" data="forkliftMountedCrane" />
        <FooterComp version="mobile" />
      </div>
      <div className="desktop">
        <MyNavbarDesk />
        <CommonBannerComp
          img="./assets/images/ProductPage/categories/forklift-mounted-crane.webp"
          title="Forklift Mounted Crane"
          version="desktop"
        />
        <ProductCardsComp data="forkliftMountedCrane" />
        <FooterComp />
      </div>
    </>
  );
};

export default ForkliftMountedCranePage;
