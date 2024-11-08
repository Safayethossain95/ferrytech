/* eslint-disable eqeqeq */

import { useEffect, useState } from "react";
import "../../../../sass/sassFiles/desktop/privacy-policy.scss";
const PrivacyPolicyBannerComp = (props) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  return (
    <>
      <div style={{ height: "60px" }}></div>
      <div
        className="productbanner "
        style={
          props.version == "mobile" ? { height: "250px", marginBotton:"0px" } : { height: "350px" }
        }
      >
        <h3
          style={
            props.version == "desktop"
              ? { marginBottom: "0", fontSize: "90px" }
              : { fontSize: "50px" }
          }
        >
          Privacy Policy
        </h3>
      </div>
    
    </>
  );
};

export default PrivacyPolicyBannerComp;
