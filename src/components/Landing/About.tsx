import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 my-12">
                <aside className="w-[80vw] md:w-[40vw] h-auto md:h-[50vh] bg-white">
                    <div className="flex flex-col gap-3 p-5">
                        <h1 className="font-bold text-4xl lg:text-5xl text-[#1a300d]">About Us</h1>
                        <h2 className="font-bold text-2xl lg:text-3xl text-gray-900">
                            Sydney&apos;s Trusted Tiling Company
                        </h2>
                        <p className="font-semibold">
                            Expert tilers providing premium tiling services for every project
                            all over Sydney
                        </p>
                    </div>
                </aside>
                <aside className="w-[80vw] md:w-[40vw] h-[50vh] sm:h-[40vh] md:h-[50vh] hidden md:block">
                    <div className="relative w-full h-full">
                        <Image
                            src={'/about-img-1.avif'}
                            alt="About Images"
                            fill
                            className="object-cover"
                        />
                    </div>
                </aside>
                <aside className="w-[80vw] md:w-[40vw] md:h-[65vh] lg:h-[60vh] hidden md:block">
                    <div className="relative w-full h-full">
                        <Image
                            src={'/about-img-2.avif'}
                            alt="About Images"
                            fill
                            className="object-cover"
                        />
                    </div>
                </aside>
                <aside className="w-[80vw] md:w-[40vw] h-auto md:h-[50vh] bg-white p-5 flex gap-5 flex-col">
                    <p className="font-semibold text-lg md:text-base lg:text-lg">
                        KN Tiling is a locally owned tiling company established in 2010. We
                        provide comprehensive tiling services across Sydney, specialising in
                        bathroom, kitchen, floor, wall, and outdoor tiling, as well as
                        waterproofing solutions. Our team brings 15+ years of industry
                        experience to every project we undertake.
                    </p>
                    <Link
                        href="/about"
                        className="bg-[#1a300d] text-white px-6 py-3 font-medium hover:opacity-90 transition w-40 flex gap-3 items-center mb-5"
                    >
                        Know More <FaArrowRightLong />
                    </Link>
                </aside>
            </div>
        </main>
    );
}
