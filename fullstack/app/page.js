"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#fefae0] text-[#034053]">
      <Navbar/>

        <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/tote/git1.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* Overlay Text - Center Left */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-6 md:px-16">
  <div className="text-white max-w-xl space-y-6">
    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
      Thoughtfully Made,<br />Beautifully Worn
    </h2>
    
    <p className="text-lg md:text-xl italic">
      Carry what matters — sustainably, stylishly.
    </p>

    <Link
      href="/products"
      className="inline-block bg-[#034053] text-white px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#022a38] transition duration-300 shadow-lg"
    >
       Shop Now
    </Link>
  </div>
</div>

    </section>

  

      {/* Featured Tote Bags */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Signature Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Eco Canvas Tote",
              img: "/tote/tote1.jpg",
            },
            {
              name: "Urban Chic Tote",
              img: "/tote/tote3.jpg",
            },
            {
              name: "Everyday Essentials Tote",
              img: "/tote/tote4.jpg",
            },
          ].map((product, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-94"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

        <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://www.livingwaters.co.in/cdn/shop/products/Classictotes_Classic_Tote_01_4417b72d-c8f1-4474-ba6c-81f9fe7a76d3.jpg?v=1681720575")`,
        }}
      >
        <div className="bg-[#fefae0]/80 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sustainable Totes for Every Lifestyle
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Designed with care, made for you.
          </p>
          <Link
            href="/products"
            className="bg-[#034053] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#022a38] transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
  

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to make the switch?</h2>
        <p className="mb-6 text-lg">
          Embrace sustainability with every step you take. Start your journey with a tote.
        </p>
        <Link
          href="/products"
          className="bg-[#034053] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#022a38] transition"
        >
          Explore Collection
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} The Tote Hub. All rights reserved.
      </footer>
    </div>
  );
}
