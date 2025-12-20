import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-black pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold mb-4">
              KN Tiling
            </h3>
            <p className="max-w-sm">
              Sydney&apos;s trusted tiling specialists delivering premium
              craftsmanship across residential and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className=""
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-4 ">
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+61 400 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>info@kntiling.com.au</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Sydney, NSW</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className=" text-gray-800">
            © {new Date().getFullYear()} KN Tiling. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-2 border border-white/30 hover:bg-white hover:text-[#1a300d] transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="p-2 border border-white/30 hover:bg-white hover:text-[#1a300d] transition"
            >
              <FaInstagram />
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
