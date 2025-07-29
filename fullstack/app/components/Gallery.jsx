"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const images = [
    {
      src: "/tote/gallery1.jpg",
      title: "Confidence",
      description: "Feel put-together with just one move. Our bags are designed to elevate any outfit, and every part of your day.",
    },
    {
      src: "/tote/gallery21.jpg",
      title: "Ease",
      description: "TØTE is made to carry your day, not interrupt it. Smart in function. Clear in form. Effortless to use.",
    },
    {
      src: "/tote/gallery31.jpg",
      title: "Responsibility",
      description: "Buy less, but better. Timeless in design, and built for real life. One bag that stays, not another one that disappears.",
    },
  ];

  return (
    <section className="flex h-screen overflow-hidden">
      {images.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          className={`relative transition-all duration-700 overflow-hidden 
            ${active === null ? "flex-1" : active === index ? "flex-[3]" : "flex-[0.5]"}`}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover w-full h-full transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 text-white transition-opacity duration-500 opacity-0 hover:opacity-100">
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
            <p className="text-lg max-w-md">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
