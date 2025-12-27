"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

type GalleryItem = {
  _id: string;
  image: string;
};

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch("/api/gallery");
        if (!res.ok) return;

        const data: GalleryItem[] = await res.json();
        setGalleryImages(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGallery();
  }, []);

  if (galleryImages.length === 0) return null;

  return (
    <section className="bg-[#e9f6ef] py-12 md:py-20">
      <div className="mx-auto px-6">
        {/* Heading */}
        <div className="mb-8 md:mb-14">
          <h2 className="text-4xl sm:text-4xl font-bold text-[#1a300d]">
            Our Works
          </h2>
          <h3 className="font-semibold text-lg text-[#20244d] italic mt-1">
            Our tiling projects
          </h3>
          <p className="text-gray-700 mt-1 text-sm">
            Explore our portfolio of high-quality tiling services across Sydney
          </p>
        </div>

        {/* Swiper */}
        <div className="mx-auto overflow-hidden">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            centeredSlides
            spaceBetween={15}
            slidesPerView={1.3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".gallery-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item._id}>
                {({ isActive, isPrev, isNext }) => (
                  <div
                    className={`transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100" : ""
                    }${isPrev || isNext ? "scale-90 opacity-70" : ""}${
                      !isActive && !isPrev && !isNext ? "scale-85 opacity-50" : ""
                    }`}
                  >
                    <div className="bg-[#fffaf6] border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                      <div className="relative w-full h-72 md:h-80">
                        <Image
                          src={item.image}
                          alt="Project image"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination below the Swiper */}
          <div className="flex justify-center items-center my-4 gallery-pagination"></div>

          {/* Custom pagination styling */}
          <style jsx global>{`
            .gallery-pagination .swiper-pagination-bullet {
              width: 15px !important;
              height: 4px !important;
              background: black !important;
              border-radius: 0 !important;
              transition: width 0.3s;
              margin: 0 2px;
            }
            .gallery-pagination .swiper-pagination-bullet-active {
              width: 40px !important;
            }
          `}</style>
        </div>

        {/* See More */}
        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="bg-[#1a300d] text-white px-8 py-3 font-medium hover:opacity-90 transition"
          >
            See Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
