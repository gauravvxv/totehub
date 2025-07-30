// app/layout.jsx
"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "../app/components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body>
        {!hideNavbar && <Navbar />}
        {children}
        {!hideNavbar && <Footer />}
        
      </body>
    </html>
  );
}
