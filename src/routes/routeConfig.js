import { Navigate } from "react-router-dom";
import Home from "../pages/buyer/home";
import Login from "../pages/login";
import DealsPage from "../pages/buyer/deals";
import CategoryPage from "../pages/buyer/category";
import ReviewPage from "../pages/buyer/review";
import ItemDescription from "../pages/buyer/itemDescription";
import ShoppingCart from "../pages/buyer/cart";
import CheckoutPage from "../pages/buyer/checkout";
import SellerDashboard from "../pages/seller/sellerDashboard";
import ProtectedRoute from "./protectedRoute";
import SellerReview from "../pages/seller/reviews";
import Stock from "../pages/seller/stockManagement";
import Products from "../pages/seller/products";

const routeConfig = [
  // Public routes
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/category", element: <CategoryPage /> },
  { path: "/deals", element: <DealsPage /> },
  { path: "/product/:id", element: <ItemDescription /> },

  // Buyer-protected routes
  {
    path: "/cart",
    element: (
      <ProtectedRoute roles={["buyer"]}>
        <ShoppingCart />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute roles={["buyer"]}>
        <CheckoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reviews",
    element: (
      <ProtectedRoute roles={["buyer"]}>
        <ReviewPage />
      </ProtectedRoute>
    ),
  },

  // Seller-protected route
  {
    path: "/seller",
    element: (
      <ProtectedRoute roles={["seller"]}>
        <SellerDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/review",
    element: (
      <ProtectedRoute roles={["seller"]}>
        <SellerReview />
      </ProtectedRoute>
    ),
  },
  {
    path: "/seller/products",
    element: (
      <ProtectedRoute roles={["seller"]}>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/seller/stock",
    element: (
      <ProtectedRoute roles={["seller"]}>
        <Stock />
      </ProtectedRoute>
    ),
  },
  // Catch-all fallback
  { path: "*", element: <Navigate to="/" /> },
];

export default routeConfig;
