import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import DealsPage from "../pages/deals";
import CategoryPage from "../pages/category";
import ReviewPage from "../pages/review";
import ItemDescription from "../pages/itemDescription";
import ShoppingCart from "../pages/cart";
import CheckoutPage from "../pages/checkout";
import SellerDashboard from "../pages/sellerDashboard";
import ProtectedRoute from "./protectedRoute";

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

  // Catch-all fallback
  { path: "*", element: <Navigate to="/" /> },
];

export default routeConfig;
