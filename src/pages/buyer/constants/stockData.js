import {
  FaBoxOpen,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const stockData = [
  {
    name: "In Stock",
    description: (
      <span
        style={{ color: "#e91e63", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        4
      </span>
    ),
    icon: FaBoxOpen,
  },
  {
    name: "Low Stock",
    description: (
      <span
        style={{ color: "#ffc107", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        0
      </span>
    ),
    icon: FaExclamationTriangle,
  },
  {
    name: "Out of Stock",
    description: (
      <span
        style={{ color: "#e91e63", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        0
      </span>
    ),
    icon: FaTimesCircle,
  },
];

export default stockData;
