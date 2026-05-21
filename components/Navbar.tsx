"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" style={{borderTop: "3px solid #2E5FA3"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="https://c90ef8c4cbb00b7bf436.cdn6.editmysite.com/uploads/b/c90ef8c4cbb00b7bf436f07195f928132b9181d4844ec362678557323f4a25b5/10.4.2025_68e19f822dc1a6.94991264.png?width=2400&optimize=medium"
            alt="PetCora"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-[#2E5FA3] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Cart */}
        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Now
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-gray-700 hover:text-[#2E5FA3] border-b border-gray-50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-[#F0A500] text-white font-bold py-3 rounded-full"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
