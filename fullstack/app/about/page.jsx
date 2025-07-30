"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white text-[#034053] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The ToteHub</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Where style meets sustainability — thoughtfully crafted tote bags for every soul.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <Image
            src="/tote/story.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover w-full"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              ToteHub began with a simple mission — to create tote bags that aren’t just bags, but a
              part of your everyday lifestyle. Whether you’re heading to the office, the grocery
              store, or a weekend getaway, our totes are designed to go with you — in style and with
              purpose.
            </p>
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To redefine what it means to carry a bag — not just a container, but a symbol of
              values: sustainability, beauty, and individuality.
            </p>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower people to express their identity and values through high-quality,
              sustainable totes that last a lifetime — with minimal environmental impact.
            </p>
          </div>
          <Image
            src="/tote/mission.png"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover w-full"
          />
        </div>

        {/* What Makes Us Unique */}
        <div className="bg-[#034053] text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">What Makes Us Different?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
              <p className="text-white/90">
                All our totes are made from ethically sourced, eco-friendly materials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Minimalist Design</h3>
              <p className="text-white/90">
                Chic, clean, and timeless styles that go with every outfit and occasion.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-white/90">
                We’re here for you — offering free returns, quick support, and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
