// components/ProductCard.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#034053]">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="text-[#034053] font-bold mt-2">₹{product.price}</div>
        <button className="mt-4 px-4 py-2 bg-[#034053] text-white rounded-md hover:bg-[#022a38] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
