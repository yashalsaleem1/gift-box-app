import { productData } from "../../../constants/index";
import NavScrollExample from "../../../layout/navbar";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const parseStarRating = (rating) => {
  if (typeof rating === "number") return rating;
  if (typeof rating === "string") return (rating.match(/★/g) || []).length;
  return 0;
};

const renderStars = (avg) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= Math.round(avg) ? (
        <FaStar key={i} color="#ffc107" />
      ) : (
        <FaRegStar key={i} color="#ccc" />
      ),
    );
  }
  return stars;
};

const SellerReview = ({ title = "Customer Reviews" }) => {
  return (
    <>
      <NavScrollExample />

      <Container className="mt-4">
        <div className="page-header text-center mb-4">
          <h2 className="page-title">{title}</h2>
        </div>

        <Row className="g-3">
          {productData.map((product) => {
            const reviews = product.reviews || [];
            const total = reviews.reduce(
              (acc, r) => acc + parseStarRating(r.rating),
              0,
            );
            const avgRating = reviews.length > 0 ? total / reviews.length : 0;

            return (
              <Col key={product.id} xs={12}>
                <div className="review-overview-card p-3">
                  <h5>{product.title}</h5>
                  <div className="avg-stars">
                    {renderStars(avgRating)} ({avgRating.toFixed(1)} / 5)
                  </div>
                  <p>{reviews.length} review(s)</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SellerReview;
