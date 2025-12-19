"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
  "/about-img-1.avif",
  "/about-img-2.avif",
  "/about-img-1.avif",
  "/about-img-2.avif",
  "/about-img-1.avif",
  "/about-img-2.avif",
];

export default function Gallery() {
  return (
    <section className="bg-[#e9f6ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#20244d]">
            Our Projects Gallery
          </h2>
          <p className="text-gray-700 mt-1">
            A showcase of our recent tiling work across Sydney
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fffaf6] border border-gray-300 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* See More Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/gallery"
            className="bg-[#1a300d] text-white px-8 py-3 font-medium hover:opacity-90 transition"
          >
            See More
          </Link>
        </div>

      </div>
    </section>
  );
}
