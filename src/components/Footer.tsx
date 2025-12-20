import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* MAIN GRID */}
        <div className="grid gap-10 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="
            text-2xl
            italic
            sm:text-3xl
            lg:text-3xl
            font-extrabold
            tracking-wide
            bg-linear-to-r from-[#157eb6] to-[#533184]
            bg-clip-text text-transparent
            m-4 mb-6 inline-block
          "
            >
              KN Tiling
            </Link>

            <p className="text-sm leading-relaxed mb-6">
              Experienced tiling specialists serving Sydney since 2010.
              We provide professional bathroom, kitchen, floor, wall,
              outdoor, pool and balcony tiling services throughout Sydney
              with care and quality. Our fully licensed and insured team
              with over 15 years of experience ensures your property is in
              safe hands.
            </p>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                <FaInstagram />
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Gallery</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Renovations Sydney</li>
              <li>Bathroom Renovations Sydney</li>
              <li>Floor Tiling Sydney</li>
              <li>Wall Tiling Sydney</li>
              <li>Kitchen Tiling Sydney</li>
              <li>Outdoor Tiling Sydney</li>
              <li>Pool Tiling Sydney</li>
              <li>Balcony Tiling Sydney</li>
              <li>Waterproofing Sydney</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600" />
                0123456789
              </li>

              <li className="flex items-center gap-3">
                <MdEmail className="text-green-600" />
                info@kntiling.com
              </li>

              <li className="flex items-center gap-3">
                <MdLocationOn className="text-green-600" />
                Sydney, NSW
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineDocumentText className="text-green-600" />
                ABN: 72 683 763 576
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineDocumentText className="text-green-600" />
                Contractor Licence: 123456789
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© 2025 KN Tiling Pty Ltd. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-gray-800 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-800 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}