import Card from "react-bootstrap/Card";
import DiscountBadge from "../badge";
import ReviewCard from "../reviewCard";
import "./style.scss";

const SellerReviewCard = ({
  product,
  onEdit,
  onStockUpdate,
  onDiscountUpdate,
  onDelete,
}) => {
  const {
    title,
    image,
    stock,
    category,
    discountedPrice,
    originalPrice,
    reviews = [],
  } = product;

  return (
    <Card className="seller-review-card">
      <div className="card-header">
        <img src={image} alt={title} className="product-image" />

        <div className="product-details">
          <h5>{title}</h5>
          <p className="price">
            ${discountedPrice}{" "}
            <DiscountBadge
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
            />
          </p>
          <p>Category: {category}</p>
          <p>
            Stock:{" "}
            <span className={stock > 0 ? "in-stock" : "out-of-stock"}>
              {stock} units ({stock > 0 ? "In Stock" : "Out of Stock"})
            </span>
          </p>
          <p>⭐ {Array.isArray(reviews) ? reviews.length : 0} review(s)</p>
        </div>

        <div className="action-buttons">
          <button className="btn-edit" onClick={() => onEdit(product)}>
            Edit
          </button>
          <button className="btn-stock" onClick={() => onStockUpdate(product)}>
            Stock
          </button>
          <button
            className="btn-yellow"
            size="sm"
            onClick={() => onDiscountUpdate(product)}
          >
            Discount
          </button>
          <button className="btn-dark" onClick={() => onDelete(product)}>
            Delete
          </button>
        </div>
      </div>

      <div className="customer-feedback-section">
        <div className="left-column">
          <h6>Customer Feedback ({reviews.length})</h6>
          {reviews.map((rev, idx) => (
            <ReviewCard
              className="review-card"
              key={idx}
              rating={rev.rating}
              name={rev.name}
              date={rev.date}
              feedback={rev.message}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SellerReviewCard;
