"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
    _id: string;
    image: string;
    title: string;
    description?: string;
    slug: string;
};

export default function ServicesSwiper() {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch("/api/services");
                if (!res.ok) return;

                const data: ServiceItem[] = await res.json();
                setServices(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchServices();
    }, []);

    if (services.length === 0) return null;

    return (
        <div className="mx-auto overflow-hidden">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Pagination, Autoplay]}
                centeredSlides
                spaceBetween={15}
                slidesPerView={1.3}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true, el: ".services-pagination" }}
                breakpoints={{
                    640: { slidesPerView: 1.6 },
                    768: { slidesPerView: 1.8 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-20"
            >
                {services.map((service) => (
                    <SwiperSlide key={service._id}>
                        {({ isActive, isPrev, isNext }) => (
                            <div
                                className={`transition-all duration-500 ${isActive ? "scale-100 opacity-100" : ""
                                    }${isPrev || isNext ? "scale-90 opacity-100" : ""}${!isActive && !isPrev && !isNext ? "scale-85 opacity-100" : ""
                                    }`}
                            >
                                <div className="bg-[#fffaf6] border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                                    <div className="relative w-full h-60">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    {service.title && (
                                        <div className="p-4">
                                            <h3 className="font-semibold text-xl">{service.title}</h3>
                                            {service.description &&
                                                <p className="text-gray-600 mt-2 text-sm">
                                                    {service.description}
                                                </p>}
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="text-sm font-medium inline-flex items-center mt-4 gap-1 hover:underline"
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination as small black lines */}
            <div className="flex justify-center items-center my-4 services-pagination">
                {/* Swiper will inject bullets here */}
            </div>

            <style jsx global>{`
  .services-pagination .swiper-pagination-bullet {
    width: 15px !important;
    height: 4px !important;
    background: black !important;
    border-radius: 0 !important;
    transition: width 0.3s;
    margin: 0 2px; /* space between lines */
  }
  .services-pagination .swiper-pagination-bullet-active {
    width: 40px !important;
  }
`}</style>

        </div>
    );
}
