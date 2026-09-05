import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import MyNavbarMb from "../Components/Mobile/MyNavbarMb";
import FooterComp from "../Components/Desktop/FooterComp";
import ProductPortfolioComp from "../Components/Desktop/Pages/Product/ProductPortfolioComp";
import "../sass/sassFiles/desktop/productportfolio.scss";

const ProductPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="mobile">
        <MyNavbarMb />
        <ProductPortfolioComp version="mobile" />
        <FooterComp version="mobile" />
      </div>

      <div className="desktop">
        <MyNavbarDesk />
        <ProductPortfolioComp version="desktop" />
        <FooterComp />
      </div>
    </>
  );
};

export default ProductPage;