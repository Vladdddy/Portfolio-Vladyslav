"use client";

import React, { useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import flowascendImg from "@/assets/projects-images/flowascend-prj.png";
import memendarImg from "@/assets/projects-images/memendar.jpg";
import strenxImg from "@/assets/projects-images/strenx.jpg";
import tailors from "@/assets/projects-images/tailors.jpg";
import carbuddyImg from "@/assets/projects-images/carbuddy.jpg";
import FigmaIcon from "@/assets/icons/figma.png";

const projects = [
    {
        number: "01",
        title: "Tailor's shop",
        description:
            "A design project for a local starting tailor shop 'Giovanna & Graciela'.",
        href: "Tailors.fig",
        image: tailors,
    },
    {
        number: "02",
        title: "Car Buddy",
        description:
            "Web Application to track your car maintenance and expenses, and get reminders for upcoming services.",
        href: "CarBuddy.fig",
        image: carbuddyImg,
    },
    {
        number: "03",
        title: "Memendar",
        description:
            "A mobile app to rank monthly niche memes and share them with friends.",
        href: "Memendar.fig",
        image: memendarImg,
    },
    {
        number: "04",
        title: "Strenx",
        description:
            "E-commerce website for a fitness related equipment and apparel store.",
        href: "Strenx.fig",
        image: strenxImg,
    },
    {
        number: "05",
        title: "Flowascend",
        description: "A SaaS platform started by me selling gym shirts.",
        href: "Flowascend.fig",
        image: flowascendImg,
    },
];

export default function DesignProjects() {
    const [tooltip, setTooltip] = useState<{
        x: number;
        y: number;
        image: StaticImageData | null;
    }>({ x: 0, y: 0, image: null });

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
                    Design Projects
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
                    as="span"
                    key={project.number}
                    delay={(index % 3) * 100}
                    className="flex flex-col md:flex-row items-start gap-4 cursor-pointer"
                    onMouseMove={(e: React.MouseEvent) =>
                        handleMouseMove(e, project.image)
                    }
                    onMouseLeave={handleMouseLeave}
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

                            <div className="flex flex-col items-start md:items-end gap-4 w-full md:max-w-xs">
                                <p className="text-(--placeholder-text) group-hover:text-(--text-white) transition-colors duration-200 text-xs leading-tight">
                                    {project.description}
                                </p>

                                <Button
                                    type="secondary"
                                    text="Download"
                                    link={`/figma-files/${project.href}`}
                                    download={project.href}
                                    icon={
                                        <Image
                                            src={FigmaIcon}
                                            alt="Figma"
                                            className="w-5 h-5"
                                        />
                                    }
                                />
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
        </section>
    );
}
