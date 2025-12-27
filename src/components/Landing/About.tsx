"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
    return (
        <main className="flex justify-center pt-8 md:py-20 bg-[#e4f5ed] border-b-2 lg:border-none pb-4 border-black">
            <div className="w-[90%] lg:w-[80%]">

                {/* ================= MOBILE & TABLET ================= */}
                <section className="block lg:hidden bg-white shadow-md rounded-md overflow-hidden">

                    {/* Image with text overlay */}
                    <div className="relative w-full h-72 sm:h-80">
                        <Image
                            src="/gallery-4.jpeg"
                            alt="About KN Tiling"
                            fill
                            priority
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Text on image */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-gray-900 font-extrabold italic text-lg">
                                About Us
                            </h3>

                            <h2 className="text-xl sm:text-4xl pr-12 text-[#20244d] font-bold leading-tight">
                                KN’s Trusted Tiling Company
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-4">
                        <p className="md:text-lg font-semibold text-[#1a300d]">
                            Expert tilers and tiling services for every project throughout Sydney
                        </p>

                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            KN Tiling is a locally owned tiling company established in 2010. We provide
                            comprehensive tiling services throughout Sydney, specialising in bathroom
                            tiling, kitchen tiling, floor tiling, wall tiling, outdoor tiling, and
                            waterproofing solutions. Our team of professional tilers brings over 15
                            years of industry experience to every tiling project in Sydney.
                        </p>

                        <Link
                            href="/about"
                            className="mt-6 bg-[#1a300d] text-white px-6 py-3 w-fit flex items-center gap-3 font-medium hover:opacity-90 transition"
                        >
                            Learn More <FaArrowRightLong />
                        </Link>
                    </div>
                </section>

                {/* ================= DESKTOP & LAPTOP ================= */}
                <section className="hidden lg:grid grid-cols-2 gap-0">

                    {/* Top-left text */}
                    <aside className="flex flex-col pt-24 p-8 bg-white">
                        <h1 className="font-bold text-5xl text-[#1a300d] mb-3">About Us</h1>
                        <h2 className="font-bold text-3xl text-gray-900 mt-3">
                            Sydney&apos;s Trusted Tiling Company
                        </h2>
                        <p className="font-semibold text-lg md:text-xl text-gray-700 mt-4 max-w-md">
                            Expert tilers providing premium tiling services for every project all over Sydney
                        </p>
                    </aside>

                    {/* Top-right image */}
                    <aside className="relative h-112">
                        <Image
                            src="/about-img-1.avif"
                            alt="About Image 1"
                            fill
                            className="object-cover"
                        />
                    </aside>

                    {/* Bottom-left image */}
                    <aside className="relative h-112">
                        <Image
                            src="/about-img-2.avif"
                            alt="About Image 2"
                            fill
                            className="object-cover"
                        />
                    </aside>

                    {/* Bottom-right text */}
                    <aside className="flex flex-col pt-24 p-8 bg-white">
                        <p className="font-semibold text-gray-700 text-lg md:text-xl max-w-md">
                            KN Tiling is a locally owned tiling company established in 2010. We provide
                            comprehensive tiling services across Sydney, specialising in bathroom,
                            kitchen, floor, wall, outdoor tiling, and waterproofing solutions. Our team of professional tilers bring over 15 years of industry experience to every project we undertake...
                        </p>

                        <Link
                            href="/about"
                            className="mt-6 bg-[#1a300d] text-white px-6 py-3 w-fit flex items-center gap-3 font-medium hover:opacity-90 transition"
                        >
                            Know More <FaArrowRightLong />
                        </Link>
                    </aside>

                </section>
            </div>
        </main>
    );
}
