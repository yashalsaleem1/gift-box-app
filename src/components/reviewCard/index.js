import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./style.scss";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rating ? (
        <FaStar key={i} color="#ffc107" />
      ) : (
        <FaRegStar key={i} color="#ccc" />
      )
    );
  }
  return stars;
};

const ReviewCard = ({ title, rating, name, feedback, date }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="product-title">{title}</span>
        <span className="stars">{renderStars(rating)}</span>
        <span className="reviewer-name">{name}</span>
        <span className="review-date">{date}</span>
      </div>
      <div className="review-body">{feedback}</div>
    </div>
  );
};

export default ReviewCard;
