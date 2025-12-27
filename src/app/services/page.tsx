"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
    _id: string;
    title: string;
    description: string;
    image: string;
    slug?: string; // Optional if you generate slug dynamically
}

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);

    // Fetch services from API
    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch("/api/services");
                const data = await res.json();
                // Optional: generate slugs if not present
                const servicesWithSlug = data.map((s: Service) => ({
                    ...s,
                    slug: s.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, ""),
                }));
                setServices(servicesWithSlug);
            } catch (err) {
                console.error("Failed to load services", err);
            }
        }
        fetchServices();
    }, []);

    return (
        <main className="bg-[#e9f6ee]">

            {/* Hero */}
            <section className="relative h-75 w-full">
                <Image
                    src="/gallery-1.jpeg"
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
                    {services.map(service => (
                        <Link
                            key={service._id}
                            href={`/services/${service.slug}`}
                            className="block"
                        >
                            <div className="bg-white rounded shadow hover:shadow-lg transition cursor-pointer">
                                <div className="relative h-52 w-full">
                                    <Image
                                        src={service.image}
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
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 font-medium text-sm hover:underline">
                                        Learn More →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Gallery + About */}
            <section className="grid md:grid-cols-2 border-t border-gray-500">

                <div className="py-8 md:py-20 px-6 text-center md:border-r md:border-b border-black">
                    <h3 className="text-3xl font-bold text-[#1a300d] italic mb-2">
                        Know More About Us
                    </h3>
                    <p className="text-gray-700 mb-8 font-bold">
                        Your local tiling experts in Sydney since 2010
                    </p>
                    <Link
                        href="/about"
                        className="inline-block bg-[#1a300d] text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
                    >
                        Learn More →
                    </Link>
                </div>

                <div className="py-8 md:py-20 px-6 text-center border-b border-t md:border-t-0 border-black">
                    <h3 className="text-3xl font-bold text-[#1a300d] italic mb-2">
                        Check Our Gallery
                    </h3>
                    <p className="text-gray-700 mb-8 font-bold">
                        View our professional tiling projects throughout Sydney
                    </p>
                    <Link
                        href="/gallery"
                        className="inline-block bg-[#1a300d] text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
                    >
                        Learn More →
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 text-center">
                <h2 className="text-3xl italic text-[#1a300d] font-bold mb-3">
                    Ready to Work with KN’s Tiling Experts?
                </h2>
                <p className="text-sm font-bold text-gray-700 mb-6">
                    Our qualified team is here to help with all your tiling needs
                </p>
                <Link href={'/contact'} className="bg-[#1b3a1b] text-white px-8 py-3 font-semibold cursor-pointer hover:bg-[#122507] transition">
                    Call Now: 0123456789
                </Link>
            </section>
        </main>
    );
}
