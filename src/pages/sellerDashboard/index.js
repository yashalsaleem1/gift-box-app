import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavScrollExample from "../../layout/navbar";
import InfoCard from "../../components/sellerInfoCard";
import CustomButton from "../../components/button";
import ControlCard from "../../components/controlCard";
import { HiListBullet } from "react-icons/hi2";
import {
  FaBox,
  FaStar,
  FaPercent,
  FaTags,
  FaBagShopping,
  FaShop,
  FaWarehouse,
} from "react-icons/fa6";

const infoData = [
  {
    icon: FaBox,
    count: "4",
    description: "Total Products",
  },
  {
    icon: FaStar,
    count: "5",
    description: "Total Reviews",
  },
  {
    icon: FaPercent,
    count: "3",
    description: "Active Discounts",
  },
  {
    icon: FaTags,
    count: "2",
    description: "Active Deals",
  },
];

const controlData = [
  {
    icon: HiListBullet,
    title: "My Products & Reviews",
    description: "View all your products with customer feedback and ratings",
    content: "View Products",
  },
  {
    icon: FaWarehouse,
    title: "Stock Management",
    description: "Track and update your inventory levels across all products",
    content: "Manage Stock",
  },
  {
    icon: FaPercent,
    title: "Discounts & Offers",
    description: "Create automatic discounts and promotional offer",
    content: "Manage Discounts",
  },
  {
    icon: FaTags,
    title: "Special Deals",
    description: "Create and manage special deal campaigns",
    content: "Manage Deals",
  },
];

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState("seller");

  return (
    <div>
      <NavScrollExample />

      <div className="custom-button-group">
        <CustomButton
          className={`custom-btn ${activeRole === "buyer" ? "active-btn" : ""}`}
          icon={FaBagShopping}
          variant="solid"
          onClick={() => {
            setActiveRole("buyer");
            navigate("/");
          }}
        >
          Buyer
        </CustomButton>

        <CustomButton
          className={`custom-btn ${
            activeRole === "seller" ? "active-btn" : ""
          }`}
          icon={FaShop}
          variant="outline"
          onClick={() => {
            setActiveRole("seller");
            navigate("/seller");
          }}
        >
          Seller
        </CustomButton>
      </div>

      <InfoCard title="Seller Dashboard" info={infoData} />
      <ControlCard control={controlData} />
    </div>
  );
};

export default SellerDashboard;
