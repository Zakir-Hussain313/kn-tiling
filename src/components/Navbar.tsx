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
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      });
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-400 bg-[#e4f5ed]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl
            sm:text-3xl
            italic
            lg:text-3xl
            font-extrabold
            tracking-wide
            bg-linear-to-r from-[#157eb6] to-[#533184]
            bg-clip-text text-transparent
          "
        >
          KN Tiling
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-[15px] font-medium text-gray-800">
            {["About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="transition-colors hover:text-black"
                >
                  {item}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#1a300d] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="
              rounded-md
              bg-[#1a300d]
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:scale-[1.03]
              hover:shadow-md
            "
          >
            Get a free quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-900"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={mobileMenuRef}
        className="
          md:hidden
          absolute
          top-full
          left-0
          w-full
          overflow-hidden
          bg-[#e4f5ed]
          px-6
          font-medium
          border-t
          border-gray-400
        "
        style={{ height: 0, opacity: 0 }}
      >
        {["About", "Services", "Gallery", "Contact"].map((item) => (
          <li
            key={item}
            className="border-b border-gray-300 last:border-none"
          >
            <Link
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="
                block
                py-4
                text-gray-900
                transition-colors
                hover:text-[#533184]
              "
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
