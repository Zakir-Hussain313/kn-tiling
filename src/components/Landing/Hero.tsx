"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import TextReveal from "../TextReveal";

const StatsBar = ({ className = "" }) => (
    <div
        className={`grid grid-cols-3 text-center text-sm font-semibold overflow-hidden ${className}`}
    >
        <div className="bg-[#1a300d] text-white py-2 px-4 flex flex-col items-center gap-1">
            <span className="text-xl font-bold">15+</span>
            <span>Years of Experience</span>
        </div>

        <div className="bg-white text-[#20244d] py-2 px-4 flex flex-col items-center gap-1">
            <span className="text-xl font-bold">100%</span>
            <span>Licensed</span>
        </div>

        <div className="bg-white text-[#20244d] py-2 px-4 flex flex-col items-center gap-1">
            <span className="text-xl font-bold">∞</span>
            <span>Happy Clients</span>
        </div>
    </div>
);

export default function Hero() {
    return (
        <main className="relative flex flex-col lg:flex-row py-20 px-6 md:px-16 lg:px-24 lg:bg-[#e4f5ed] overflow-hidden max-w-7xl mx-auto">

            {/* ================= MOBILE / TABLET BACKGROUND ================= */}
            <div className="absolute inset-0 lg:hidden -z-10">
                <Image
                    src="/hero-img-1.avif"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* ================= LEFT: TEXT ================= */}
            <section className="flex-1 flex flex-col gap-5 max-w-xl text-white lg:text-[#20244d] relative z-10">

                <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-green-600/90 text-white text-sm font-medium">
                    <FaCheckCircle size={16} />
                    Verified Business
                </div>

                <TextReveal className="text-4xl sm:text-5xl font-semibold leading-tight mt-8">
                    Crafting Surfaces for <br />
                    <span className="font-bold">Elevated Living</span>
                </TextReveal>

                <p className="font-medium md:text-lg max-w-md">
                    Sydney&apos;s trusted tiling company providing expert bathroom, kitchen,
                    outdoor and pool tiling services with 15+ years experience and quality
                    craftsmanship guaranteed
                </p>

                <Link
                    href="#contact"
                    className="mt-4 bg-[#1a300d] text-white px-6 py-4 w-fit font-medium flex gap-3 items-center hover:opacity-90 transition"
                >
                    Call Now <FaArrowRightLong />
                </Link>

                {/* MOBILE / TABLET STATS */}
                <div className="lg:hidden mt-10">
                    <StatsBar className="w-full" />
                </div>
            </section>

            {/* ================= RIGHT: IMAGES + STATS ================= */}
            <section className="hidden lg:flex flex-col flex-1 items-center gap-6">

                {/* Images */}
                <div className="flex gap-6">
                    <div className="relative w-64 h-110">
                        <Image
                            src="/hero-img-1.avif"
                            alt="Hero Image 1"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative w-64 h-110">
                        <Image
                            src="/hero-img-2.avif"
                            alt="Hero Image 2"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* DESKTOP STATS — DIRECTLY UNDER IMAGES */}
                <div className="mt-2">
                    <StatsBar className="max-w-md" />
                </div>
            </section>

        </main>
    );
}
