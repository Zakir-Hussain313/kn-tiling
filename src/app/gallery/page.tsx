import TextReveal from "@/components/TextReveal";
import Image from "next/image";

const images = [
    "/gallery-1.jpeg",
    "/gallery-2.jpeg",
    "/gallery-3.jpeg",
    "/gallery-4.jpeg",
    "/gallery-5.jpeg",
    "/gallery-6.jpeg",
    "/gallery-7.jpeg",
    "/gallery-8.jpeg",
    "/gallery-9.jpeg",
];

export default function GalleryPage() {
    return (
        <main className="bg-emerald-50 text-gray-900">

            {/* HERO */}
            <section className="relative h-80">
                <Image
                    src="/hero-img-1.avif"
                    alt="Gallery"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-center px-6 md:px-20">
                    <p className="text-sm text-white/80 mb-2">
                        Home <span className="mx-1">›</span> Gallery
                    </p>
                    <TextReveal
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Our Tiling Services Gallery
                    </TextReveal>
                    <p className="mt-3 text-white/90 max-w-xl">
                        View our professional tiling projects throughout KN
                    </p>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="px-6 md:px-20 py-20">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden rounded-sm bg-white shadow-sm break-inside-avoid"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                    ))}

                </div>
            </section>

            {/* CTA BOXES */}
            <section className="grid md:grid-cols-2 bg-emerald-100 border-t border-emerald-200">

                <div className="py-20 px-6 text-center border-b md:border-b-0 md:border-r border-emerald-200">
                    <h3 className="text-xl font-semibold mb-2">
                        Check Our Gallery
                    </h3>
                    <p className="text-gray-700 mb-6">
                        View our professional tiling projects throughout Sydney
                    </p>
                    <a
                        href="/gallery"
                        className="inline-block bg-emerald-800 text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
                    >
                        Learn More →
                    </a>
                </div>

                <div className="py-20 px-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                        Our Tiling Services
                    </h3>
                    <p className="text-gray-700 mb-6">
                        View our professional tiling projects throughout Sydney
                    </p>
                    <a
                        href="/services"
                        className="inline-block bg-emerald-800 text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
                    >
                        Learn More →
                    </a>
                </div>

            </section>

            {/* FINAL CTA */}
            <section className="py-24 text-center px-6">
                <h2 className="text-3xl font-bold mb-3">
                    Ready to Work with KN’s Tiling Experts?
                </h2>
                <p className="text-gray-700 mb-8">
                    Our qualified team is here to help with all your tiling needs
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-gray-900 text-white px-8 py-4 font-semibold hover:bg-black transition"
                >
                    Contact Now
                </a>
            </section>

        </main>
    );
}
