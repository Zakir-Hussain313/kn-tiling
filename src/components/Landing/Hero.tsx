import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
    return (
        <main className="relative flex flex-col lg:flex-row gap-12 py-20 px-6 md:px-16 lg:bg-[#e4f5ed] overflow-hidden">

            {/* Mobile / Tablet Background Image */}
            <div className="absolute inset-0 lg:hidden -z-10">
                <Image
                    src="/hero-img-1.avif"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <section className="flex flex-col gap-5 max-w-xl text-white lg:text-[#20244d]">
                
                {/* Verified Tag */}
                <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-green-600/90 text-white text-sm font-medium">
                    <FaCheckCircle size={16} />
                    Verified Business
                </div>

                <h1 className="text-5xl font-semibold mb-6 mt-8">
                    Crafting Surfaces For{" "}
                    <span className="font-bold">Elevated</span> Living
                </h1>

                <p className="font-semibold md:text-lg mb-2">
                    Sydney&apos;s trusted tiling company providing expert bathroom, kitchen,
                    floor, outdoor and pool tiling services with 15+ years of experience and
                    quality craftsmanship
                </p>

                <Link
                    href="#contact"
                    className="bg-[#1a300d] text-white px-6 py-3 w-fit font-medium hover:opacity-90 transition flex gap-3 items-center"
                >
                    Call Now <FaArrowRightLong />
                </Link>
            </section>

            {/* Desktop Images */}
            <section className="flex flex-col gap-4">
                <article className="hidden lg:flex gap-6">
                    <div className="relative w-64 h-110">
                        <Image
                            src="/hero-img-1.avif"
                            alt="Hero Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-64 h-110">
                        <Image
                            src="/hero-img-2.avif"
                            alt="Hero Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </article>
                <article className="flex justify-center gap-3">
                    <div className="flex justify-center items-center md:p-3 p-1 bg-green-900 text-white">
                        <h1 className="md:text-xl">15+ Years of Experience</h1>
                    </div>
                    <div className="flex justify-center items-center bg-white md:p-3 p-1">
                        <h1 className="md:text-xl">95% Happy Clients Rate</h1>
                    </div>
                </article>
            </section>
        </main>
    );
}
