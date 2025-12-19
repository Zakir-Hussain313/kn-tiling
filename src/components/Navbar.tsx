// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className="relative bg-[#e4f5ed] w-full z-50 backdrop-blur-md border-b-2 border-gray-500">
      <div className="max-w-7xl px-4 mx-auto py-1 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl lg:text-5xl py-2 font-extrabold italic leading-tight bg-linear-to-r from-[#157eb6] to-[#533184] bg-clip-text text-transparent"
        >
          KN Tiling
        </Link>

        {/* Desktop Menu + Button */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 font-semibold text-black">
            {["About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="transition-colors duration-300 cursor-pointer hover:text-[#1a300d]"
                >
                  {item}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#1a300d] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="bg-[#1a300d] text-white px-5 py-2 font-medium hover:opacity-90 transition"
          >
            Get a free quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer text-black"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu (absolute, no layout shift) */}
      <ul
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-0 w-full bg-[#e4f5ed] overflow-hidden z-50 px-6 font-medium border-t border-gray-400"
        style={{ height: 0, opacity: 0 }}
      >
        {["About", "Services", "Gallery", "Contact"].map((item) => (
          <li
            key={item}
            className="py-4 border-b border-b-gray-400 last:border-none"
          >
            <Link
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block w-full text-black hover:text-purple-500 transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
