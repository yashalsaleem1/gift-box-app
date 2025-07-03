import React from "react";
import { useSelector } from "react-redux";
import BuyerNavbar from "./buyerNavbar";
import SellerNavbar from "./sellerNavbar";

function NavbarWrapper() {
  const userRole = useSelector((state) => state.auth.user?.role);

  return userRole === "seller" ? <SellerNavbar /> : <BuyerNavbar />;
}

export default NavbarWrapper;
