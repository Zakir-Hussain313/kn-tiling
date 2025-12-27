import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="bg-emerald-50 text-gray-900">

            {/* HERO SECTION */}
            <section className="relative h-80">
                <Image
                    src="/about-img-2.avif"
                    alt="About KN Tiling"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 md:px-20">
                    <p className="text-sm text-white/80 mb-2">
                        Home <span className="mx-1">›</span> About
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        About KN Tiling
                    </h1>
                    <p className="mt-3 text-white/90 max-w-xl">
                        Your local tiling specialists in Sydney since 2010
                    </p>
                </div>
            </section>

            {/* OUR JOURNEY */}
            <section className="px-6 md:px-20 py-6 lg:py-20">
                <div className="grid md:grid-cols-2 bg-white shadow-sm">

                    {/* Image */}
                    <div className="relative h-87.5 md:h-auto">
                        <Image
                            src="/gallery-4.jpeg"
                            alt="Professional tiling work"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 z-20 block lg:hidden text-white">
                            <span className="font-semibold text-blue-900">
                                EST. 2010
                            </span>

                            <h2 className="text-4xl italic md:text-5xl font-bold text-[#1a300d] mb-4 md:mb-8">
                                Our Journey
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-10">
                        <div className="hidden lg:block">
                            <span className="font-bold">
                                EST. 2010
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-[#747554] mb-4 md:mb-8">
                                Our Journey
                            </h2>
                        </div>

                        <h4 className="text-lg text-emerald-900 font-semibold my-4 md:mb-6">
                            A tradition of tiling excellence across Sydney
                        </h4>

                        <p className="mb-4 text-sm font-semibold leading-relaxed text-gray-700">
                            KN Tiling started as a specialised tiling business with a
                            commitment to quality craftsmanship and expertise in tiling
                            solutions. Found in 2010, we’ve grown into one of Sydney’s
                            most trusted tiling teams, while still maintaining our core
                            values and personalized approach.
                        </p>

                        <p className="leading-relaxed text-sm font-semibold text-gray-700 mb-4">
                            With over 15 years of experience, our team of qualified tiling
                            specialists has built strong reputation for delivering reliable,
                            compilant, and high-qulity tiling services throughout Sydney. We
                            combine our extensive knowledge of tiling materials and techniques
                            with up-to-date industry practices to provide the best solutions
                            for your property.
                        </p>
                        <p className="leading-relaxed text-sm font-semibold text-gray-700">
                            Our comprehensive understanding of Australian Standards and
                            building codes, alongside our commitment to customer satisfaction,
                            ensures that all work we undertake meets the highest industry
                            standards. From bathroom renovations to outdoor tiling projects, we
                            handle every job with the same level of care and professionalism.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA BOXES */}
            <section className="grid md:grid-cols-2 bg-emerald-100">

                <div className="py-8 md:py-20 px-6 text-center border-t border-b md:border-b-0 md:border-r border-black">
                    <h3 className="text-3xl font-bold text-[#1a300d] italic mb-2">
                        Check Our Gallery
                    </h3>
                    <p className="text-gray-700 mb-8 font-bold">
                        View our professional tiling projects throughout Sydney
                    </p>
                    <a
                        href="/gallery"
                        className="inline-block bg-[#1a300d] text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
                    >
                        Learn More →
                    </a>
                </div>

                <div className="py-8 md:py-20 px-6 text-center lg:border-t border-black">
                    <h3 className="text-3xl font-bold text-[#1a300d] italic mb-2">
                        Our Tiling Services
                    </h3>
                    <p className="text-gray-700 mb-8 font-bold">
                        View our professional tiling projects throughout Sydney
                    </p>
                    <Link
                        href="/services"
                        className="inline-block bg-[#1a300d] text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
                    >
                        Learn More →
                    </Link>
                </div>
                <section className="py-16 px-4 text-center">
                    <h2 className="text-3xl italic text-[#1a300d] font-bold mb-3">
                        Ready to Work with KN’s Tiling Experts?
                    </h2>
                    <p className="text-sm font-bold text-gray-700 mb-6">
                        Our qualified team is here to help with all your tiling needs
                    </p>
                    <button className="bg-[#1b3a1b] text-white px-8 py-3 font-semibold cursor-pointer hover:bg-[#122507] transition">
                        Call Now: 0123456789
                    </button>
                </section>
            </section>
        </main>
    );
}
