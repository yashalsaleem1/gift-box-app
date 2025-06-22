import Card from "react-bootstrap/Card";
import CustomButton from "../button";
import "./style.scss";

function ControlCard({ control = [] }) {
  return (
    <div className="control-section">
      <div className="control-card-group">
        {control.map((cont, index) => (
          <Card className="control-card" key={index}>
            <div className="icon">
              <cont.icon />
            </div>
            <Card.Body>
              <Card.Title>{cont.title}</Card.Title>
              <Card.Text>{cont.description}</Card.Text>
              <CustomButton className="control-btn active-btn">
                {cont.content}
              </CustomButton>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ControlCard;
