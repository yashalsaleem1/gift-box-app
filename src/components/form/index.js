import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./style.scss";

function FormGroupExample({ title = "Customer Reviews" }) {
  return (
    <div className="review-form-container">
      <h2 className="section-heading">{title}</h2>

      <Form>
        <Form.Group controlId="formProduct">
          <Form.Label>Product</Form.Label>
          <Form.Select defaultValue="Select a product">
            <option disabled>Select a product</option>
            <option>Premium Wedding Gift Box</option>
            <option>Birthday Deluxe Collection</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formRating">
          <Form.Label>Select Rating</Form.Label>
          <Form.Select defaultValue="Select rating">
            <option disabled>Select rating</option>
            <option>★★★★★ (5 stars)</option>
            <option>★★★★☆ (4 stars)</option>
            <option>★★★☆☆ (3 stars)</option>
            <option>★★☆☆☆ (2 stars)</option>
            <option>★☆☆☆☆ (1 star)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formReviewText" className="mb-3">
          <Form.Label>Your Review</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>

        <Button className="add-btn">Submit Review</Button>
      </Form>
    </div>
  );
}

export default FormGroupExample;
