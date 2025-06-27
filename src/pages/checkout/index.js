import { useState } from "react";
import NavScrollExample from "../../layout/navbar";
import CustomButton from "../../components/button/index";
import Form from "react-bootstrap/Form";
import FormInput from "../../components/form";
import { toast } from "react-toastify";
import "./style.scss";

const CheckoutPage = ({ title = "Checkout" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.zip
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Order placed successfully!");

    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      zip: "",
    });
  };

  return (
    <>
      <NavScrollExample />

      <div className="checkout-form-container">
        <h2 className="section-heading">{title}</h2>

        <Form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <FormInput
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            type="textarea"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

          <FormInput
            type="number"
            label="ZIP Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />

          <CustomButton className="add-btn" type="submit">
            Place Order
          </CustomButton>
        </Form>
      </div>
    </>
  );
};

export default CheckoutPage;
