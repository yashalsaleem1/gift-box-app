import React from "react";
import CustomButton from "../../components/button/index";
import "./style.scss";

const HeroBanner = ({ title, description, buttonLabel }) => {
  return (
    <div className="hero-banner">
      <h1>{title}</h1>
      <p>{description}</p>
      <CustomButton className="shop-btn">{buttonLabel}</CustomButton>
    </div>
  );
};

export default HeroBanner;
