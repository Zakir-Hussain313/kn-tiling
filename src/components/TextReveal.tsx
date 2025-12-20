"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeInTextProps {
    children: ReactNode;
    className?: string;
}

export default function TextReveal({
    children,
    className = "",
}: FadeInTextProps) {
    const textRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.fromTo(
            textRef.current,
            {
                opacity: 0,
                y: 80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div className="overflow-hidden">
            <h1 ref={textRef} className={className}>
                {children}
            </h1>
        </div>
    );
}
