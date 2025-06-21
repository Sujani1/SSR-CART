import React, { useState } from "react";
import PricingSection from "./PricingSection";

const ProductDetailCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-6 my-10 grid grid-cols-1 md:grid-cols-2 gap-10 border rounded-xl shadow-sm">
      {/* Image */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-lg mr-2">
            ⭐ {product.rating}
          </span>
          <span className="text-gray-600 text-sm">(120 reviews)</span>
        </div>

        <p className="text-xl text-indigo-600 font-semibold mb-4">
          {product.price}
        </p>

        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Size Selector */}
        <div className="mb-4">
          <h4 className="font-medium mb-1">Select Size:</h4>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border rounded px-3 py-1 ${
                  selectedSize === size
                    ? "bg-indigo-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6">
          <h4 className="font-medium mb-1">Quantity:</h4>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border rounded px-4 py-1 w-20"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
            Buy Now
          </button>
        </div>

        {/* Tags */}
        <div className="text-sm text-gray-600">
          Category:{" "}
          <span className="font-medium text-indigo-600">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      title: "Performance Dry-Fit Tee",
      description:
        "Breathable, stretchable, and sweat-resistant — made for your toughest workouts.",
      price: "₹799",
      image: "https://i5.walmartimages.com/asr/db9a890e-8c22-44e8-a7c8-9e06c1c8d5a2_1.714ebad582f6180606120c148024cd8b.jpeg",
      rating: 4.3,
      category: "Sportswear",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      title: "Embroidered Anarkali Suit",
      description:
        "Grace meets tradition in this elegant Anarkali with fine detailing.",
      price: "₹1,899",
      image: "https://th.bing.com/th/id/OIP.P8RA5w801BHq3nntBJz03wHaKt?r=0&rs=1&pid=ImgDetMain",
      rating: 4.6,
      category: "Ethnic Wear",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      title: "Graphic Cotton T-Shirt",
      description:
        "Soft cotton tee with bold graphic print – perfect for daily wear.",
      price: "₹499",
      image: "https://i.pinimg.com/originals/c0/43/43/c04343d7271b3e350e59ac9bcdd2581d.jpg",
      rating: 4.2,
      category: "T-Shirts",
      sizes: ["M", "L", "XL"],
    },
    {
      title: "Ruffled Western Dress",
      description:
        "Step out in style with this modern, flowy western dress — made for compliments.",
      price: "₹1,499",
      image: "https://cdn.shopify.com/s/files/1/1376/4293/products/IMG_1118_ef9533ea-996d-43ef-a5c3-f2f3029395ef.jpg?v=1638464167",
      rating: 4.5,
      category: "Western Wear",
      sizes: ["S", "M", "L", ""],
    },
    {
      title: "Slim Fit Chinos",
      description:
        "Sharp, comfortable chinos that go from boardroom to brunch with ease.",
      price: "₹1,099",
      image: "https://i.pinimg.com/originals/2f/bc/02/2fbc020c17cb9fe45a89a8a1eb176827.jpg",
      rating: 4.4,
      category: "Pants & Trousers",
      sizes: ["M", "L", "XL", "XXL"],
    },
    {
      title: "Seasonal Printed Shirt",
      description:
        "Fresh prints, relaxed fit – this season’s must-have for effortless style.",
      price: "₹899",
      image: "https://th.bing.com/th/id/OIP.fv-P1Z7ef4RUZy1QjN6R-AHaJv?r=0&w=1140&h=1500&rs=1&pid=ImgDetMain",
      rating: 4.7,
      category: "New Season",
      sizes: ["S", "M", "L"],
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductDetailCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
