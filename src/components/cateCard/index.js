import Card from "react-bootstrap/Card";
import "./style.scss";

function cateCard({ title = "Shop by Occasion", categories = [] }) {
  return (
    <div className="category-section">
      <h2 className="category-heading">{title}</h2>

      <div className="cate-card-group">
        {categories.map((cat, index) => (
          <Card className="cate-card" key={index}>
            <div className="icon">
              <cat.icon />
            </div>
            <Card.Body>
              <Card.Title>{cat.name}</Card.Title>
              <Card.Text>{cat.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default cateCard;
