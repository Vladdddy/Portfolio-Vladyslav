"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FigmaIcon from "@/assets/icons/figma.png";
import Tailors from "@/assets/projects-images/tailors.jpg";
import Carbuddy from "@/assets/projects-images/carbuddy.jpg";
import Memendar from "@/assets/projects-images/memendar.jpg";
import Strenx from "@/assets/projects-images/strenx.jpg";
import Flowascend from "@/assets/projects-images/flowascend.jpg";
import { useInView } from "@/hooks/useInView";

export default function DesignProjects() {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            className={`bg-(--div-bg) border border-(--div-stroke) p-4 rounded-xl flex flex-col gap-4 flex-1 shadow-[0_4px_12px_var(--shadow)] mt-10 animate-on-scroll ${inView ? "is-visible" : ""}`}
        >
            <h1 className="text-lg font-semibold text-(--subtext) border-b border-(--separator) pb-2 ">
                Design Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 p-0 md:p-4">
                <div
                    className={`flex flex-col gap-4 animate-fade ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "200ms" : "0ms" }}
                >
                    <Image
                        src={Tailors}
                        alt="Tailors Project"
                        className="w-full h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit border border-(--separator)"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-md font-bold tracking-wide leading-tight">
                            Giovanna & Graciela Tailor&apos;s shop
                        </h1>

                        <p className="text-(--subtext) text-sm leading-tight md:min-h-10">
                            A design project for a local starting tailor shop.
                        </p>
                    </div>
                    <Button
                        type="secondary"
                        text="Download"
                        link="/figma-files/Tailors.fig"
                        download="Tailors.fig"
                        icon={
                            <Image
                                src={FigmaIcon}
                                alt="Figma"
                                className="w-5 h-5"
                            />
                        }
                    />
                </div>

                <div
                    className={`flex flex-col gap-4 animate-fade ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "300ms" : "0ms" }}
                >
                    <Image
                        src={Carbuddy}
                        alt="Carbuddy Project"
                        className="w-full h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit border border-(--separator)"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-md font-bold tracking-wide leading-tight">
                            Carbuddy
                        </h1>

                        <p className="text-(--subtext) text-sm leading-tight md:min-h-10">
                            Web Application to track your car maintenance and
                            expenses, and get reminders for upcoming services.
                        </p>
                    </div>
                    <Button
                        type="secondary"
                        text="Download"
                        link="/figma-files/CarBuddy.fig"
                        download="CarBuddy.fig"
                        icon={
                            <Image
                                src={FigmaIcon}
                                alt="Figma"
                                className="w-5 h-5"
                            />
                        }
                    />
                </div>

                <div
                    className={`flex flex-col gap-4 animate-fade ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "400ms" : "0ms" }}
                >
                    <Image
                        src={Memendar}
                        alt="Memendar Project"
                        className="w-full h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit border border-(--separator)"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-md font-bold tracking-wide leading-tight">
                            Memendar
                        </h1>

                        <p className="text-(--subtext) text-sm leading-tight md:min-h-10">
                            A mobile app to rank monthly niche memes and share
                            them with friends.
                        </p>
                    </div>
                    <Button
                        type="secondary"
                        text="Download"
                        link="/figma-files/Memendar.fig"
                        download="Memendar.fig"
                        icon={
                            <Image
                                src={FigmaIcon}
                                alt="Figma"
                                className="w-5 h-5"
                            />
                        }
                    />
                </div>

                <div
                    className={`flex flex-col gap-4 animate-fade ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "500ms" : "0ms" }}
                >
                    <Image
                        src={Strenx}
                        alt="Strenx Project"
                        className="w-full h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit border border-(--separator)"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-md font-bold tracking-wide leading-tight">
                            Strenx Gym
                        </h1>

                        <p className="text-(--subtext) text-sm leading-tight md:min-h-10">
                            E-commerce website for a fitness related equipment
                            and apparel store.
                        </p>
                    </div>
                    <Button
                        type="secondary"
                        text="Download"
                        link="/figma-files/Strenx.fig"
                        download="Strenx.fig"
                        icon={
                            <Image
                                src={FigmaIcon}
                                alt="Figma"
                                className="w-5 h-5"
                            />
                        }
                    />
                </div>

                <div
                    className={`flex flex-col gap-4 animate-fade ${inView ? "is-visible" : ""}`}
                    style={{ transitionDelay: inView ? "600ms" : "0ms" }}
                >
                    <Image
                        src={Flowascend}
                        alt="Flowascend Project"
                        className="w-full h-auto rounded-xl shadow-[0_4px_12px_var(--shadow)] object-fit border border-(--separator)"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-(--text) text-md font-bold tracking-wide leading-tight">
                            Flowascend
                        </h1>

                        <p className="text-(--subtext) text-sm leading-tight md:min-h-10">
                            A SaaS platform started by me selling gym shirts.
                        </p>
                    </div>
                    <Button
                        type="secondary"
                        text="Download"
                        link="/figma-files/Flowascend.fig"
                        download="Flowascend.fig"
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
    );
}
