"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Left Nav (Mobile hidden) */}
        <div className="hidden md:flex space-x-6 text-[#034053] font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/login" className="hover:text-white transition-colors">Login</Link>
        </div>

        {/* Center Logo */}
        <div className="text-xl md:text-3xl font-bold text-[#034053]">
          <Link href="/" className="hover:text-white transition-colors">The ToteHub</Link>
        </div>

        {/* Right (Cart + Hamburger for Mobile) */}
        <div className="flex items-center space-x-4 text-[#034053]">
          <Link href="/cart" className="text-2xl hover:text-white transition-colors">
            <IoCart />
          </Link>

          {/* Hamburger icon */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fefae0] bg-opacity-90 backdrop-blur-sm shadow-md px-6 py-4 space-y-4 text-[#034053]">
          <Link href="/" onClick={toggleMenu} className="block hover:text-black">Home</Link>
          <Link href="/products" onClick={toggleMenu} className="block hover:text-black">Products</Link>
          <Link href="/login" onClick={toggleMenu} className="block hover:text-black">Login</Link>
          <Link href="/cart" onClick={toggleMenu} className="block hover:text-black">Cart</Link>
        </div>
      )}
    </header>
  );
}
