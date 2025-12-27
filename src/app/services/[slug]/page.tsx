import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDB } from "@/lib/mongodb";
import ServicesSwiper from "@/components/ServicesSwiper";

export const dynamicParams = true; // allow dynamic slugs

export default async function ServicePage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  // Resolve params in case it's a Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) notFound();

  const db = await getDB();

  // Fetch the service by slug stored in the DB
  const service = await db.collection("services").findOne({ slug });

  if (!service) notFound();

  return (
    <main className="bg-[#e9f6ee]">
      {/* Breadcrumb */}
      <div className="px-6 md:px-20 pt-6 text-sm text-gray-600">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/services">Services</Link> &gt;{" "}
        <span className="font-medium">{service.title}</span>
      </div>

      {/* Title */}
      <h1 className="px-6 md:px-20 mt-4 text-2xl md:text-3xl font-bold text-[#1a300d]">
        {service.title}
      </h1>

      {/* Hero Image */}
      {service.image && (
        <section className="px-6 md:px-20 mt-6">
          <div className="relative h-65 md:h-105">
            <Image
              src={service.image} // dynamic image from DB
              alt={service.title}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        </section>
      )}

      {/* Description / Content */}
      <section className="px-6 md:px-20 py-10 max-w-5xl">
        <p className="whitespace-pre-line text-gray-700 leading-7">
          {service.description}
        </p>
      </section>
      <section>
        <ServicesSwiper />
      </section>
    </main>
  );
}
