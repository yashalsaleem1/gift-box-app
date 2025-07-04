import React, { useState } from "react";
import NavbarWrapper from "../../../layout/navbar";
import CateCard from "../../../components/cateCard";
import stockData from "../../buyer/constants/stockData";
import productData from "../../buyer/constants/productData";
import { Button, Form, Card } from "react-bootstrap";
import "./style.scss";

const Stock = () => {
  const [stockInputs, setStockInputs] = useState({});
  const [products, setProducts] = useState(productData);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [bulkAmount, setBulkAmount] = useState("");

  // Checkbox toggle
  const handleCheckboxChange = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  // Select All button logic
  const handleSelectAll = () => {
    const allIds = products.map((p) => p.id);
    setSelectedProducts(allIds);
  };

  //Apply to all button logic
  const handleBulkApply = () => {
    const changeAmount = parseInt(bulkAmount);

    if (isNaN(changeAmount)) {
      alert("Please enter a valid bulk amount");
      return;
    }

    const updated = products.map((product) => {
      if (selectedProducts.includes(product.id)) {
        const newStock = product.stock + changeAmount;
        return { ...product, stock: newStock >= 0 ? newStock : 0 };
      }
      return product;
    });

    setProducts(updated);
    setBulkAmount("");
    alert("Stock updated for selected products");
  };

  // Track input change for each product
  const handleStockInputChange = (id, value) => {
    setStockInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Individual product stock update
  const handleUpdate = (id) => {
    const rawValue = stockInputs[id];
    const changeAmount = parseInt(rawValue);

    if (isNaN(changeAmount)) {
      alert("Please enter a valid number");
      return;
    }

    const updated = products.map((product) => {
      if (product.id === id) {
        const newStock = product.stock + changeAmount;
        return { ...product, stock: newStock >= 0 ? newStock : 0 };
      }
      return product;
    });

    setProducts(updated);
    setStockInputs((prev) => ({ ...prev, [id]: "" }));
    alert(`Stock updated for product ID ${id}`);
  };

  return (
    <div>
      <NavbarWrapper />
      <CateCard title="Stock Management" categories={stockData} />

      <div className="bulk-stock-wrapper">
        <Card className="bulk-stock-card">
          <Card.Body>
            <Card.Title className="bulk-title">Bulk Stock Update</Card.Title>
            <Card.Subtitle className="mb-3">Add/Remove stock</Card.Subtitle>

            <div className="bulk-action-row">
              <Form.Control
                type="number"
                placeholder="Enter amount"
                className="bulk-input"
                value={bulkAmount}
                onChange={(e) => setBulkAmount(e.target.value)}
              />
              <div>
                <Button
                  variant="primary"
                  className="apply-btn"
                  onClick={handleBulkApply}
                >
                  Apply to Selected
                </Button>
                <Button
                  variant="secondary"
                  className="select-all-btn"
                  onClick={handleSelectAll}
                >
                  Select All
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        {products.map((product) => (
          <Card className="product-stock-card" key={product.id}>
            <Card.Body className="product-card-body">
              <div className="product-info">
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="text-muted">
                  Category: {product.category}
                </Card.Subtitle>
              </div>

              <div className="product-stock-controls">
                <div className="stock-count">
                  <span className="count">{product.stock}</span>
                  <small>units</small>
                </div>

                <Form.Check
                  type="checkbox"
                  className="stock-checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />

                <Form.Control
                  type="number"
                  value={stockInputs[product.id] || ""}
                  onChange={(e) =>
                    handleStockInputChange(product.id, e.target.value)
                  }
                  className="stock-input"
                />

                <Button
                  variant="danger"
                  className="update-stock-btn"
                  onClick={() => handleUpdate(product.id)}
                >
                  Update Stock
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Stock;
