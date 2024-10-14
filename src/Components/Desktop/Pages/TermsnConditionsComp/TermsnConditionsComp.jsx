/* eslint-disable eqeqeq */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../../../sass/sassFiles/desktop/privacy-policy.scss";
const TermsnConditionsComp = (props) => {
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
              ? { marginBotton: "0", fontSize: "70px", padding: "0 25px" }
              : { fontSize: "40px", marginBotton: "0" }
          }
        >
          Terms & Conditions
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
              <div>
                

                <h2>Introduction</h2>
                <p>
                  Welcome to Ferrytech. These Terms and Conditions outline the
                  rules and regulations for the use of Ferrytech's website and
                  the purchase or rental of our heavy construction vehicles. By
                  accessing our website or engaging with our services, you agree
                  to comply with the following terms and conditions. If you do
                  not agree with any part of these terms, please refrain from
                  using our website or services.
                </p>

                <h2>1. Services Provided</h2>
                <p>
                  Ferrytech provides a range of construction vehicles for sale
                  and rental, including but not limited to cranes, excavators,
                  loaders, and other heavy machinery. All transactions, whether
                  purchases or rentals, are subject to the availability of the
                  vehicles and the terms outlined in individual contracts.
                </p>

                <h2>2. Eligibility</h2>
                <p>
                  By using our website or purchasing/renting equipment from
                  Ferrytech, you confirm that you are legally capable of
                  entering into binding contracts and are at least 18 years old.
                </p>

                <h2>3. Use of Website</h2>
                <ul>
                  <li>
                    The content on Ferrytech’s website is for informational
                    purposes only. While we strive to keep the information
                    accurate and up to date, we make no representations or
                    warranties regarding the completeness, accuracy, or
                    reliability of any information on the site.
                  </li>
                  <li>
                    Unauthorized use of this website may give rise to a claim
                    for damages and/or be a criminal offense.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    any account details (username, password) you create on our
                    website.
                  </li>
                </ul>

                <h2>4. Orders and Pricing</h2>
                <ul>
                  <li>
                    All orders for the purchase or rental of construction
                    vehicles are subject to confirmation by Ferrytech. We
                    reserve the right to refuse any order, at our discretion,
                    for any reason.
                  </li>
                  <li>
                    Pricing for vehicles, whether for sale or rental, is subject
                    to change without notice. Once an order has been confirmed,
                    the agreed-upon price is final.
                  </li>
                  <li>
                    Taxes, fees, and any applicable delivery or transportation
                    charges will be added to the total price and outlined in the
                    final contract or invoice.
                  </li>
                </ul>

                <h2>5. Payment Terms</h2>
                <ul>
                  <li>
                    Payments must be made in accordance with the terms stated in
                    the order confirmation or contract. Ferrytech accepts
                    various forms of payment, including bank transfers and
                    credit cards.
                  </li>
                  <li>
                    Failure to make payment on time may result in cancellation
                    of the order and additional fees for late payment or
                    collection.
                  </li>
                </ul>

                <h2>6. Delivery and Risk</h2>
                <p>
                  Delivery dates for construction vehicles are approximate and
                  subject to availability. While we strive to meet delivery
                  schedules, Ferrytech is not liable for any delays beyond our
                  control. Risk in the equipment passes to the customer once the
                  vehicle is delivered to the specified location.
                </p>

                <h2>7. Warranties and Maintenance</h2>
                <p>
                  All vehicles sold or rented by Ferrytech come with a standard
                  warranty, as specified in individual contracts. Warranty
                  coverage may vary depending on the make, model, and condition
                  of the vehicle. Regular maintenance and servicing of rented
                  equipment are required to be performed by the customer
                  according to the manufacturer’s recommendations, unless
                  otherwise agreed upon.
                </p>

                <h2>8. Liability</h2>
                <p>
                  Ferrytech is not liable for any direct, indirect, incidental,
                  or consequential damages arising from the use or inability to
                  use our products or services. We are not responsible for
                  damages caused by misuse, improper operation, or failure to
                  follow safety instructions provided with the machinery.
                </p>

                <h2>9. Returns and Cancellations</h2>
                <ul>
                  <li>
                    All cancellations of orders for vehicles must be made in
                    writing. Depending on the timing of the cancellation,
                    certain fees may apply.
                  </li>
                  <li>
                    Vehicles sold by Ferrytech are non-returnable unless
                    otherwise stated in the sales contract. Rental agreements
                    may have specific return policies detailed in the contract.
                  </li>
                </ul>

                <h2>10. Intellectual Property</h2>
                <p>
                  All content on the Ferrytech website, including text, images,
                  logos, and designs, is the intellectual property of Ferrytech
                  and protected under copyright law. You may not reproduce,
                  distribute, or otherwise use any content without prior written
                  permission from Ferrytech.
                </p>

                <h2>11. Privacy Policy</h2>
                <p>
                  Our Privacy Policy outlines how we collect, use, and protect
                  your personal information. By using our services, you agree to
                  the collection and use of your data as described in our
                  Privacy Policy.
                </p>

                <h2>12. Governing Law</h2>
                <p>
                  These terms and conditions are governed by the laws of [Insert
                  Applicable Country/Region], without regard to its conflict of
                  law provisions. Any disputes arising from the use of
                  Ferrytech’s services will be subject to the exclusive
                  jurisdiction of the courts in [Insert Jurisdiction].
                </p>

                <h2>13. Changes to Terms and Conditions</h2>
                <p>
                  Ferrytech reserves the right to update or modify these Terms
                  and Conditions at any time. Changes will be posted on this
                  page, and continued use of our website or services after such
                  changes signifies your agreement to the updated terms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsnConditionsComp;
