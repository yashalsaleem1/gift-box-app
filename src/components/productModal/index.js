import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductModal = ({ show, onClose, onSubmit, product, mode }) => {
  const isEdit =
    mode === "edit" || mode === "editStock" || mode === "editDiscount";

  const [form, setForm] = useState({
    id: null,
    title: "",
    category: "",
    stock: 0,
    originalPrice: "",
    discountedPrice: "",
    image: "",
    reviews: [],
  });

  useEffect(() => {
    if (isEdit || mode === "delete") {
      setForm(product);
    } else {
      setForm({
        id: Date.now(),
        title: "",
        category: "",
        stock: 0,
        originalPrice: "",
        discountedPrice: "",
        image: "",
        reviews: [],
      });
    }
  }, [show, product, isEdit, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    let payload = { ...form };

    if (mode === "editStock") {
      payload = { id: form.id, stock: parseInt(form.stock, 10) };
    } else if (mode === "editDiscount") {
      const discountPercentage = parseFloat(form.discountedPrice);
      const discounted =
        form.originalPrice - (form.originalPrice * discountPercentage) / 100;
      payload = {
        id: form.id,
        discountedPrice: discounted.toFixed(2),
      };
    }

    onSubmit(payload);
    onClose();
  };

  const renderFormFields = () => {
    switch (mode) {
      case "editStock":
        return (
          <Form.Group>
            <Form.Label>Update Stock</Form.Label>
            <Form.Control
              name="stock"
              type="number"
              value={form.stock}
              onChange={handleChange}
            />
          </Form.Group>
        );

      case "editDiscount":
        return (
          <Form.Group>
            <Form.Label>Discount Percentage (%)</Form.Label>
            <Form.Control
              name="discountedPrice"
              type="number"
              onChange={handleChange}
            />
          </Form.Group>
        );

      case "delete":
        return (
          <p>
            Are you sure you want to delete <strong>{product?.title}</strong>?
          </p>
        );

      default:
        return (
          <>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Original Price</Form.Label>
              <Form.Control
                name="originalPrice"
                value={form.originalPrice}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="image"
                value={form.image}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        );
    }
  };

  const getTitle = () => {
    switch (mode) {
      case "edit":
        return "Edit Product";
      case "editStock":
        return "Update Stock";
      case "editDiscount":
        return "Apply Discount";
      case "delete":
        return "Confirm Deletion";
      default:
        return "Add New Product";
    }
  };

  const getActionButtonText = () => {
    switch (mode) {
      case "edit":
        return "Update";
      case "editStock":
        return "Update Stock";
      case "editDiscount":
        return "Apply Discount";
      case "delete":
        return "Delete";
      default:
        return "Add";
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>{renderFormFields()}</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant={mode === "delete" ? "danger" : "warning"}
          onClick={handleSubmit}
        >
          {getActionButtonText()}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
