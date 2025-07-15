import weddingGiftImage from "../assets/images/wedding-giftbox.jpeg";
import birthdayGiftImage from "../assets/images/Birthday-giftbox.jpeg";
import anniversaryGiftImage from "../assets/images/anniversary-giftbox.jpg";
import christmasGiftImage from "../assets/images/christmas-giftbox.jpeg";
import {
  FaBoxOpen,
  FaExclamationTriangle,
  FaTimesCircle,
  FaHeart,
  FaBirthdayCake,
  FaRing,
  FaTree,
} from "react-icons/fa";

//return policy constants

export const returnPolicyContent = {
  title: "Return & Refund Policy",
  subtitle:
    "We want you to love your gift. If you're not completely satisfied, we're here to help.",
  sections: [
    {
      icon: "📦",
      heading: "Returns",
      description:
        "You have 7 days to return an item from the date you received it. Items must be unused and in original condition.",
    },
    {
      icon: "💰",
      heading: "Refunds",
      description:
        "After receiving your return, we’ll inspect it and notify you. If approved, we’ll issue a refund to your original payment method.",
    },
    {
      icon: "🚫",
      heading: "Non-returnable Items",
      description: "• Personalized gift boxes\n• Sale items\n• Opened items",
    },
  ],
  cta: "Start a Return",
};

//product data

export const productData = [
  {
    id: 1,
    title: "Premium Wedding Gift Box",
    image: weddingGiftImage,
    originalPrice: 89.99,
    discountedPrice: 89.99,
    rating: 5,
    review: 127,
    description:
      "A carefully curated collection of premium items perfect for wedding celebrations. Each box contains handpicked items that create lasting memories for the special couple.",
    reviews: [
      {
        name: "Sarah M.",
        date: "2024-01-15",
        message: "Absolutely beautiful! Perfect for our wedding guests.",
        rating: 5,
      },
      {
        name: "Jennifer L.",
        date: "2024-01-12",
        message:
          "Exceeded expectations! Beautiful packaging and quality items.",
        rating: 5,
      },
    ],
    category: "Wedding",
    stock: 15,
  },
  {
    id: 2,
    title: "Birthday Deluxe Collection",
    image: birthdayGiftImage,
    originalPrice: 65.99,
    discountedPrice: 59.39,
    rating: 4,
    review: 89,
    reviews: [
      {
        name: "Mike R.",
        date: "2024-01-10",
        message: "Great quality items, kids loved it!",
        rating: 4,
      },
    ],
    category: "Birthday",
    stock: 21,
  },
  {
    id: 3,
    title: "Romantic Anniversary Set",
    image: anniversaryGiftImage,
    originalPrice: 75.5,
    discountedPrice: 64.17,
    rating: 4,
    review: 156,
    reviews: [
      {
        name: "David K.",
        date: "2024-01-08",
        message: "Perfect romantic touch for our anniversary celebration.",
        rating: 5,
      },
    ],
    category: "Anniversary",
    stock: 35,
  },
  {
    id: 4,
    title: "Festive Christmas Collection",
    image: christmasGiftImage,
    originalPrice: 95.0,
    discountedPrice: 76.0,
    rating: 4,
    review: 203,
    reviews: [
      {
        name: "Mary T.",
        date: "2024-01-05",
        message: "Great holiday spirit in this box!",
        rating: 4,
      },
    ],
    category: "Festival",
    stock: 5,
  },
];

//stock data

export const stockData = [
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

//category data

export const categoryData = [
  {
    icon: FaHeart,
    name: "Wedding",
    description: "Beautiful gift boxes for the perfect wedding celebrations.",
  },
  {
    icon: FaBirthdayCake,
    name: "Birthday",
    description: "Make birthdays unforgettable with our special collections.",
  },
  {
    icon: FaRing,
    name: "Anniversary",
    description: "Celebrate love with our romantic anniversary boxes.",
  },
  {
    icon: FaTree,
    name: "Christmas",
    description: "Spread holiday joy with festive gift collections.",
  },
];
