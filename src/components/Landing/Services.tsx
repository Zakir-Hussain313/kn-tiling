import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Renovations",
    image: "/services-1.avif",
  },
  {
    title: "Renovations",
    image: "/services-1.avif",
  },
  {
    title: "Renovations",
    image: "/services-1.avif",
  },
  {
    title: "Renovations",
    image: "/services-1.avif",
  },
  {
    title: "Renovations",
    image: "/services-1.avif",
  },
  {
    title: "Renovations",
    image: "/services-1.avif",
  },
];

export default function Services() {
  return (
    <section className="bg-[#e9f6ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#20244d]">
            Our Tiling Services
          </h2>
          <p className="text-gray-700 mt-1">
            Professional Tiling Services Across Sydney
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#fffaf6] border border-gray-300 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <Link
                  href="/services"
                  className="text-sm font-medium inline-flex items-center gap-1 hover:underline"
                >
                  learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
