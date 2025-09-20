"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install lucide-react for icons: npm i lucide-react

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-6 z-50 bg-transparent">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-white">
        <Link href={`#start`}>
          &lt;<span className="font-serif text-white">SAYAN</span>/&gt;
        </Link>
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex font-serif space-x-6 text-lg">
        {["Start", "About", "Project", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-purple-400 transition"
          >
            &lt;{item}/&gt;
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 right-6 bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col space-y-4 md:hidden">
          {["Start", "About", "Project", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)} // close on click
            >
              &lt;{item}/&gt;
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
