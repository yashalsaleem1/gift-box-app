import React from "react";
import { returnPolicyContent } from "../../../constants/index";
import giftBg from "../../../assets/images/return-page-image.png";
import BuyerNavbar from "../../../layout/navbar/buyerNavbar";
import "./style.scss";

const ReturnPolicyPage = () => {
  return (
    <>
      <BuyerNavbar />
      <div
        className="return-policy-container"
        style={{ backgroundImage: `url(${giftBg})` }}
      >
        <div className="return-policy-box">
          <h1>{returnPolicyContent.title}</h1>
          <p className="subtitle">{returnPolicyContent.subtitle}</p>

          <div className="policy-sections">
            {returnPolicyContent.sections.map((section, index) => (
              <div className="policy-card" key={index}>
                <h3>
                  {section.icon}
                  {section.heading}
                </h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicyPage;
