import Link from "next/link";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const infos = [
    { icon: <IoMail />, info: 'info@kntiling.com.au' , path : '' },
    { icon: <FaPhone />, info: '0417 823 582' , path : '' },
    { icon: <IoLocationSharp />, info: 'Sydney , NSW' , path : '' },
];

const socials = [
    { icon: <RiInstagramFill /> , path : '' },
    { icon: <FaFacebook /> , path : '' },
    { icon: <IoLogoWhatsapp /> , path : '' },
]

export default function TopLinks() {
    return (
        <>
            <main className="flex items-center justify-between h-12 py-2 px-8 border-b-2 border-b-gray-300">
                <section className="flex gap-6">
                    {infos.map((info , index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <Link href={info.path} className="text-xl hover:text-[#1a300d]">{info.icon}</Link>
                            <h1 className="font-semibold hidden md:flex">{info.info}</h1>
                        </div>
                    ))}
                </section>
                <section className="flex gap-6">
                    {socials.map((social , index) => (
                        <div key={index}>
                            <Link href={social.path} className="text-xl hover:text-[#1a300d]">{social.icon}</Link>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}