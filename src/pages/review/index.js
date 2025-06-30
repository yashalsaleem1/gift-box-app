import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavScrollExample from "../../layout/navbar";
import CustomButton from "../../components/button/index";
import Form from "react-bootstrap/Form";
import ReviewCard from "../../components/reviewCard";
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
              <option>Premium Wedding Gift Box</option>
              <option>Birthday Deluxe Collection</option>
              <option>Romantic Anniversary Set</option>
              <option>Festive Christmas Collection</option>
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

        <ReviewCard
          title="Premium Wedding Gift Box"
          rating={5}
          name="Sarah M."
          date="2024-01-15"
          feedback="Absolutely beautiful! Perfect for our wedding guests."
        />

        <ReviewCard
          title="Birthday Deluxe Collection"
          rating={4}
          name="Mike R."
          date="2024-01-10"
          feedback="Great quality items, kids loved it!"
        />

        <ReviewCard
          title="Premium Wedding Gift Box"
          rating={5}
          name="Jennifer L."
          date="2024-01-12"
          feedback="Exceeded expectations! Beautiful packaging and quality items."
        />

        <ReviewCard
          title="Romantic Anniversary Set"
          rating={5}
          name="David K."
          date="2024-01-08"
          feedback="Perfect romantic touch for our anniversary celebration."
        />

        <ReviewCard
          title="Festive Christmas Collection"
          rating={4}
          name="Mary T."
          date="2024-01-05"
          feedback="Great holiday spirit in this box!"
        />
      </div>
    </>
  );
};

export default ReviewPage;
