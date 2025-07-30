"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#034053] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The ToteHub</h2>
          <p className="text-sm">
            Thoughtfully made, beautifully worn. Explore our stylish, sustainable tote bags.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/signup" className="hover:underline">Sign Up</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm">support@totehub.com</p>
          <p className="text-sm mt-1">+91 77373 22966</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
        © {new Date().getFullYear()} The ToteHub. All rights reserved.
      </div>
    </footer>
  );
}
