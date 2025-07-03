import productData from "../../buyer/constants/productData";
import ReviewCard from "../../../components/reviewCard";
import "./style.scss";

const SellerReview = ({ title = "Customer Reviews" }) => {
  const product = productData.find((p) => p.id === parseInt(p.id));

  return (
    <>
      <h3 className="review-section-title">Customer Reviews</h3>{" "}
      <div className="review-list">
        {product.customerReviews && product.customerReviews.length > 0 ? (
          product.customerReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              feedback={review.feedback}
              date={review.date}
            />
          ))
        ) : (
          <p>No customer reviews yet.</p>
        )}
      </div>
    </>
  );
};

export default SellerReview;
