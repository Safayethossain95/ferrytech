/* eslint-disable eqeqeq */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../../../sass/sassFiles/desktop/privacy-policy.scss";
const CookiesInfoComp = (props) => {
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
          props.version == "mobile"
            ? { height: "250px", marginBottom: "0px" }
            : { height: "350px" }
        }
      >
        <h3
          style={
            props.version == "desktop"
              ? { marginBotton: "0", fontSize: "70px",padding:"0 25px" }
              : { fontSize: "40px",marginBotton: "0" }
          }
        >
          Cookies Information
        </h3>
      </div>

      <div
        className={
          props.version == "mobile"
            ? "mbContainer"
            : screenSize.dynamicWidth >= 992 && screenSize.dynamicWidth <= 1199
            ? "myContainer896"
            : screenSize.dynamicWidth >= 1200 && screenSize.dynamicWidth <= 1399
            ? "myContainerMinimini"
            : "myContainerMini"
        }
      >
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }} // Initial position
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "linear",
          }}
        >
          <div className="privacypolicydesk">
            <div className="textblock">
              <ul>
                <li>
                  What Are Cookies? Cookies are small text files placed on your
                  device when you visit websites. These files help store
                  preferences, login details, and other information to make your
                  browsing experience more efficient and tailored to your needs.
                </li>
                <li>
                  How Ferrytech Uses Cookies At Ferrytech, we use cookies to
                  improve our website&apos;s functionality, enhance user experience,
                  and gather insights into how visitors interact with our site.
                  By using cookies, we can provide you with a more personalized
                  and seamless experience when browsing through our heavy
                  construction vehicle offerings.
                </li>
                <li>
                  Essential Cookies: These cookies are vital for the basic
                  operation of our website. They enable you to navigate the site
                  and use essential features, such as secure areas or forms.
                </li>
                <li>
                  Performance Cookies: These cookies collect anonymous
                  information about how you use our site, such as which pages
                  are visited most frequently. This helps us improve website
                  performance and the overall user experience.
                </li>
                <li>
                  Functionality Cookies: Functionality cookies allow us to
                  remember the choices you make, such as language settings or
                  preferences, ensuring that your experience is more tailored
                  and convenient during future visits.
                </li>
                <li>
                  Analytics Cookies: We use third-party analytics tools to
                  measure and understand how our visitors engage with the
                  website. This helps us continuously improve the content and
                  structure of Ferrytech&apos;s site, ensuring it meets user
                  expectations.
                </li>
                <li>
                  Third-Party Cookies: Ferrytech may also work with third-party
                  service providers, such as analytics platforms or social media
                  integrations, which may set their own cookies. These cookies
                  are managed by external parties and are subject to their own
                  privacy policies.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CookiesInfoComp;
