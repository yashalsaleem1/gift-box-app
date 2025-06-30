import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DiscountBadge from "../badge";
import { useCart } from "../../pages/context/index";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./style.scss";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (rating + 0.5 >= i) {
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ffc107" />);
    }
  }
  return stars;
};

function FeaturedCard({ title = "", products = [], productLink }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="featured-section">
      <h2 className="section-heading">{title}</h2>

      <div className="featured-card-group">
        {products.map((product, idx) => {
          Math.round(
            ((product.originalPrice - product.discountedPrice) /
              product.originalPrice) *
              100
          );

          return (
            <Card
              className="featured-card"
              key={idx}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="product-img"
              />

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div className="price-info">
                  {product.discountedPrice < product.originalPrice ? (
                    <>
                      <span className="original">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="discounted">
                        ${product.discountedPrice.toFixed(2)}
                      </span>
                      <DiscountBadge
                        originalPrice={product.originalPrice}
                        discountedPrice={product.discountedPrice}
                      />
                    </>
                  ) : (
                    <span className="discounted">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="rating">
                  {renderStars(product.rating)}
                  <span className="reviews">({product.reviews} reviews)</span>
                </div>
                <Button
                  variant="warning"
                  className="add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    toast.success("Added to cart!");
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedCard;
