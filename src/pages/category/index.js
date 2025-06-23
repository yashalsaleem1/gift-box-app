import { useNavigate, useLocation } from "react-router-dom";
import NavScrollExample from "../../layout/navbar";
import CateCard from "../../components/cateCard";
import CustomButton from "../../components/button";
import {
  FaHeart,
  FaCakeCandles,
  FaRing,
  FaTree,
  FaBagShopping,
  FaShop,
} from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

const moreCategoryData = [
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
  {
    icon: FaHeart,
    name: "Valentine's Day",
    description: "Express your love with perfect gifts",
  },
  {
    icon: GiGraduateCap,
    name: "Graduation",
    description: "Celebrate achievements and new beginnings",
  },
];

const CategoryPage = () => {
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
      <CateCard title="All Categories" categories={moreCategoryData} />
    </>
  );
};

export default CategoryPage;
