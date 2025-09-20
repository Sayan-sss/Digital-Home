"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50 bg-transparent">
      <h1 className="text-2xl font-extrabold text-white">
        &lt;<span className="font-serif text-purple-500">SAYAN</span>/&gt;
      </h1>
      <div className="font-serif space-x-6 text-lg">
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
    </nav>
  );
}
