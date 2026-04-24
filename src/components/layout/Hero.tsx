"use client";

import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/profile.jpeg";
import AboutMe from "@/components/layout/AboutMe";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
    const { ref, inView } = useInView<HTMLElement>();

    return (
        <section ref={ref} className="mt-0 md:mt-10">
            <div className="flex flex-col md:flex-row md:w-full justify-center items-start gap-4 md:gap-10">
                <div className={`animate-on-scroll ${inView ? "is-visible" : ""}`}>
                    <Image
                        src={ProfileImage}
                        alt="Profile Image"
                        width={150}
                        height={150}
                        className="rounded-full shadow-[0_4px_12px_var(--shadow)]"
                    />
                </div>

                <div
                    className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "150ms" : "0ms" }}
                >
                    <AboutMe />
                </div>
            </div>
        </section>
    );
}
