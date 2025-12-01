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
    <div
      className={`hero-banner container text-center py-5 px-3 mt-5${className || ""}`}
    >
      <h1 className="display-4 fw-bold">{title}</h1>
      <p className="lead mx-auto mb-4">{description}</p>

      <CustomButton
        className="shop-btn btn btn-warning px-4 py-2 fw-semibold"
        onClick={() => navigate(buttonLink)}
      >
        {buttonLabel}
      </CustomButton>
    </div>
  );
};

export default HeroBanner;
