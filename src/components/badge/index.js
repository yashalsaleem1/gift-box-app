import Badge from "react-bootstrap/Badge";
import "./style.scss";

const DiscountBadge = ({ originalPrice, discountedPrice }) => {
  if (discountedPrice >= originalPrice) return null;

  const discount = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );

  return <Badge className="discount-badge">{discount}% OFF</Badge>;
};

export default DiscountBadge;
