"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const products = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Tote Bag ${i + 1}`,
  price: 899 + i * 50,
  discountPrice: 1099 + i * 50,
  rating: 4 + (i % 2),
  image: `/tote/tote${(i % 5) + 1}.jpg`, // Use product1.jpg to product5.jpg
}));

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-4 sm:px-8 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-[#034053] mb-10">
        Our Tote Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md hover:shadow-lg transition rounded-2xl overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <div className="p-4 flex flex-col justify-between h-52">
              <h2 className="text-lg font-semibold text-[#034053]">
                {product.name}
              </h2>

              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                <span className="line-through">₹{product.discountPrice}</span>
                <span className="text-green-600 font-bold text-md">
                  ₹{product.price}
                </span>
              </div>

              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button className="mt-4 bg-[#034053] hover:bg-[#022a38] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition">
                <IoCart />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
