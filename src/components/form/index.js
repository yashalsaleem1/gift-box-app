import Form from "react-bootstrap/Form";

function FormInput({ type = "text", label = "", options = [], ...props }) {
  switch (type) {
    case "select":
      return (
        <Form.Group controlId={props.id || label}>
          <Form.Label>{label}</Form.Label>
          <Form.Select {...props}>
            <option disabled>{props.placeholder || `Select ${label}`}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      );

    case "textarea":
      return (
        <Form.Group controlId={props.id || label}>
          <Form.Label>{label}</Form.Label>
          <Form.Control as="textarea" rows={3} {...props} />
        </Form.Group>
      );

    default:
      return (
        <Form.Group controlId={props.id || label}>
          <Form.Label>{label}</Form.Label>
          <Form.Control type={type} {...props} />
        </Form.Group>
      );
  }
}

export default FormInput;
