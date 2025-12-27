"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  _id: string;
  title: string;
  image: string;
  description : string;
  slug: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/services");
        if (res.ok) {
          const data: Service[] = await res.json();
          setServices(data);
        } else {
          console.error("Failed to fetch services");
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchServices();
  }, []);

  if (services.length === 0) return null; // optionally show a loader

  return (
    <section className="bg-[#e9f6ef] py-8 md:py-20">
      <div className="mx-auto px-6">

        {/* Heading */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#20244d]">
            Our Tiling Services
          </h2>
          <p className="text-gray-700 mt-1">
            Professional Tiling Services Across Sydney
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service._id}
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
              <div className="py-6 px-4">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-left text-sm">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-medium inline-flex items-center mt-4 gap-1 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
