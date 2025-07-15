import NavbarWrapper from "../../../layout/navbar/index";
import HeroBanner from "../../../components/banner/index";
import CateCard from "../../../components/cateCard/index";
import FeaturedCard from "../../../components/featuredCard";
import productData from "../constants/productData";
import { FaHeart, FaCakeCandles, FaRing, FaTree } from "react-icons/fa6";

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
  //create a state to save categoryData

  //Create a useEffect to fetch data from API and update state

  // create functions to handel category changes
  return (
    <>
      <NavbarWrapper />
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
