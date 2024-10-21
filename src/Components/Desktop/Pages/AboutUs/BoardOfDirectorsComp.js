/* eslint-disable eqeqeq */

import React from "react";
import { Col, Row } from "react-bootstrap";
import useScreenSize from "./../../../../helpers/Helpers";
import CommonBannerComp from './../../../subComponents/CommonBannerComp';
const BoardOfDirectorsComp = (props) => {
  const screenSize = useScreenSize();
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
          <Row className="rightofdirector align-items-center">
            <Col
              lg={4} xs={12} sm={3} md={6}
              data-aos-delay="300"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <div className="hexagon">
                <img src="./assets/images/AboutPage/boss/boss1.png" alt="" />
              </div>
            </Col>
            <Col
              lg={8} xs={12} sm={9} md={6}
              data-aos-delay="300"
              data-aos={props.version=="mobile"?"fade-in":"fade-left"}
              data-aos-duration="1000"
            >
              <h6>Chairperson</h6>
              <p>John Mitchell</p>
              <h5>
                John has over 25 years of experience in corporate governance,
                leading boards in various industries. As Chairperson, he ensures
                the board functions smoothly, providing strategic oversight and
                fostering effective decision-making. His expertise in corporate
                restructuring has been instrumental in the company&apos;s
                expansion.
              </h5>
            </Col>
          </Row>
          <Row className="rightofdirector align-items-center flex-row-reverse">
            <Col lg={4} xs={12} sm={3} md={6} data-aos-delay="300"
              data-aos="fade-in"
              data-aos-duration="1000">
              <div className="hexagon">
                <img src="./assets/images/AboutPage/boss/boss2.png" alt="" />
              </div>
            </Col>
            <Col lg={8} xs={12} sm={9} md={6} data-aos-delay="300"
              data-aos={props.version=="mobile"?"fade-in":"fade-right"}
              data-aos-duration="1000">
              <h6>Chief Executive Officer (CEO)</h6>
              <p>Sarah Thompson</p>
              <h5>
                Sarah is a visionary leader with a decade of experience in
                scaling technology startups. As CEO, she manages the company's
                day-to-day operations, executing the board&apos;s strategy, and
                driving innovation to achieve long-term growth. Under her
                leadership, the company has seen a 40% increase in revenue over
                the past three years.
              </h5>
            </Col>
          </Row>
          <Row className="rightofdirector align-items-center ">
            <Col lg={4} xs={12} sm={3} md={6} data-aos-delay="300"
              data-aos="fade-in"
              data-aos-duration="1000">
              <div className="hexagon">
                <img src="./assets/images/AboutPage/boss/boss3.png" alt="" />
              </div>
            </Col>
            <Col lg={8} xs={12} sm={9} md={6} data-aos-delay="300"
              data-aos={props.version=="mobile"?"fade-in":"fade-left"}
              data-aos-duration="1000">
              <h6>Non-Executive Director</h6>
              <p>Maria Gomez</p>
              <h5>
                Maria is an independent director with a background in regulatory
                compliance and corporate ethics. With 20 years of experience
                advising boards, she provides objective guidance on governance,
                risk management, and corporate social responsibility. Maria
                ensures that the company operates with integrity and in
                alignment with industry regulations.
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default BoardOfDirectorsComp;
