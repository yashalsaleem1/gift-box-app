import { useNavigate, useLocation } from "react-router-dom";
import FeaturedCard from "../../../components/featuredCard";
import CustomButton from "../../../components/button";
import NavbarWrapper from "../../../layout/navbar";
import { FaBagShopping, FaShop } from "react-icons/fa6";
import { productData } from "../../../constants";

const DealsData = productData.filter(
  (product) => product.discountedPrice < product.originalPrice
);

const DealsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSellerActive = location.pathname === "/seller";
  return (
    <>
      <NavbarWrapper />
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
