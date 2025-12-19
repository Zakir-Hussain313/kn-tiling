import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1a300d] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-200 mt-2">
            Request a free quote or discuss your tiling project with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="text-white flex flex-col gap-8">
            <p className="text-lg max-w-md text-gray-200">
              We&apos;d love to hear about your project. Contact KN Tiling today for
              reliable, high-quality tiling services across Sydney.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl" />
                <span className="text-lg">+61 400 000 000</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" />
                <span className="text-lg">info@kntiling.com.au</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl" />
                <span className="text-lg">Sydney, NSW</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 shadow-lg flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1a300d]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1a300d]"
              />
            </div>

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1a300d]"
            />

            <textarea
              placeholder="Tell us about your project"
              rows={5}
              className="border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:border-[#1a300d]"
            />

            <button
              type="submit"
              className="bg-[#1a300d] text-white py-3 font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
