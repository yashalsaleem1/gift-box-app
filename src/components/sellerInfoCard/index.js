import Card from "react-bootstrap/Card";
import "./style.scss";

function InfoCard({ title = "Seller Dashboard", info = [] }) {
  return (
    <div className="info-section">
      <h2 className="info-heading">{title}</h2>
      <div className="info-card-group">
        {info.map((info, index) => (
          <Card className="info-card" key={index}>
            <div className="icon">
              <info.icon />
            </div>
            <Card.Body>
              <Card.Title>{info.count}</Card.Title>
              <Card.Text>{info.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
