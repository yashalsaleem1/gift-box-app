import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import SellerDashboard from "./pages/sellerDashboard";
import CategoryPage from "./pages/category";
import DealsPage from "./pages/deals";
import ReviewPage from "./pages/review";
import ItemDescription from "./pages/itemDescription";
import ShoppingCart from "./pages/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./pages/context";
import CheckoutPage from "./pages/checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/product/:id" element={<ItemDescription />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" />
    </CartProvider>
  );
}

export default App;
