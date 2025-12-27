import Image from "next/image";
import Link from "next/link";
import { GiInfinity } from "react-icons/gi";

export default function Hero() {
  return (
    <>
      <main className="relative flex justify-between items-center lg:min-h-screen">
        <aside className="my-16 lg:my-0 lg:pl-5 lg:pr-12 flex flex-col justify-center gap-8 text-[#20244D] overflow-hidden">
          <h1 className="text-4xl pr-9 pl-6 lg:text-6xl font-semibold lg:px-12">Crafting Surfaces for <span className="font-bold">Elevated</span> Living</h1>
          <p className="md:text-lg pl-6 lg:px-12 pr-12 font-semibold">Sydney&apos;s trusted tiling company providing expert bathroom, kitchen, outdoor and pool tiling services with 15+ years of experience and quality craftsmanship guarenteed</p>
          <section className="grid grid-cols-[repeat(3,1fr)_2%] lg:hidden font-semibold text-sm sm:text-base">
            <div className="flex gap-2 bg-[#1a300d] text-white justify-center items-center px-2">
              <p>15+</p>
              <p className="text-center">Years of Experience</p>
            </div>
            <div className="text-center flex justify-center flex-col items-center text-black bg-white">
              <p>100%</p>
              <p>Licensed</p>
            </div>
            <div className="text-center flex justify-center flex-col items-center text-black bg-white">
              <p><GiInfinity /></p>
              <p>Happy Clients</p>
            </div>
            <div className="border-l-2 border-gray-400 bg-white h-16 w-4">

            </div>
          </section>
          <Link
            href={'/contact'}
            className="bg-[#1a300d] text-white font-semibold text-lg w-56 text-center mx-6 lg:mx-12 py-4"
          >
            Call now: 0417 823 582
          </Link>
        </aside>
        <aside className="lg:flex flex-col gap-8 hidden">
          <section className="flex gap-8 mr-16">
            <div className="relative h-110 w-60">
              <Image
                src={'/hero-img-1.avif'}
                alt="Hero Images"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-110 w-60">
              <Image
                src={'/hero-img-2.avif'}
                alt="Hero Images"
                fill
                className="object-cover"
              />
            </div>
          </section>
          <div className="flex flex-end">
            <section className="flex font-semibold">
              <div className="flex gap-1 bg-[#1a300d] text-white items-center px-4">
                <p>15+</p>
                <p className="text-center">Years of Experience</p>
              </div>
              <div className="text-center flex justify-center flex-col items-center px-6 bg-white">
                <p>100%</p>
                <p>Licensed</p>
              </div>
              <div className="text-center flex justify-center flex-col items-center px-6 bg-white">
                <p><GiInfinity /></p>
                <p>Happy Clients</p>
              </div>
              <div className="border-l-2 border-gray-400 bg-white px-3 h-16 w-30">

              </div>
            </section>
          </div>
        </aside>
      </main>
    </>
  );
}