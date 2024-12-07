/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { productApi } from "../../../../utils/productsApi";
import axios from "axios";
import { API_URL, Only_Frontend } from "../../../../config";
import CommonBannerComp from "../../../subComponents/CommonBannerComp";

const ProductCardsComp = (props) => {
  const [mydata, setMyData] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      
      try {
        if(Only_Frontend){

          let mydata = productApi.find(item => item.catname === props.data)
          console.log(mydata)
          setMyData(mydata)
        }else{
          const response = await axios.get(`${API_URL}/productget`);
          let mydata = response.data.data.find(item => item.catname.toLowerCase() == props.data.toLowerCase())
          console.log(mydata)
          console.log(props.data)
          setMyData(mydata)
        }
      } catch (error) {
        console.log(error.message || 'Something went wrong');
      } 
    };
   
    fetchProducts();
  }, [props.data]);
  

  

  // useEffect(() => {
  //   const data = 
  //   setMyData(data); 
  // }, [props.data]);
 
  

  const [screenSize, setScreenSize] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const handleResize = () => {
    setScreenSize({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mydata) {
    return <p>No data found for the selected category.</p>;
  }

  return (
    <>
   
    <div className="productcardscomp">
      <div
        className={
          props.version === "mobile"
            ? "mbContainer"
            : screenSize.dynamicWidth >= 992 && screenSize.dynamicWidth <= 1199
            ? "myContainer896"
            : screenSize.dynamicWidth >= 1200 && screenSize.dynamicWidth <= 1399
            ? "myContainerMinimini"
            : "myContainerMini"
        }
      >
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "linear",
          }}
        >
          <h5>{mydata.heading}</h5>
          <p>{mydata.para}</p>
        </motion.div>
        <div className="cardsloop">
          <Row>
            {mydata.card.map((item) => (
              <Col lg={4} md={6} sm={6} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: item.id * 0.5,
                    ease: "linear",
                  }}
                  className="pcard"
                >
                  <div className="over">
                    <img src={item.imgurl} alt={item.name} />
                    <div className="pcarddetails">
                      <h5>{item.name}</h5>
                      <p>{item.detail}</p>
                    </div>
                    <div className="pcardbutton">
                      <button className="w-75 mx-2">
                        view details{" "}
                        <span>
                          <img
                            src="/assets/images/ProductPage/cards/arr.png"
                            alt="arrow"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCardsComp;
