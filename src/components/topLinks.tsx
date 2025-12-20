import Link from "next/link";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const infos = [
    { icon: <IoMail />, info: "info@kntiling.com.au", path: "" },
    { icon: <FaPhone />, info: "0417 823 582", path: "" },
    { icon: <IoLocationSharp />, info: "Sydney, NSW", path: "" },
];

const socials = [
    { icon: <RiInstagramFill />, path: "" },
    { icon: <FaFacebook />, path: "" },
    { icon: <IoLogoWhatsapp />, path: "" },
];

export default function TopLinks() {
    return (
        <div className="sticky top-0 z-50">
            <main className="flex items-center justify-between h-12 px-8 backdrop-blur-md border-b-2 border-gray-300">

                {/* Left Info */}
                <section className="flex gap-6">
                    {infos.map((info, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <Link
                                href={info.path}
                                className="text-xl hover:text-[#1a300d] transition"
                            >
                                {info.icon}
                            </Link>
                            <span className="font-semibold hidden md:flex">
                                {info.info}
                            </span>
                        </div>
                    ))}
                </section>

                {/* Socials */}
                <section className="flex gap-6">
                    {socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.path}
                            className="text-xl hover:text-[#1a300d] transition"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </section>

            </main>
        </div>
    );
}
