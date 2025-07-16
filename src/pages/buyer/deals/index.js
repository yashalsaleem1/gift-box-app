import FeaturedCard from "../../../components/featuredCard";
import NavbarWrapper from "../../../layout/navbar";
import { productData } from "../../../constants";

const DealsData = productData.filter(
  (product) => product.discountedPrice < product.originalPrice
);

const DealsPage = () => {
  return (
    <>
      <NavbarWrapper />
      <FeaturedCard title="Special Deals & Offers" products={DealsData} />;
    </>
  );
};

export default DealsPage;
