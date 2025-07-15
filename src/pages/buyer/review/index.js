import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavScrollExample from "../../../layout/navbar";
import CustomButton from "../../../components/button/index";
import Form from "react-bootstrap/Form";
import ReviewCard from "../../../components/reviewCard";
import { productData } from "../../../constants/index";
import "./style.scss";

const ReviewPage = ({ title = "Customer Reviews" }) => {
  const location = useLocation();

  const productNameFromState = location.state?.productName || "";

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    if (productNameFromState) {
      setSelectedProduct(productNameFromState);
    }
  }, [productNameFromState]);

  return (
    <>
      <NavScrollExample />

      <div className="review-form-container">
        <h2 className="section-heading">{title}</h2>

        <Form>
          <Form.Group controlId="product-select">
            <Form.Label>Product</Form.Label>
            <Form.Select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Select a product</option>
              {productData.map((product, idx) => (
                <option key={idx} value={product.title}>
                  {product.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="rating-select" className="mt-3">
            <Form.Label>Rating</Form.Label>
            <Form.Select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option value="">Select rating</option>
              <option>★★★★★ (5 stars)</option>
              <option>★★★★☆ (4 stars)</option>
              <option>★★★☆☆ (3 stars)</option>
              <option>★★☆☆☆ (2 stars)</option>
              <option>★☆☆☆☆ (1 star)</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="review-textarea" className="mt-3">
            <Form.Label>Your Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your thoughts..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </Form.Group>

          <CustomButton className="add-btn mt-4">Submit Review</CustomButton>
        </Form>
      </div>

      <div className="review-section-container">
        <h4 className="review-section-title">All Reviews</h4>

        {productData.map((product, idx) =>
          Array.isArray(product.reviews)
            ? product.reviews.map((review, i) => (
                <ReviewCard
                  key={`${idx}-${i}`}
                  title={product.title}
                  rating={review.rating}
                  name={review.name}
                  date={review.date}
                  feedback={review.message}
                />
              ))
            : null
        )}
      </div>
    </>
  );
};

export default ReviewPage;
