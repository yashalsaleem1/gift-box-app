import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/index";
import "./style.scss";

const HeroBanner = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`hero-banner ${className || ""}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <CustomButton className="shop-btn" onClick={() => navigate(buttonLink)}>
        {buttonLabel}
      </CustomButton>
    </div>
  );
};

export default HeroBanner;
