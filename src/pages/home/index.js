import { useNavigate, useLocation } from "react-router-dom";
import NavScrollExample from "../../layout/navbar/index";
import CustomButton from "../../components/button/index";
import HeroBanner from "../../components/banner/index";
import CateCard from "../../components/cateCard/index";
import FeaturedCard from "../../components/featuredCard";
import productData from "../productData";
import {
  FaBagShopping,
  FaShop,
  FaHeart,
  FaCakeCandles,
  FaRing,
  FaTree,
} from "react-icons/fa6";

const categoryData = [
  {
    icon: FaHeart,
    name: "Wedding",
    description: "Beautiful gift boxes for the perfect wedding celebrations.",
  },
  {
    icon: FaCakeCandles,
    name: "Birthday",
    description: "Make birthdays unforgettable with our special collections.",
  },
  {
    icon: FaRing,
    name: "Anniversary",
    description: "Celebrate love with our romantic anniversary boxes.",
  },
  {
    icon: FaTree,
    name: "Christmas",
    description: "Spread holiday joy with festive gift collections.",
  },
];

const Home = () => {
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
      <HeroBanner
        title="Premium Gift Boxes"
        description="Curated with love for every special occasion"
        buttonLabel="Shop Now"
        buttonLink="/category"
      />
      <CateCard title="Shop by Occasion" categories={categoryData} />;
      <FeaturedCard title="Featured Products" products={productData} />
    </>
  );
};

export default Home;
