/* eslint-disable eqeqeq */

import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import { API_URL, Only_Frontend } from "../../../../config";
import { certificateImagesApi } from "../../../../utils/aboutUsPageApi";
const MeetOurCertificate = (props) => {
  const slider4 = useRef(null);
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
  const settings5 = {
    dots: false,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // When the screen width is 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // When the screen width is 768px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // When the screen width is 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [certificatefinaldata, setcertificatefinaldata] =
    useState(certificateImagesApi);

  useEffect(() => {
    const fetchfooter = async () => {
      try {
        if (!Only_Frontend) {
          const res = await axios.get(`${API_URL}/certificateimagesget`);
          setcertificatefinaldata(res.data);
        } else {
          console.log("frontend certificate");
        }
      } catch (error) {
        console.log(error.message || "Something went wrong");
      }
    };
    fetchfooter();
  }, []);

  return (
    <div className="divcontent">
      <motion.h6
        initial={{ opacity: 0, y: -5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1 * 0.2, duration: 0.5 },
        }}
        viewport={{ once: false }}
      >
        Our Certificate
      </motion.h6>
      <motion.h2
        initial={{ opacity: 0, y: -5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1 * 0.2, duration: 0.5 },
        }}
        viewport={{ once: false }}
        style={{ color: "#000", marginBottom: "30px" }}
      >
        Meet <span>Our</span> Certificate
      </motion.h2>
      <div
        className={
          props.version == "mobile"
            ? "mbContainer"
            : screenSize.dynamicWidth >= 1200 && screenSize.dynamicWidth <= 1399
            ? "myContainerMinimini"
            : screenSize.dynamicWidth >= 992 && screenSize.dynamicWidth <= 1199
            ? "myContainer896"
            : "myContainerMini"
        }
      >
        <Slider
          className="sliderMeetOurCertificate2"
          ref={slider4}
          {...settings5}
        >
          {certificatefinaldata.map((item, key) => {
            return (
              <div>
                <img
                  className="w-100"
                  src={item.img}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MeetOurCertificate;
