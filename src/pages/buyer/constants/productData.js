import img from "../../../assets/images/gift-image.png";

const productData = [
  {
    id: 1,
    title: "Premium Wedding Gift Box",
    image: img,
    originalPrice: 89.99,
    discountedPrice: 89.99,
    rating: 5,
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
    image: img,
    originalPrice: 65.99,
    discountedPrice: 59.39,
    rating: 4,
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
    image: img,
    originalPrice: 75.5,
    discountedPrice: 64.17,
    rating: 4,
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
    image: img,
    originalPrice: 95.0,
    discountedPrice: 76.0,
    rating: 4,
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

export default productData;
