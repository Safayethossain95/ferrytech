/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React from "react";
import SubHeading from "./SubComponents/SubHeading";

const IndustriesComp = (props) => {
  return (
    <div className="industriescomp">
      <div className="industries-container">
        <SubHeading
          version={props.version === "mobile" ? "mobile" : ""}
          subheading="Industries we serve"
        />

        <div className="industries-grid">
          {props.data.map((item, index) => (
            <motion.div
              key={item.id || index}
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
                <img src={item.imgurl} alt={item.heading} />
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
