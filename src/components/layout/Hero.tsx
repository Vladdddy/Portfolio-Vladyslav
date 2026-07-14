"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import Button from "../ui/Button";
import FaviconIcon from "../../assets/icons/favicon";

export default function Hero() {
    const { ref, inView } = useInView<HTMLElement>();

    return (
        <section
            ref={ref}
            className="mt-0 h-[80vh] flex flex-col pt-10 md:pt-40"
        >
            <div
                className={`animate-on-scroll ${inView ? "is-visible" : ""} flex flex-col md:w-full gap-4 h-full md:gap-20`}
                style={{ transitionDelay: inView ? "150ms" : "0ms" }}
            >
                <FaviconIcon className="w-50 h-50 md:w-30 md:h-30 lg:absolute lg:-translate-x-1/4 lg:-translate-y-1/4 text-(--primary) lg:text-(--primary-dark)" />
                <h1 className="text-(--text-white) font-black text-5xl lg:text-[160px]">
                    <span className="relative inline-block">
                        {/* Stroke-only layer (full width) */}
                        <span
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "2px var(--primary)",
                            }}
                        >
                            FRONTEND
                        </span>

                        {/* Filled layer, clipped to left half */}
                        <span
                            className="absolute inset-0"
                            style={{
                                color: "var(--primary)",
                                WebkitTextStroke: "2px var(--primary)",
                                clipPath:
                                    "polygon(0 0, 58% 0, 55% 100%, 0 100%)",
                            }}
                        >
                            FRONTEND
                        </span>
                    </span>{" "}
                    DEVELOPER
                </h1>

                <div className="flex justify-between md:items-center flex-col md:flex-row gap-4 mt-auto">
                    <p className="text-(--subtext) text-xs md:text-[14px] mt-4 max-w-xl leading-snug">
                        Founding Frontend & UX Engineer at{" "}
                        <Link
                            href="https://newmann.ai/"
                            target="_blank"
                            className="font-normal text-(--text) cursor-pointer"
                        >
                            Newmann
                        </Link>
                        . I design clean interfaces in Figma and engineer them
                        into production-ready products with React/Next and
                        Tailwind.
                    </p>

                    <div className="mt-4 w-full md:w-fit">
                        <a
                            href="/Resume_Vladyslav.pdf"
                            download="Resume_Vladyslav.pdf"
                        >
                            <Button
                                type="primary"
                                text="Resume"
                                icon={<DownloadIcon className="w-5 h-5" />}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
