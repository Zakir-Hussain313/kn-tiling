import Image from "next/image";

const services = [
    {
        title: "Bathroom Renovations Sydney",
        desc: "Professional bathroom renovation services to transform your bathroom into a stylish and functional space throughout Sydney.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Renovations Sydney",
        desc: "Complete renovation services with full project management for bathrooms, kitchens, homes, apartments and outdoor areas throughout Sydney.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Floor Tiling Sydney",
        desc: "Expert floor tiling services using premium quality tiles to enhance the appearance and functionality of your home or business in Sydney.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Wall Tiling Sydney",
        desc: "Professional wall tiling services for bathrooms, kitchens, and feature walls to create stunning visual impact in your Sydney home.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Kitchen Tiling Sydney",
        desc: "Expert kitchen tiling services for floors, walls and splashbacks to enhance the beauty and functionality of your Sydney kitchen.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Outdoor Tiling Sydney",
        desc: "Durable and stylish outdoor tiling solutions for patios, driveways, and entertainment areas suitable for Sydney’s unique climate.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Pool Tiling Sydney",
        desc: "Specialist pool tiling services using premium waterproof and non-slip tiles to create beautiful and safe swimming environments in Sydney.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Balcony Tiling Sydney",
        desc: "Expert balcony tiling services with proper waterproofing and drainage solutions to protect and beautify your Sydney balcony.",
        img: "/gallery-1.jpeg",
    },
    {
        title: "Waterproofing Sydney",
        desc: "Expert waterproofing services for bathrooms, balconies, wet areas and basements to protect your Sydney property from water damage.",
        img: "/gallery-1.jpeg",
    },
];

export default function ServicesPage() {
    return (
        <main className="bg-[#e9f6ee]">

            {/* Hero */}
            <section className="relative h-75 w-full">
                <Image
                    src="/about-img-1.avif"
                    alt="Tiling Services"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
                    <p className="text-sm mb-2">Home &gt; Services</p>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Our Tiling Services
                    </h1>
                    <p className="mt-2 text-sm md:text-base">
                        Professional Tiling Services across Sydney
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mx-auto px-6 py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-white rounded shadow hover:shadow-lg transition"
                        >
                            <div className="relative h-52 w-full">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover rounded-t"
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="font-semibold text-lg mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6">
                                    {service.desc}
                                </p>
                                <button className="inline-flex items-center gap-2 font-medium text-sm hover:underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery + About */}
            <section className="grid md:grid-cols-2 border-t border-gray-500">

                <div className="py-8 md:py-20 px-6 text-center border-b md:border-b-0 md:border-r border-gray-500">
                    <h3 className="text-xl font-semibold mb-2">
                        Know More About Us
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Know more about your go to tiling services company in Sydney
                    </p>
                    <a
                        href="/about"
                        className="inline-block bg-[#1a300d] text-white px-6 py-3 font-semibold hover:bg-[#122507] transition"
                    >
                        Learn More →
                    </a>
                </div>
                <div className="py-8 md:py-20 px-6 text-center border-b md:border-b-0 md:border-r border-emerald-200">
                    <h3 className="text-xl font-semibold mb-2">
                        Check Our Gallery
                    </h3>
                    <p className="text-gray-700 mb-6">
                        View our professional tiling projects throughout Sydney
                    </p>
                    <a
                        href="/gallery"
                        className="inline-block bg-[#1a300d] text-white px-6 py-3 font-semibold hover:bg-[#122507] transition"
                    >
                        Learn More →
                    </a>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center">
                <h2 className="text-2xl font-bold mb-3">
                    Ready to Work with KN’s Tiling Experts?
                </h2>
                <p className="text-sm mb-6">
                    Our qualified team is here to help with all your tiling needs
                </p>
                <button className="bg-[#1b3a1b] text-white px-8 py-3 font-semibold cursor-pointer hover:bg-[#122507] transition">
                    Call Now: 0123456789
                </button>
            </section>
        </main>
    );
}
