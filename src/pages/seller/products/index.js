import { useState } from "react";
import SellerReviewCard from "../../../components/sellerReviewCard";
import NavbarWrapper from "../../../layout/navbar";
import { productData } from "../../../constants/index";
import ProductModal from "../../../components/productModal";
import "./style.scss";

const SellerProductsPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [stockFilter, setStockFilter] = useState("All Stock");
  const [discountFilter, setDiscountFilter] = useState("All Products");
  const [products, setProducts] = useState(productData);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalMode, setModalMode] = useState("add");

  const categories = [
    "All Categories",
    ...new Set(products.map((p) => p.category)),
  ];

  const handleAddOrUpdateProduct = (updatedProduct) => {
    if (
      modalMode === "edit" ||
      modalMode === "editStock" ||
      modalMode === "editDiscount"
    ) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p,
        ),
      );
    } else if (modalMode === "delete") {
      setProducts((prev) => prev.filter((p) => p.id !== updatedProduct.id));
    } else {
      setProducts([updatedProduct, ...products]);
    }

    setEditingProduct(null);
    setShowModal(false);
    setModalMode("add");
  };

  const filteredProducts = products.filter((product) => {
    const inCategory =
      categoryFilter === "All Categories" ||
      product.category === categoryFilter;

    const inStock =
      stockFilter === "All Stock" ||
      (stockFilter === "In Stock" && product.stock > 0) ||
      (stockFilter === "Out of Stock" && product.stock === 0) ||
      (stockFilter === "Low Stock" && product.stock > 0 && product.stock <= 5);

    const inDiscount =
      discountFilter === "All Products" ||
      (discountFilter === "No Discount" &&
        product.discountedPrice === product.originalPrice) ||
      (discountFilter === "Discount" &&
        product.discountedPrice < product.originalPrice);

    return inCategory && inStock && inDiscount;
  });

  return (
    <div>
      <NavbarWrapper />
      <div className="page-header">
        <h2 className="page-title">My Products & Customer Feedback</h2>
      </div>

      <div className="filter-card">
        <h5 className="filter-title">Filter Products</h5>
        <div className="filter-row">
          <select
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>

          <select
            className="form-select"
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
          >
            <option>All Stock</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
            <option>Low Stock</option>
          </select>

          <select
            className="form-select"
            value={discountFilter}
            onChange={(e) => setDiscountFilter(e.target.value)}
          >
            <option>All Products</option>
            <option>No Discount</option>
            <option>Discount</option>
          </select>

          <button
            className="btn btn-warning add-product-btn"
            onClick={() => {
              setEditingProduct(null);
              setModalMode("add");
              setShowModal(true);
            }}
          >
            + Add New Product
          </button>
        </div>
      </div>

      <div className="product-cards-wrapper">
        {filteredProducts.map((product, i) => (
          <SellerReviewCard
            key={i}
            product={product}
            onEdit={(p) => {
              setEditingProduct(p);
              setModalMode("edit");
              setShowModal(true);
            }}
            onStockUpdate={(p) => {
              setEditingProduct(p);
              setModalMode("editStock");
              setShowModal(true);
            }}
            onDiscountUpdate={(p) => {
              setEditingProduct(p);
              setModalMode("editDiscount");
              setShowModal(true);
            }}
            onDelete={(p) => {
              setEditingProduct(p);
              setModalMode("delete");
              setShowModal(true);
            }}
          />
        ))}
      </div>

      <ProductModal
        show={showModal}
        onClose={() => {
          setEditingProduct(null);
          setShowModal(false);
          setModalMode("add");
        }}
        onSubmit={handleAddOrUpdateProduct}
        product={editingProduct}
        mode={modalMode}
      />
    </div>
  );
};

export default SellerProductsPage;
