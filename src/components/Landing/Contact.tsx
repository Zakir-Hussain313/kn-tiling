import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1a300d] py-12 m-2 lg:m-8">
      <div className="mx-auto px-2 flex flex-col gap-8 items-center">

        {/* Heading */}
        <div className="mb-12 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-white lg:text-center">
            Ready for Professional Tiling Services in Sydney
          </h2>
        </div>

        <div className="flex flex-col gap-8 items-center">
          {/* Contact Info */}
          <div className="text-white flex flex-col gap-12 mb-4">
            <p className="text-lg lg:text-xl text-center max-w-3xl text-gray-200">
              Our qualified Sydney tilers are ready to provide expert tiling solutions across Sydney. Get a free no-obligation qoute today.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-4">
            <Link
              href={'/contact'}
              className="py-3 px-6 bg-white font-semibold"
            >
              Get a Free Qoute →
            </Link>
            <Link href={'/contact'} className="py-3 px-5 text-white border-2 border-white">
              Call now: 123456789
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
