"use client";

import React, { useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import ArrowUpIcon from "@/assets/icons/arrowUp";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Modal from "@/components/ui/Modal";
import newmannImg from "@/assets/projects-images/newmann-prj.png";
import caeImg from "@/assets/projects-images/cae-prj.png";
import flowascendImg from "@/assets/projects-images/flowascend-prj.png";
import newmannWebsiteImg from "@/assets/projects-images/newmann-website.png";

const projects = [
    {
        number: "01",
        title: "AI Dashboard",
        company: "Newmann",
        description:
            "Gmail oriented dashboard that helps users manage labels with AI and more. Built a responsive frontend with Next.js and Tailwind CSS, starting from a Figma wireframe to map out the UI/UX.",
        tags: ["Next", "Tailwind", "Figma"],
        href: "https://newmann.ai/",
        image: newmannImg,
        restricted: true,
    },

    {
        number: "02",
        title: "Newmann Website",
        company: "Newmann",
        description:
            "The main website of Newmann, I designed and developed it to showcase the product and its features, as well as to provide information about the company.",
        tags: ["Next", "Tailwind", "Figma"],
        href: "https://newmann.ai/",
        image: newmannWebsiteImg,
    },
    {
        number: "03",
        title: "Management App",
        company: "CAE",
        description:
            "A web application developed to manage employees, their shifts and tasks. This project was assigned to me during my internship at CAE",
        tags: ["React", "Express", "Tailwind", "SQL"],
        href: "https://github.com/Vladdddy/CAE-Rework",
        image: caeImg,
        restricted: true,
    },
    {
        number: "04",
        title: "Landing Page",
        company: "Flowascend",
        description:
            "E-commerce platform for selling t-shirts with unique designs. It was founded by me as a side project but I put it on hold due to insufficient resources to continue.",
        tags: ["React", "Express", "Figma"],
        href: "https://flowascend.vercel.app/",
        image: flowascendImg,
    },
];

export default function Projects() {
    const [tooltip, setTooltip] = useState<{
        x: number;
        y: number;
        image: StaticImageData | null;
    }>({ x: 0, y: 0, image: null });
    const [warningOpen, setWarningOpen] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent, image: StaticImageData) => {
            setTooltip({ x: e.clientX, y: e.clientY, image });
        },
        [],
    );

    const handleMouseLeave = useCallback(() => {
        setTooltip((prev) => ({ ...prev, image: null }));
    }, []);

    return (
        <section className="mt-10">
            <ScrollReveal className="flex flex-col md:flex-row gap-4 md:gap-10 mt-20">
                <h1 className="text-(--subtext) w-fit text-xs md:text-sm tracking-widest pb-2 relative uppercase mb-10">
                    Coding Projects
                    <span
                        className="absolute bottom-0 left-0 w-full"
                        style={{
                            height: "1px",
                            background:
                                "linear-gradient(90deg, var(--primary), var(--light-bg))",
                        }}
                    />
                </h1>
            </ScrollReveal>

            {projects.map((project, index) => (
                <ScrollReveal
                    as="a"
                    key={project.number}
                    href={project.restricted ? undefined : project.href}
                    target={project.restricted ? undefined : "_blank"}
                    rel={project.restricted ? undefined : "noopener noreferrer"}
                    delay={(index % 3) * 100}
                    className="flex flex-col md:flex-row items-start gap-4 cursor-pointer"
                    onMouseMove={(e: React.MouseEvent) =>
                        handleMouseMove(e, project.image)
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={
                        project.restricted
                            ? (e: React.MouseEvent) => {
                                  e.preventDefault();
                                  setWarningOpen(true);
                              }
                            : undefined
                    }
                >
                    <div className="group flex flex-col gap-4 border-b border-(--separator) py-20 w-full transition-colors duration-200">
                        <div className="flex items-start md:items-center flex-col md:flex-row justify-between gap-10 md:gap-4">
                            <div className="flex items-center gap-4 md:gap-10">
                                <span className="text-(--primary) text-xs md:text-lg font-normal">
                                    {project.number}
                                </span>
                                <h1 className="text-4xl lg:text-7xl font-black text-(--subtext) group-hover:text-(--text-white) transition-colors duration-200">
                                    {project.title}
                                </h1>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <div className="flex items-start md:items-center justify-between gap-4 w-full">
                                    <h1 className="text-(--subtext) group-hover:text-(--text-white) transition-colors duration-200 text-sm tracking-wide">
                                        <span className="text-(--primary) text-md mr-2">
                                            ✦
                                        </span>
                                        {project.company}
                                    </h1>
                                    <span className="text-(--primary)">
                                        <ArrowUpIcon className="w-4 h-4 md:w-6 md:h-6" />
                                    </span>
                                </div>

                                <p className="text-(--placeholder-text) group-hover:text-(--text-white) transition-colors duration-200 text-xs leading-tight max-w-xs">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap max-w-sm gap-2">
                                    {project.tags.map((tag) => (
                                        <p
                                            key={tag}
                                            className="w-fit text-(--subtext) text-xs border border-(--div-stroke) py-2 px-4 rounded-full flex items-center justify-start gap-2"
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}

            {tooltip.image && (
                <div
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: tooltip.x + 24,
                        top: tooltip.y - 120,
                    }}
                >
                    <div className="rounded-xs overflow-hidden border border-(--separator)">
                        <Image
                            src={tooltip.image}
                            alt="Project preview"
                            width={600}
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>
            )}

            <Modal
                open={warningOpen}
                title="Warning"
                description="This project is currently private or hasn't been publicly released yet, so it can't be viewed right now."
                onClose={() => setWarningOpen(false)}
            />
        </section>
    );
}
