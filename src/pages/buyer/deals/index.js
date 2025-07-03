import { useNavigate, useLocation } from "react-router-dom";
import FeaturedCard from "../../../components/featuredCard";
import CustomButton from "../../../components/button";
import NavScrollExample from "../../../layout/navbar";
import { FaBagShopping, FaShop } from "react-icons/fa6";

const allProducts = [
  {
    id: 1,
    title: "Premium Wedding Gift Box",
    image: "../../assets/images/gift-image.png",
    originalPrice: 89.99,
    discountedPrice: 89.99,
    rating: 5,
    reviews: 127,
  },
  {
    id: 2,
    title: "Birthday Deluxe Collection",
    image: "../../assets/images/gift-image.png",
    originalPrice: 65.99,
    discountedPrice: 59.39,
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    title: "Romantic Anniversary Set",
    image: "../../assets/images/gift-image.png",
    originalPrice: 75.5,
    discountedPrice: 64.17,
    rating: 4,
    reviews: 156,
  },
  {
    id: 4,
    title: "Festive Christmas Collection",
    image: "../../assets/images/gift-image.png",
    originalPrice: 95.0,
    discountedPrice: 76.0,
    rating: 4,
    reviews: 203,
  },
];

const DealsData = allProducts.filter(
  (product) => product.discountedPrice < product.originalPrice
);

const DealsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSellerActive = location.pathname === "/seller";
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
      ;
      <FeaturedCard title="Special Deals & Offers" products={DealsData} />;
    </>
  );
};

export default DealsPage;
