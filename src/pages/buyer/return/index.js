import React from "react";
import { returnPolicyContent } from "../../../constants/index";
import giftBg from "../../../assets/images/return-page-image.png";
import BuyerNavbar from "../../../layout/navbar/buyerNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

const ReturnPolicyPage = () => {
  return (
    <>
      <BuyerNavbar />
      <div
        className="return-policy-container"
        style={{ backgroundImage: `url(${giftBg})` }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <div className="return-policy-box">
                <h1>{returnPolicyContent.title}</h1>
                <p className="subtitle">{returnPolicyContent.subtitle}</p>

                <Row className="policy-sections g-4">
                  {returnPolicyContent.sections.map((section, index) => (
                    <Col xs={12} key={index}>
                      <div className="policy-card">
                        <h3>
                          <span className="icon">{section.icon}</span>
                          {section.heading}
                        </h3>
                        <p>{section.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>

            <Col xs={0} md={4} lg={6} className="gift-background-col" />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReturnPolicyPage;
