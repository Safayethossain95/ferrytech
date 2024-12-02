/* eslint-disable eqeqeq */

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useScreenSize from "./../../../../helpers/Helpers";
import CommonBannerComp from './../../../subComponents/CommonBannerComp';
import { boardofDirectorsApi } from "../../../../utils/boardOfDirectorsApi";
import { API_URL, Only_Frontend } from "../../../../config";
import axios from "axios";
const BoardOfDirectorsComp = (props) => {
  const screenSize = useScreenSize();

  const [mydata,setmydata] = useState(boardofDirectorsApi)

  useEffect(()=>{
    async function callbod(){
      const res = await axios.get(`${API_URL}/boardofdirectorsget`)
      if(res &&!Only_Frontend){
        setmydata(res.data.data)
      } else{
        setmydata(boardofDirectorsApi)
      }
    }
    callbod()
  })
  return (
    <>
      <div className="boardofdirectors">
        
        <CommonBannerComp img="./assets/images/AboutPage/boss/directorsbg.png" version={props.version} title="Board of Directors"/>
        
        <div
          className={ props.version == "mobile"
            ? "mbContainer"
            : screenSize.dynamicWidth >= 992 &&
              screenSize.dynamicWidth <= 1199
            ? "myContainer896"
            : screenSize.dynamicWidth >= 1200 &&
              screenSize.dynamicWidth <= 1399
            ? "myContainerMinimini"
            : "myContainer896"
          }
        >
          {
            mydata.map((item,key)=>{
              return(
              
          <Row key={key} className={`rightofdirector align-items-center ${key%2==1?"flex-row-reverse":""}`}>
            <Col
              lg={4} xs={12} sm={3} md={6}
              data-aos-delay="300"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <div className="hexagon">
                <img src={item.image} alt="" />
              </div>
            </Col>
            <Col
              lg={8} xs={12} sm={9} md={6}
              data-aos-delay="300"
              data-aos={props.version=="mobile"?"fade-in":"fade-left"}
              data-aos-duration="1000"
            >
              <h6>{item.title}</h6>
              <p>{item.name}</p>
              <h5>
                {item.description}
              </h5>
            </Col>
          </Row>
                
              
              )
            })
          }
         <div className="div" style={{height:"80px"}}></div>
        </div>
      </div>
    </>
  );
};

export default BoardOfDirectorsComp;
