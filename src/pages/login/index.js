import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import {
  selectAuthError,
  selectAuthLoading,
} from "../../redux/authSelector.js";
import { useNavigate } from "react-router-dom";
import { FaBagShopping, FaShop } from "react-icons/fa6";
import CustomButton from "../../components/button/index";
import bg from "../../assets/images/login-background.png";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password, role }));
    if (login.fulfilled.match(result)) {
      navigate(role === "seller" ? "/seller" : "/");
    }
  };

  return (
    <div className="login-form-container" style={{ "--bg-url": `url(${bg})` }}>
      <div className="login-content">
        <h2 className="section-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="custom-button-group">
            <CustomButton
              className={`custom-btn ${role === "buyer" ? "active-btn" : ""}`}
              icon={FaBagShopping}
              variant="solid"
              onClick={() => setRole("buyer")}
            >
              Buyer
            </CustomButton>
            <CustomButton
              className={`custom-btn ${role === "seller" ? "active-btn" : ""}`}
              icon={FaShop}
              variant="outline"
              onClick={() => setRole("seller")}
            >
              Seller
            </CustomButton>
          </div>

          <input
            className="input-section"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-section"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn" disabled={loading}>
            Login
          </button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
