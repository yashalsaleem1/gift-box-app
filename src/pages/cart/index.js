import { useCart } from "../context";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/index";
import NavScrollExample from "../../layout/navbar/index";
import { FaTrash } from "react-icons/fa6";
import "./style.scss";

const ShoppingCart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  return (
    <>
      <NavScrollExample />

      <div className="shopping-cart-page">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p className="price">${item.discountedPrice.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}

            <div className="cart-card">
              <h3>Total: ${total.toFixed(2)}</h3>
              <CustomButton
                variant="solid"
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout →
              </CustomButton>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
