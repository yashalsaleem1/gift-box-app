import NavbarWrapper from "../../../layout/navbar/index";
import HeroBanner from "../../../components/banner/index";
import CateCard from "../../../components/cateCard/index";
import FeaturedCard from "../../../components/featuredCard";
import { productData } from "../../../constants/index";
import { categoryData } from "../../../constants/index";

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
