import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/authSelector";
import { useCart } from "../context/index";
import NavbarWrapper from "../../../layout/navbar/index";
import { Button } from "react-bootstrap";
import CustomButton from "../../../components/button/index";
import ReviewCard from "../../../components/reviewCard";
import { productData } from "../../../constants";
import "./style.scss";

const ItemDescription = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success("Added to cart!");
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <NavbarWrapper />
      <div className="product-description">
        <div className="product-details-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <div className="product-info">
            <h2>{product.title}</h2>

            <p className="rating">
              ⭐ {product.rating} stars ({product.review} reviews)
            </p>

            <p className="price">${product.discountedPrice}</p>

            <p className="desc">
              {product.description || "No description available at the moment."}
            </p>
            <Button
              variant="warning"
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
            <CustomButton
              className="add-review"
              onClick={() =>
                navigate(`/reviews/${product.id}`, {
                  state: { productName: product.title },
                })
              }
            >
              Add a Review
            </CustomButton>
          </div>
        </div>
      </div>
      <h3 className="review-section-title">Customer Reviews</h3>{" "}
      <div className="review-list">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              feedback={review.message}
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

export default ItemDescription;
