import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SiThreads } from "react-icons/si"; // Threads icon
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-700">
      <div className="max-w-7xl mx-auto px-4 pt-6 lg:pt-12">
        {/* MAIN GRID */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="">
            {/* <Link
              href="/"
              className="italic text-5xl font-extrabold tracking-wide bg-linear-to-r from-[#157eb6] to-[#533184] bg-clip-text text-transparent mb-4 inline-block"
            >
              KN Tiling
            </Link> */}
            <Link href={'/'}>
            <Image 
            src={'/tiling-logo.png'}
            alt="Logo"
            width={200}
            height={200}
            className="object-cover mb-2"
            />
            </Link>

            <p className="text-sm font-semibold leading-relaxed mb-2">
              Experienced tiling specialists serving Sydney since 2010.
              We provide professional bathroom, kitchen, floor, wall,
              outdoor, pool and balcony tiling services throughout Sydney
              with care and quality. Our fully licensed and insured team
              with over 15 years of experience ensures your property is in
              safe hands.
            </p>

            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                <FaTiktok />
              </a>
              <a href="https://wa.me/0123456789" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                <FaWhatsapp />
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white">
                <SiThreads />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-xl text-[#1a300d] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm grid grid-cols-2 lg:grid-cols-1">
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href={'/about'} className="text-gray-600 hover:text-gray-800">About</Link>
              <Link href={'/gallery'} className="text-gray-600 hover:text-gray-800">Gallery</Link>
              <Link href={'/services'} className="text-gray-600 hover:text-gray-800">Services</Link>
              <Link href={'/contact'} className="text-gray-600 hover:text-gray-800">Contact</Link>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-bold text-xl text-[#1a300d] mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm grid grid-cols-2 lg:grid-cols-1">
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Renovations</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Bathroom Renovations</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Floor Tiling</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Wall Tiling</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Kitchen Tiling</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Outdoor Tiling</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Pool Tiling</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Balcony Tiling</Link>
              <Link href={'/'} className="text-gray-600 hover:text-gray-800">Waterproofing</Link>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-xl text-[#1a300d] mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm grid grid-cols-2 lg:grid-cols-1">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#1a300d]" />
                0123456789
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-[#1a300d]" />
                info@kntiling.com
              </li>
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-[#1a300d]" />
                Sydney, NSW
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineDocumentText className="text-[#1a300d]" />
                ABN: 72 683 763 576
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineDocumentText className="text-[#1a300d]" />
                Contractor Licence: 123456789
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-black gap-4">
          <p>© 2025 KN Tiling Pty Ltd. All rights reserved.</p>

          <div className="font-bold text-lg">Made by : <span className="bg-linear-to-r from-[#157eb6] to-[#533184] bg-clip-text text-transparent mb-4 inline-block italic">Pixel Manic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
