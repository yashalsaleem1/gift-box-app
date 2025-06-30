import { useState } from "react";
import NavScrollExample from "../../layout/navbar";
import CustomButton from "../../components/button/index";
import Form from "react-bootstrap/Form";
import FormInput from "../../components/form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./style.scss";

const checkoutSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string()
    .matches(/^\d{5}$/, "ZIP Code must be 5 digits")
    .required("ZIP Code is required"),
});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await checkoutSchema.validate(formData, { abortEarly: false });

      toast.success("Order placed successfully!");

      setFormData({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
      });
    } catch (err) {
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((error) => toast.error(error.message));
      } else {
        toast.error("Validation failed.");
      }
    }
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
