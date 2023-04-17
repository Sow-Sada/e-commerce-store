"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="bg-[#57C5B6] flex justify-between px-4 py-4">
      <div>
        <Link href="/">
          <h3 className="text-2xl font-medium text-white">Saturn +</h3>
        </Link>
      </div>
      <ul className="hidden space-x-8 lg:flex text-white ">
        <Link className="hover:text-green-800" href="/">
          Home
        </Link>
        <Link className="hover:text-green-800" href="/products">
          Products
        </Link>
        <Link className="hover:text-green-800" href="/sale">
          Sale
        </Link>
        <Link className="hover:text-green-800" href="/about">
          About Us
        </Link>
      </ul>
      <section className="lg:hidden">
        <div onClick={() => setIsNavOpen((prev) => !prev)} className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <Link
              className="text-slate-900 border-b border-gray-400 my-8 uppercase"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-slate-900 border-b border-gray-400 my-8 uppercase"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="text-slate-900 border-b border-gray-400 my-8 uppercase"
              href="/sale"
            >
              Sale
            </Link>
            <Link
              className="text-slate-900 border-b border-gray-400 my-8 uppercase"
              href="/about"
            >
              About Us
            </Link>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
