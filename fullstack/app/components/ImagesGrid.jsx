"use client";

import Image from "next/image";

export default function ImagesGrid() {
  const features = [
    {
      title: "Eco-Friendly Totes",
      image: "/tote/tote1.jpg",
      link: "/products",
    },
    {
      title: "Minimalist Designs",
      image: "/tote/tote2.jpg",
      link: "/products",
    },
    {
      title: "Everyday Essentials",
      image: "/tote/tote3.jpg",
      link: "/products",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-[#fefae0]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
