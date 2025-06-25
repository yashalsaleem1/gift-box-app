import { useNavigate, useLocation } from "react-router-dom";
import NavScrollExample from "../../layout/navbar/index";
import CustomButton from "../../components/button/index";
import img from "../../assets/images/gift-image.png";
import ReviewCard from "../../components/reviewCard";
import { useParams } from "react-router-dom";
import { FaBagShopping, FaShop } from "react-icons/fa6";
import "./style.scss";

const productData = [
  {
    id: 1,
    title: "Premium Wedding Gift Box",
    image: img,
    originalPrice: 89.99,
    discountedPrice: 89.99,
    rating: 5,
    reviews: 127,
    description:
      "A carefully curated collection of premium items perfect for wedding celebrations. Each box contains handpicked items that create lasting memories for the special couple.",
    customerReviews: [
      {
        name: "Sarah M.",
        rating: 5,
        feedback: "Absolutely beautiful! Perfect for our wedding guests.",
        date: "2024-01-15",
      },
      {
        name: "Jennifer L.",
        rating: 5,
        feedback:
          "Exceeded expectations! Beautiful packaging and quality items.",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: 2,
    title: "Birthday Deluxe Collection",
    image: img,
    originalPrice: 65.99,
    discountedPrice: 59.39,
    rating: 4,
    reviews: 89,
    decription:
      "A carefully curated collection of premium items perfect for wedding celebrations. Each box contains handpicked items that create lasting memories for the special couple.",
    customerReviews: [
      {
        name: "Mike R.",
        rating: 4,
        feedback: "Great quality items, kids loved it!",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: 3,
    title: "Romantic Anniversary Set",
    image: img,
    originalPrice: 75.5,
    discountedPrice: 64.17,
    rating: 4,
    reviews: 156,
    description:
      "A carefully curated collection of premium items perfect for wedding celebrations. Each box contains handpicked items that create lasting memories for the special couple.",
    customerReviews: [
      {
        name: "David K.",
        rating: 5,
        feedback: "Perfect romantic touch for our anniversary celebration.",
        date: "2024-01-08",
      },
    ],
  },
  {
    id: 4,
    title: "Festive Christmas Collection",
    image: img,
    originalPrice: 95.0,
    discountedPrice: 76.0,
    rating: 4,
    reviews: 203,
    description:
      "A carefully curated collection of premium items perfect for wedding celebrations. Each box contains handpicked items that create lasting memories for the special couple.",
    customerReviews: [
      {
        name: "Mary T.",
        rating: 4,
        feedback: "Great holiday spirit in this box!.",
        date: "2024-01-05",
      },
    ],
  },
];

const ItemDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isSellerActive = location.pathname === "/seller";
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <NavScrollExample />
      <div className="custom-button-group">
        <CustomButton
          className={`custom-btn ${!isSellerActive ? "active-btn" : ""}`}
          icon={FaBagShopping}
          variant="solid"
          onClick={() => navigate("/")}
        >
          Buyer
        </CustomButton>

        <CustomButton
          className={`custom-btn ${isSellerActive ? "active-btn" : ""}`}
          icon={FaShop}
          variant="outline"
          onClick={() => navigate("/seller")}
        >
          Seller
        </CustomButton>
      </div>
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
              ⭐ {product.rating} stars ({product.reviews} reviews)
            </p>

            <p className="price">${product.discountedPrice}</p>

            <p className="desc">
              {product.description || "No description available at the moment."}
            </p>

            <CustomButton className="add-to-cart">Add to Cart</CustomButton>
          </div>
        </div>
      </div>
      <h3 className="review-section-title">Customer Reviews</h3>
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

export default ItemDescription;
