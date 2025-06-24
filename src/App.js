import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import SellerDashboard from "./pages/sellerDashboard";
import CategoryPage from "./pages/category";
import DealsPage from "./pages/deals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/deals" element={<DealsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
