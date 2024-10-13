/* eslint-disable eqeqeq */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../../../sass/sassFiles/desktop/privacy-policy.scss";
const PrivacyBodyComp = (props) => {
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
    <div
          className={
            props.version == "mobile"
              ? "mbContainer"
              : screenSize.dynamicWidth >= 992 &&
                screenSize.dynamicWidth <= 1199
              ? "myContainer896"
              : screenSize.dynamicWidth >= 1200 &&
                screenSize.dynamicWidth <= 1399
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
                At Ferrytech, we are committed to protecting your privacy and
                ensuring that your personal information is handled in a safe and
                responsible manner. This Privacy Policy outlines how we collect,
                use, and safeguard your information when you visit our website
                or use our services related to heavy construction vehicles.
              </li>
              <li>
                Information Collection We collect personal information that you
                voluntarily provide, such as your name, contact details, and any
                inquiries related to our services. This information is used
                solely to respond to your requests, improve our services, and
                communicate with you effectively.
              </li>
              <li>
                Information Usage Your personal data will only be used for
                business purposes, such as fulfilling your inquiries, providing
                support, and sending you updates about our products and
                services. We do not share, sell, or distribute your information
                to third parties, except as necessary to fulfill your requests
                or as required by law.
              </li>
              <li>
                Data Security We employ appropriate technical and organizational
                measures to protect your personal data from unauthorized access,
                alteration, or destruction. However, no online transmission of
                data is completely secure, so while we strive to protect your
                information, we cannot guarantee its absolute security.
              </li>
              <li>
                Cookies Our website may use cookies to enhance your browsing
                experience. Cookies are small text files stored on your device
                that help us analyze web traffic and improve site functionality.
                You can choose to accept or decline cookies through your browser
                settings.
              </li>
              <li>
                Third-Party Links Our website may contain links to other
                websites. Please note that we are not responsible for the
                privacy practices of these external sites. We encourage you to
                review the privacy policies of any third-party websites you
                visit.
              </li>
              <li>
                Changes to this Policy Ferrytech reserves the right to update
                this Privacy Policy from time to time. Any changes will be
                posted on this page, and we recommend checking back periodically
                to stay informed of how we are protecting your information.
              </li>
            </ul>
          </div>
          </div>
        </motion.div>

        </div>
    </>
  )
}

export default PrivacyBodyComp