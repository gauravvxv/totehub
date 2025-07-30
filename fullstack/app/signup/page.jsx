"use client";

import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left Image/Branding */}
      <div className="relative hidden md:block">
        <Image
          src="/tote/main1.jpg"
          alt="Signup Visual"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join ToteHub
          </h2>
          <p className="text-lg text-white italic">
            "Totes that tell your story — sign up and start now."
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#034053] mb-6 text-center">Sign Up</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#034053] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#034053] outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#034053] outline-none"
            />
            <button className="w-full bg-[#034053] text-white py-3 rounded-lg hover:bg-[#022a38] transition">
              Create Account
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#034053] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
