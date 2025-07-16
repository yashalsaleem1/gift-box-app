import { productData } from "../../../constants/index";
import ReviewCard from "../../../components/reviewCard";
import NavScrollExample from "../../../layout/navbar";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./style.scss";

// Convert string like "★★★☆☆" to number
const parseStarRating = (rating) => {
  if (typeof rating === "number") return rating;
  if (typeof rating === "string") return (rating.match(/★/g) || []).length;
  return 0;
};

// Render average stars (rounded down)
const renderStars = (avg) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= Math.round(avg) ? (
        <FaStar key={i} color="#ffc107" />
      ) : (
        <FaRegStar key={i} color="#ccc" />
      )
    );
  }
  return stars;
};

const SellerReview = ({ title = "Customer Reviews" }) => {
  return (
    <>
      <NavScrollExample />

      <div className="page-header">
        <h2 className="page-title">{title}</h2>
      </div>

      <div className="review-section-container">
        {productData.map((product) => {
          const reviews = product.reviews || [];
          const total = reviews.reduce(
            (acc, r) => acc + parseStarRating(r.rating),
            0
          );
          const avgRating = reviews.length > 0 ? total / reviews.length : 0;

          return (
            <div key={product.id} className="review-overview-card">
              <h5>{product.title}</h5>
              <div className="avg-stars">
                {renderStars(avgRating)} ({avgRating.toFixed(1)} / 5)
              </div>
              <p>{reviews.length} review(s)</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SellerReview;
