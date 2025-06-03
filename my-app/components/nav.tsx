"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Samuel</h1>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
