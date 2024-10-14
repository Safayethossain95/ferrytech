import React from "react";
import FooterComp from "../Components/Desktop/FooterComp";
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import PrivacyBodyComp from "../Components/Desktop/Pages/PrivacyPolicy/PrivacyBodyComp";
import PrivacyPolicyBannerComp from "../Components/Desktop/Pages/PrivacyPolicy/PrivacyPolicyBannerComp";
import MyNavbarMb from "../Components/Mobile/MyNavbarMb";
const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="mobile">
        <MyNavbarMb />
        <PrivacyPolicyBannerComp version="mobile" />
        <PrivacyBodyComp version="mobile" />
        <FooterComp version="mobile" />
      </div>
      <div className="desktop">
        <MyNavbarDesk />
        <PrivacyPolicyBannerComp version="desktop" />
        <PrivacyBodyComp />
        <FooterComp />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
