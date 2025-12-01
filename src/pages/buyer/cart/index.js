import { useCart } from "../context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/authSelector";
import CustomButton from "../../../components/button/index";
import NavbarWrapper from "../../../layout/navbar/index";
import { FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

const ShoppingCart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (!user || user.role !== "buyer") {
      toast.info("Please log in as a buyer to proceed to checkout.");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  );

  return (
    <>
      <NavbarWrapper />

      <div className="shopping-cart-page container">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <Row key={item.id} className="cart-card align-items-center mb-3">
                <Col xs={12} sm={4} md={3}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </Col>

                <Col xs={12} sm={5} md={6} className="cart-info">
                  <h4>{item.title}</h4>
                  <p className="price">${item.discountedPrice.toFixed(2)}</p>
                </Col>

                <Col
                  xs={12}
                  sm={3}
                  md={3}
                  className="d-flex align-items-center justify-content-end"
                >
                  <div className="controls-wrapper d-flex align-items-center gap-2">
                    <div className="quantity-controls d-flex align-items-center gap-1">
                      <button onClick={() => handleDecrease(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </Col>
              </Row>
            ))}

            <Row className="cart-card align-items-center justify-content-between mt-4">
              <Col xs={12} md="auto">
                <h3>Total: ${total.toFixed(2)}</h3>
              </Col>
              <Col xs={12} md="auto" className="mt-2 mt-md-0">
                <CustomButton
                  variant="solid"
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout →
                </CustomButton>
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
