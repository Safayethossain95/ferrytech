/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React from "react";
import SubHeading from "./SubComponents/SubHeading";

const hardcodedIndustries = [
  {
    id: 1,
    heading: "Passenger Vehicle",
    imgurl: "./assets/images/Industries/img1.png",
  },
  {
    id: 2,
    heading: "Intelligence & Defense Division",
    imgurl: "./assets/images/Industries/img2.png",
  },
  {
    id: 3,
    heading: "Energy & Power Division",
    imgurl: "./assets/images/Industries/img3.png",
  },
  {
    id: 4,
    heading: "Marines Solution Division",
    imgurl: "./assets/images/Industries/img4.png",
  },
  {
    id: 5,
    heading: "Engineering & Construction",
    imgurl: "./assets/images/Industries/img5.png",
  },
  {
    id: 6,
    heading: "Heavy Equipment Division",
    imgurl: "./assets/images/Industries/img6.png",
  },
];

const IndustriesComp = (props) => {
  const list = props.data && props.data.length > 0 ? props.data : hardcodedIndustries;

  return (
    <div className="industriescomp">
      <div className="industries-container">
        <SubHeading
          version={props.version === "mobile" ? "mobile" : ""}
          subheading="Our Solution"
        />

        <div className="industries-grid">
          {list.map((item, index) => (
            <motion.div
              key={item.id || item._id || index}
              className="industries-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="industries-card-image">
                <img
                  src={item.imgurl || hardcodedIndustries[index % hardcodedIndustries.length].imgurl}
                  alt={item.heading}
                />
              </div>
              <h4 className="industries-card-title">{item.heading}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesComp;

