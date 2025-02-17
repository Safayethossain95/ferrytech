/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { partnerbrandsApi } from "../../utils/homepageApi";
import SubHeading from "./SubComponents/SubHeading";
import { API_URL, Only_Frontend } from "../../config";
import axios from "axios";
const PartnerBrandsComp = (props) => {
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
  const [dataFinal,setDataFinal] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      try{
        if(Only_Frontend){
          setDataFinal(partnerbrandsApi)
        }else{
          const response = await axios.get(`${API_URL}/partnerbrandsget`);
          setDataFinal(response.data.data)
        }
      }catch (error) {
        console.log(error.message || 'Something went wrong');
      } 
    }
    fetchData()
  },[])

  return (
    <>
      <div className="partnerbrandscomp">
        <div
        // className={
        //   props.version == "mobile"
        //     ? "myContainer"
        //     : screenSize.dynamicWidth >= 1200 &&
        //       screenSize.dynamicWidth <= 1399
        //     ? "myContainerMinimini"
        //     : screenSize.dynamicWidth >= 992 &&
        //       screenSize.dynamicWidth <= 1199
        //     ? "myContainer896"
        //     : "myContainerMini"
        // }
        >
          <SubHeading
            version={props.version == "mobile" ? "mobile" : ""}
            subheading="Partner Brands"
          />
          <div className="mobile">
            <div className="grid-cols-2">
              {[...dataFinal].map((item, key) => (
                <div className="cardwrap" key={key}>
                  <motion.div className="brandcard px-4">
                    <div className="overlay3"></div>
                    <div className="overlay5"></div>
                    <div className="overlay4 text-center">
                      <img src={item.img} alt="" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="desktop">
            <div className="marquee-container">
              <div className="marquee">
                {/* Render the items multiple times for seamless scrolling */}
                {[
                  ...dataFinal,
                  ...dataFinal,
                  ...dataFinal,
                ].map((item, key) => (
                  <div className="cardwrap" key={key}>
                    <motion.div className="brandcard px-4">
                      <div className="overlay3"></div>
                      <div className="overlay5"></div>
                      <div className="overlay4">
                        <img src={item.img} alt="" />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* {partnerbrandsApi.map((item, key) => {
              let e = (key % 2) + 1;
              return (
                <Col lg={4} xs={6} className="cardwrap" key={key}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: e * 0.3,
                      ease: "linear",
                    }}
                    className="brandcard"
                  >
                    <img src={item.img} alt="" />
                  </motion.div>
                </Col>
              );
            })} */}
        </div>
      </div>
    </>
  );
};

export default PartnerBrandsComp;
