import NavbarWrapper from "../../../layout/navbar";
import InfoCard from "../../../components/sellerInfoCard";
import ControlCard from "../../../components/controlCard";
import { HiListBullet } from "react-icons/hi2";
import { FaBox, FaStar, FaPercent, FaTags, FaWarehouse } from "react-icons/fa6";

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
    path: "/seller/products",
  },
  {
    icon: FaWarehouse,
    title: "Stock Management",
    description: "Track and update your inventory levels across all products",
    content: "Manage Stock",
    path: "/seller/stock",
  },
  {
    icon: FaPercent,
    title: "Discounts & Offers",
    description: "Create automatic discounts and promotional offer",
    content: "Manage Discounts",
    path: "/seller/discounts",
  },
  {
    icon: FaTags,
    title: "Special Deals",
    description: "Create and manage special deal campaigns",
    content: "Manage Deals",
    path: "/seller/deals",
  },
];

const SellerDashboard = () => {
  return (
    <div>
      <NavbarWrapper />

      <InfoCard title="Seller Dashboard" info={infoData} />
      <ControlCard control={controlData} />
    </div>
  );
};

export default SellerDashboard;
