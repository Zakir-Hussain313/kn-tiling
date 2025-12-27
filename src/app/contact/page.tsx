import Image from "next/image";
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

export default function Contact() {
    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-80">
                <Image
                    src="/about-img-2.avif"
                    alt="About KN Tiling"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 md:px-20">
                    <p className="text-sm text-white/80 mb-2">
                        Home <span className="mx-1">›</span> Contact
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Contact Us
                    </h1>
                    <p className="mt-3 text-white/90 max-w-xl">
                        Get in touch with us
                    </p>
                </div>
            </section>

            {/* Info Cards */}
            <div className="mx-auto hidden md:grid grid-cols-3 gap-6 py-10 px-4">
                {/* Phone */}
                <div className="bg-white text-[#20244d] rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <AiOutlinePhone className="w-12 h-12 mb-4" size={48} />
                    <h3 className="mb-1 font-bold text-2xl italic">Call Us</h3>
                    <p className="font-bold text-xl italic">+61 2 1234 5678</p>
                </div>

                {/* Email */}
                <div className="bg-white text-[#20244d] rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <AiOutlineMail className="w-12 h-12 mb-4" size={48} />
                    <h3 className="mb-1 font-bold text-2xl italic">Email Us</h3>
                    <p className="font-bold text-xl italic">info@kntiling.com</p>
                </div>

                {/* Working Hours */}
                <div className="bg-white text-[#20244d] rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <AiOutlineClockCircle className="w-12 h-12 mb-4" size={48} />
                    <h3 className="mb-1 font-bold text-2xl italic">Business Hours</h3>
                    <p className="font-bold text-xl italic">Mon-Sat : 8am-5pm</p>
                </div>
            </div>

            {/* Form + Map Section */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-4 pb-16">
                {/* Contact Form */}
                <form className="bg-white rounded-lg p-8 shadow-lg flex-1 mt-8 md:mt-0 flex flex-col gap-6">
                    <h1 className="text-[#1a300d] font-bold text-2xl uppercase">Get In Touch</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex flex-col">
                            <span className="mb-1 font-semibold text-gray-700">Full Name</span>
                            <input
                                type="text"
                                className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1a300d]"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-1 font-semibold text-gray-700">Email Address</span>
                            <input
                                type="email"
                                className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1a300d]"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="mb-1 font-semibold text-gray-700">Phone Number</span>
                        <input
                            type="text"
                            className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1a300d]"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="mb-1 font-semibold text-gray-700">Your Message</span>
                        <textarea
                            rows={5}
                            className="border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:border-[#1a300d]"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-[#1a300d] text-white py-3 font-medium hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className=" md:hidden grid grid-cols-1 gap-6 py-10 px-4">
                    <div className="flex flex-col gap-3 rounded-lg justify-center items-center text-[#20244d] hover:shadow-md transition">
                        <AiOutlinePhone />
                        <h3 className="text-3xl font-bold">Call Us</h3>
                        <h3 className="text-3xl font-bold">123456789</h3>
                    </div>
                    <div className="flex flex-col gap-3 rounded-lg justify-center items-center text-[#20244d] hover:shadow-md transition">
                        <AiOutlinePhone />
                        <h3 className="text-3xl font-bold">Email Us</h3>
                        <h3 className="text-3xl font-bold">info@kntiling.com</h3>
                    </div>
                    <div className="flex flex-col gap-3 rounded-lg justify-center items-center text-[#20244d] hover:shadow-md transition">
                        <AiOutlinePhone />
                        <h3 className="text-3xl font-bold">Business Hours</h3>
                        <h3 className="text-3xl font-bold">Mon-Fri : 8am-5pm</h3>
                    </div>
                </div>

                {/* Map */}
                <div className="flex-1 rounded-lg overflow-hidden shadow-md h-142.5">
                    <iframe
                        title="Sydney Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.935401433988!2d151.20699031521232!3d-33.86748618065314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f5f0a3e17%3A0x5017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1698164163956!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
