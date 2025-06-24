import { useNavigate, useLocation } from "react-router-dom";
import NavScrollExample from "../../layout/navbar";
import CustomButton from "../../components/button/index";
import FormGroupExample from "../../components/form";
import ReviewCard from "../../components/reviewCard";
import { FaBagShopping, FaShop } from "react-icons/fa6";
import "./style.scss";

const ReviewPage = () => {
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
      <FormGroupExample title="Customer Reviews" />

      <div className="review-section-container">
        <h4 className="review-section-title">All Reviews</h4>

        <ReviewCard
          title="Premium Wedding Gift Box"
          rating={5}
          name="Sarah M."
          date="2024-01-15"
          review="Absolutely beautiful! Perfect for our wedding guests."
        />

        <ReviewCard
          title="Birthday Deluxe Collection"
          rating={4}
          name="Mike R."
          date="2024-01-10"
          review="Great quality items, kids loved it!"
        />

        <ReviewCard
          title="Premium Wedding Gift Box"
          rating={5}
          name="Jennifer L."
          date="2024-01-12"
          review="Exceeded expectations! Beautiful packaging and quality items."
        />

        <ReviewCard
          title="Romantic Anniversary Set"
          rating={5}
          name="David K."
          date="2024-01-08"
          review="Perfect romantic touch for our anniversary celebration."
        />

        <ReviewCard
          title="Festive Christmas Collection"
          rating={4}
          name="Mary T."
          date="2024-01-05"
          review="Great holiday spirit in this box!"
        />
      </div>
    </>
  );
};

export default ReviewPage;
