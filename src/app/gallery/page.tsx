"use client";

import TextReveal from "@/components/TextReveal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GalleryImage {
  _id?: string;
  title: string;
  image: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await fetch("/api/gallery");
        if (!res.ok) throw new Error("Failed to fetch gallery images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadGallery();
  }, []);

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
          {images.map((img, index) => (
            <div
              key={img._id ?? index}
              className="relative w-full overflow-hidden rounded-sm bg-white shadow-sm break-inside-avoid"
            >
              <Image
                src={img.image}
                alt={img.title || `Gallery image ${index + 1}`}
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
        <div className="py-8 md:py-20 px-6 text-center border-b md:border-b-0 md:border-r border-emerald-200">
          <h3 className="text-xl font-semibold mb-2">
            Know More About Us
          </h3>
          <p className="text-gray-700 mb-6">
            Know more about your go-to tiling services company in Sydney
          </p>
          <a
            href="/about"
            className="inline-block bg-emerald-800 text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
          >
            Learn More →
          </a>
        </div>

        <div className="py-8 md:py-20 px-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Our Tiling Services
          </h3>
          <p className="text-gray-700 mb-6">
            View our professional tiling projects throughout Sydney
          </p>
          <Link
            href="/services"
            className="inline-block bg-emerald-800 text-white px-6 py-3 font-semibold hover:bg-emerald-900 transition"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
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
