import Card from "react-bootstrap/Card";
import CustomButton from "../button";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function ControlCard({ control = [] }) {
  const navigate = useNavigate();
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
              <CustomButton
                className="control-btn active-btn"
                onClick={() => navigate(cont.path)}
              >
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
