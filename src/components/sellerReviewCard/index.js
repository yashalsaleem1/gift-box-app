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
    <Card className="seller-review-card container-fluid">
      <div className="row align-items-center">
        <div className="col-12 col-sm-4 col-md-3 text-center mb-3 mb-sm-0">
          <img
            src={image}
            alt={title}
            className="product-thumbnail img-fluid"
          />
        </div>

        <div className="col-12 col-sm-5 col-md-6 mb-3 mb-sm-0">
          <h5 className="mb-1">{title}</h5>

          <p className="price mb-1">
            ${discountedPrice}{" "}
            <DiscountBadge
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
            />
          </p>

          <p className="mb-1">Category: {category}</p>

          <p className="mb-1">
            Stock:{" "}
            <span className={stock > 0 ? "in-stock" : "out-of-stock"}>
              {stock} units ({stock > 0 ? "In Stock" : "Out of Stock"})
            </span>
          </p>

          <p className="mb-0">⭐ {reviews.length} review(s)</p>
        </div>

        <div className="col-12 col-sm-3 col-md-3 d-flex flex-sm-column gap-2 action-buttons">
          <button className="btn-edit" onClick={() => onEdit(product)}>
            Edit
          </button>
          <button className="btn-stock" onClick={() => onStockUpdate(product)}>
            Stock
          </button>
          <button
            className="btn-yellow"
            onClick={() => onDiscountUpdate(product)}
          >
            Discount
          </button>
          <button className="btn-dark" onClick={() => onDelete(product)}>
            Delete
          </button>
        </div>
      </div>

      <div className="customer-feedback-section mt-4">
        <h6 className="mb-3">Customer Feedback ({reviews.length})</h6>

        {reviews.map((rev, idx) => (
          <ReviewCard
            key={idx}
            className="review-card"
            rating={rev.rating}
            name={rev.name}
            date={rev.date}
            feedback={rev.message}
          />
        ))}
      </div>
    </Card>
  );
};

export default SellerReviewCard;
